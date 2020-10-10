
import React from 'react';
import styled from 'styled-components';
import { userProfile } from '../../assets/images';
import { IFlexboxProps, IOKRDataType } from '../../types';
import { Flex, Box } from '../atoms';

type ExtendAvatarType = IFlexboxProps & {
  showWire: boolean
}
const AvatarExtended = styled(Flex)<ExtendAvatarType>`
  position: relative;
  background-image: url(${userProfile});
  &:after {
    ${({showWire}) => showWire && `content: '';`}
    position: absolute;
    width: 1px;
    height: 18px;
    background-color: ${({ theme: { colors }}) => colors.wireframe};
    left: 8px;
    top: calc(100% + 4px);
  }
`

const OKRObjectiveListElement = ({
  data, position, onClickToggleKeyResults, keyResultsOpen
}: { data: IOKRDataType; position: number; onClickToggleKeyResults: () => void; keyResultsOpen: boolean }) => {
  return (
    <Flex
      backgroundColor='lightestGrey'
      height='60px'
      minWidth='100%'
      alignItems='center'
      as='li'
      px={4}
      cursor='pointer'
      onClick={onClickToggleKeyResults}
    >
      <AvatarExtended size={3} as='span' showWire={keyResultsOpen} />
      <Box pl={2} as='p' fontSize='md' fontWeight='bold'>{`${position}. ${data.title}`}</Box>
    </Flex>
  )
}

export default OKRObjectiveListElement;