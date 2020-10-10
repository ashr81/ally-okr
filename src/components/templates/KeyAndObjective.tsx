import React from 'react';
import { IOKRGroupTemplateProps } from '../../types';
import Flex from '../atoms/Flex';
import OKRGroup from '../organisms/OKRGroup';


const KeyAndObjective = ({
  data: OKRData
}: IOKRGroupTemplateProps) => {
  console.log(OKRData)
  return (
    <Flex width={['100%', '600px', '900px']} mx='auto' my={[1, 2, 3, 4]} flexDirection='column'>
      {OKRData.map(({ keyResults=[], ...data }, index) => <OKRGroup data={data} position={index+1} keyResults={keyResults || []}/>)}
    </Flex>
  )
}

export default KeyAndObjective;