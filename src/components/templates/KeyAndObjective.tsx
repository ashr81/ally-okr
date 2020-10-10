import React from 'react';
import { IOKRGroupTemplateProps } from '../../types';
import ErrorBoundary from '../../utils/ErrorBoundary';
import { Text } from '../atoms';
import Flex from '../atoms/Flex';
import FilterTag from '../molecules/FilterTag';
import OKRGroup from '../organisms/OKRGroup';


const KeyAndObjective = ({
  data: OKRData, filters, selectedFilters, onClickFilter
}: IOKRGroupTemplateProps) => {
  return (
    <ErrorBoundary>
      <Flex width={['100%', '600px', '900px']} mx='auto' my={[1, 2, 3, 4]} flexDirection='column'>
        <Text as='h3' mx={3}>Click on Tags to Filter</Text>
        <Flex flexWrap='wrap'>{
          filters.map((filter, index) => (
            <FilterTag
              key={index}
              data-filter-value={filter}
              onClick={onClickFilter}
              selected={selectedFilters.indexOf(filter) !== -1}
              px={2} mx={3} my={2} py={1}
            >{filter}
            </FilterTag>
          )
        )
        }</Flex>
        {OKRData.map(({ keyResults=[], ...data }, index) => <OKRGroup data={data} key={data.id} position={index+1} keyResults={keyResults || []}/>)}
      </Flex>
    </ErrorBoundary>
  )
}

export default KeyAndObjective;