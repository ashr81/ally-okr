import styled from 'styled-components';
import { layout } from 'styled-system';
import { IAvatarProps } from '../../types';

const Avatar = styled.img<IAvatarProps>`
  ${layout}
`

export default Avatar;