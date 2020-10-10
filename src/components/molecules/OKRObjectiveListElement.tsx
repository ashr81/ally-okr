
import React from 'react';
import styled from 'styled-components';
import { userProfile } from '../../assets/images';
import { IOKRDataType } from '../../types';
import { Flex, Box } from '../atoms';


const AvatarExtended = styled(Flex)`
  position: relative;
  background-image: url(${userProfile});
  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 18px;
    background-color: ${({ theme: { colors }}) => colors.wireframe};
    left: 8px;
    top: calc(100% + 4px);
  }
`

const OKRObjectiveListElement = ({
  data, position
}: { data: IOKRDataType; position: number; }) => {
  return (
    <Flex
      backgroundColor='lightestGrey'
      height='60px'
      minWidth='100%'
      alignItems='center'
      as='li'
      px={4}
    >
      <AvatarExtended size={3} as='span' />
      <Box pl={2} as='p' fontSize='md' fontWeight='bold'>{`${position}. ${data.title}`}</Box>
    </Flex>
  )
}

export default OKRObjectiveListElement;