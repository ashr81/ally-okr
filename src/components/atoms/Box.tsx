import styled, { css } from 'styled-components';
import {
  space, color, border, layout,
  position, display, typography,
  shadow,
} from 'styled-system';
import { IBoxProps } from '../../types';

const Box = styled('div')<IBoxProps>`
  ${layout}
  ${space}
  ${color}
  ${border}
  ${shadow}
  ${position}
  ${typography}
  ${display}
  box-sizing: border-box;
  ${({ cursor }) => cursor && css`
    cursor: ${cursor};
  `}
`;

Box.displayName = 'Box';

export default Box;