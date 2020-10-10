import styled from 'styled-components';
import { ITextProps } from '../../types';
import Box from './Box';

const Text = styled(Box)<ITextProps>``

Text.defaultProps = {
  color: 'primary',
  as: 'p'
}

export default Text;