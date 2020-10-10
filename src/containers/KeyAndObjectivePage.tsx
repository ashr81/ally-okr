import React, { useEffect, useState } from 'react';
import { Flex } from '../components/atoms';
import KeyAndObjective from '../components/templates/KeyAndObjective';
import { IOKRDataType, IOKRGroupData } from '../types';
import { groupByParentObjective } from '../utils/group-by-parent-objective';


const KeyAndObjectivePage = () => {
  const [loading, setLoading] = useState(true)
  const [okrData, setOkrData] = useState<IOKRGroupData[]>([])
  const [error, setError] = useState(false)

  useEffect(() => {
    if(loading) {
      (async function() {
        try {
          let response = await fetch(`https://okrcentral.github.io/sample-okrs/db.json`);
          const { data }: { data: IOKRDataType[] } = await response.json()
          setOkrData(groupByParentObjective(data))
          setLoading(false)
        } catch(err) {
          setError(true)
          setLoading(false)
        }
      })()
    }
  }, [setOkrData, loading, setError, setLoading])
  if(error) {
    return <Flex>Error is loading data.</Flex>
  } else if(loading) {
    return <Flex mx='auto' width='100px' mt={5}>Loading...,</Flex>
  }
  return (
    <KeyAndObjective
      data={okrData}
    />
  )
}

export default KeyAndObjectivePage;