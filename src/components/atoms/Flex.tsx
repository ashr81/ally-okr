import styled from 'styled-components';
import { flexbox } from 'styled-system';
import { IFlexboxProps } from '../../types';
import Box from './Box';

const Flex = styled(Box)<IFlexboxProps>`
  display: flex;
  ${flexbox}
`;

Flex.displayName = 'Flex';

export default Flex;