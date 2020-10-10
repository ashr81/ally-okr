import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Flex } from '../components/atoms';
import KeyAndObjective from '../components/templates/KeyAndObjective';
import { IOKRDataType, IOKRGroupData } from '../types';
import { groupByParentObjective } from '../utils/group-by-parent-objective';


const KeyAndObjectivePage = () => {
  const [loading, setLoading] = useState(true)
  const [okrData, setOkrData] = useState<IOKRGroupData[]>([])
  const [error, setError] = useState(false)
  const [filters, setFilters] = useState<{ total: string[], selected: string[]}>({
    total: [], selected: []
  })

  useEffect(() => {
    if(loading) {
      (async function() {
        try {
          let response = await fetch(`https://okrcentral.github.io/sample-okrs/db.json`);
          const { data }: { data: IOKRDataType[] } = await response.json()
          setFilters({
            total: [],
            selected: []
          })
          const { data: okrData, filters } = groupByParentObjective(data)
          setOkrData(okrData)
          setFilters({
            total: filters, selected: filters
          })
          setLoading(false)
        } catch(err) {
          setError(true)
          setLoading(false)
        }
      })()
    }
  }, [setOkrData, loading, setError, setLoading, setFilters])
  const onClickFilter = useCallback((event) => {
    const { filterValue } = event.currentTarget.dataset;
    const filteredValue = filters.selected.filter((filter) => filter !== filterValue)
    if(filteredValue.length === filters.selected.length) {
      setFilters({
        ...filters,
        selected: [...filteredValue, filterValue]
      })
    } else {
      setFilters({
        ...filters,
        selected: filteredValue
      })
    }
  }, [setFilters, filters])

  const filteredData = useMemo(() => {
    return okrData.filter((okr) => {
      if(filters.selected.indexOf(okr.category) !== -1) {
        return {
          ...okr,
          keyResults: okr.keyResults.filter((res) => filters.selected.indexOf(res.category) !== -1)
        }
      } else {
        return false;
      }
    })
  }, [filters.selected, okrData])
  if(error) {
    return <Flex>Error is loading data.</Flex>
  } else if(loading) {
    return <Flex mx='auto' width='100px' mt={5}>Loading...,</Flex>
  }
  return (
    <KeyAndObjective
      data={filteredData}
      filters={filters.total}
      selectedFilters={filters.selected}
      onClickFilter={onClickFilter}
    />
  )
}

export default KeyAndObjectivePage;