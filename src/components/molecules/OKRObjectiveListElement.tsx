
import React from 'react';
import styled, { css } from 'styled-components';
import { dropdownArrow, userProfile } from '../../assets/images';
import { IFlexboxProps, IOKRDataType } from '../../types';
import { Flex, Box } from '../atoms';

type ExtendAvatarType = IFlexboxProps & {
  resultsOpen: boolean
}
const AvatarExtended = styled(Flex)<ExtendAvatarType>`
  position: relative;
  background-image: url(${userProfile});
  &:after {
    ${({resultsOpen}) => resultsOpen && `content: '';`}
    position: absolute;
    width: 1px;
    height: 18px;
    background-color: ${({ theme: { colors }}) => colors.wireframe};
    left: 8px;
    top: calc(100% + 4px);
  }
`

const DropdownImage = styled(Flex)<ExtendAvatarType>`
  position: absolute;
  background-image: url(${dropdownArrow});
  left: 12px;
  transition: transform 0.3s linear;
  ${({ resultsOpen }) => !resultsOpen && css`
    transform: rotate(-90deg);
  `}
`

const Container = styled(Flex)`
  position: relative;
  &:hover {
    background-color: ${({ theme: { colors }}) => colors.white};
  }
`

const OKRObjectiveListElement = ({
  data, position, onClickToggleKeyResults, keyResultsOpen
}: { data: IOKRDataType; position: number; onClickToggleKeyResults: () => void; keyResultsOpen: boolean }) => {
  return (
    <Container
      backgroundColor='lightestGrey'
      height='60px'
      minWidth='100%'
      alignItems='center'
      as='li'
      px={4}
      cursor='pointer'
      onClick={onClickToggleKeyResults}
    >
      <DropdownImage size={3} as='span' resultsOpen={keyResultsOpen}/>
      <AvatarExtended size={3} as='span' resultsOpen={keyResultsOpen} />
      <Box pl={2} as='h6' fontSize='md' display='block' fontWeight='bold'>{`${position}. ${data.title} - ${data.category}`}</Box>
    </Container>
  )
}

export default OKRObjectiveListElement;