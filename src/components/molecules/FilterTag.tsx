import styled from 'styled-components';
import { IFlexboxProps } from '../../types';
import { Flex } from '../atoms';

export type IFilterTagType = IFlexboxProps & {
  selected: boolean;
}

const FilterTag = styled(Flex)<IFilterTagType>`
  border-radius: 12px;
  cursor: pointer;
  color: ${({ theme: { colors }}) => colors.white};
  background-color: ${({ theme: { colors }, selected }) => selected ? colors.selectedBg : colors.lightGrey};
  &:hover {
    background-color: ${({ theme: { colors }}) => colors.hoverBg};
  }
`

export default FilterTag;