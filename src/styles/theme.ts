import { DefaultTheme } from 'styled-components';

const colors = {
  hoverBg: '#4B57D2',
  selectedBg: '#313DC4',
  lighterGrey: '#e8e8e8',
  lightGrey: '#555',
  lightestGrey: '#f8f9fa',
  lighterGreen: '#B0DDC2',
  primary: '#0070f3',
  wireframe: '#8da1e8',
  white: '#fff',
  text: {
    heading: '#333',
    description: '#000',
  }
}

const shadows = {
  default: `0px 10px 30px -5px rgba(0, 0, 0, 0.3)`,
  hoverBg: `0px 30px 100px -10px rgba(0, 0, 0, 0.4)`
}

const fontSizes = {
  xxs: '6px',
  xs: '10px',
  sm: '12px',
  md: '14px',
  lg: '16px',
  xl: '18px',
  xxl: '24px',
  xxxl: '32px'
}

const fontWeights = {
  regular: 400,
  bold: 700,
  bolder: 900
}

const theme = {
  breakpoints: ['600px', '900px', '1200px', '1800px'],
  font: `'Roboto', sans-serif;`,
  spaces: [0, 1, 2, 4, 8, 16, 32, 48, 64, 128],
  sizes: [4, 8, 12, 16, 32, 48, 64, 128, 256, 512],
  fontSizes,
  fontWeights,
  colors,
  shadows
}

const defaultTheme: DefaultTheme = theme;

export default defaultTheme;