import React, { useCallback, useState } from 'react';
import { IOKRDataType } from '../../types';
import { Flex } from '../atoms';
import OKRObjectiveListElement from '../molecules/OKRObjectiveListElement';
import OKRKeyResultListElement from '../molecules/OKRKeyResultListElement';


export type OKRGroupDataOrganimsProps = {
  data: IOKRDataType;
  keyResults: IOKRDataType[];
  position: number;
}
/**
 * Grouping of each Object(parent object) with key results nested under it.
 */
const OKRGroup = ({
  data, keyResults, position
}: OKRGroupDataOrganimsProps) => {
  const [open, setOpen] = useState(true)
  const onClickToggleKeyResults = useCallback(() => {
    setOpen(!open)
  }, [setOpen, open])
  return (
    <Flex as='ul' flexDirection='column' width='100%' my={0} p={0}>
      <OKRObjectiveListElement data={data} position={position}
        onClickToggleKeyResults={onClickToggleKeyResults}
        keyResultsOpen={open}
      />
      {open && keyResults.map((keyResult, index: number) => <OKRKeyResultListElement key={keyResult.id} data={keyResult} position={index+1} />)}
    </Flex>
    )
  }


export default OKRGroup;