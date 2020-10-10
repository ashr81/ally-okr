
import React from 'react';
import styled from 'styled-components';
import { userProfile } from '../../assets/images';
import { IOKRDataType } from '../../types';
import { Flex, Box } from '../atoms';


const AvatarExtended = styled(Flex)`
  position: relative;
  background-image: url(${userProfile});
  &:before {
    content: '';
    position: absolute;
    width: 1px;
    height: 80px;
    background-color: ${({ theme: { colors }}) => colors.wireframe};
    left: -56px;
    top: -32px;
  }
  &:after {
    content: '';
    position: absolute;
    width: 50px;
    height: 1px;
    background-color: ${({ theme: { colors }}) => colors.wireframe};
    left: -56px;
    top: 8px;
  }
`

const OKRKeyResultListElement = ({
  data, position
}: { data: IOKRDataType; position: number; }) => {
  return (
    <Flex
      backgroundColor='white'
      minHeight='80px'
      minWidth='100%'
      alignItems='center'
      as='li'
      px={4}
    >
      <AvatarExtended size={3} ml={5} as='span' />
      <Box pl={2} as='p' fontSize='md' fontWeight='bold'>{`${String.fromCharCode(position + 96)}. ${data.title} - ${data.category}`}</Box>
    </Flex>
  )
}

export default OKRKeyResultListElement;