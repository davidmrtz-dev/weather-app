import { css } from 'styled-components';

export const theme = {
  height: {
    invisible: '0rem',
    full: '10rem',
  },
  opacity: {
    one: 0.01,
    twelve: 1.2,
  },
  colors: {
    primary: 'white',
    secondary: '#0e0033',
    backgroundBlue: '#e7edfe',
    darkBlue: '#40489d',
    brightBlue: '#0736B5',
    active: '#41489D',
    brandYellow: '#ffbc25',
    brandRed: '#D1231C',
    brandBlack: '#333333',
    brandGray: '#595959',
    warning: 'orange',
    success: '#41489D',
    danger: '#99262B',
    rfwPink: '#FF2659',
    rfwPurple: '#301ECD',
    rfwGray: '#b2b0b0',
    rfwSoftGray: 'rgba(0,0,0,0.5)'
  },
  shadows: {
    good: '0px 0px 10px -1px #0736B5',
  },
  breakpoints: {
    xs: 0,
    sm: 475,
    md: 850,
    lg: 1000,
    xl: 1200,
  },
  texts: {
    'brandFont': {
      style: css`
        font-family: 'Noto-Sans',Helvetica,Arial,sans-serif;
      `,
    },
    'brandSubFont': {
      style: css`
        font-family: 'Gilroy', sans-serif;
      `,
    },
    'brandH1': {
      style: css`
        font-family: "Gilroy",Helvetica,Arial,sans-serif;
        font-size: 3em;
        font-weight: bold;
        line-height: 1.25;
        margin-top: .5em;
        line-height: 1.25;
        display: block;
        justify: left;
      `
    },
    'brandH2': {
      style: css`
        font-family: "Gilroy",Helvetica,Arial,sans-serif;
        font-size: 2em;
        font-weight: bold;
        line-height: 1.25;
        margin-top: .5em;
        line-height: 1.25;
        display: block;
        justify: left;
      `
    },
    'brandH3': {
      style: css`
        font-family: "Gilroy",Helvetica,Arial,sans-serif;
        font-size: 1.5em;
        font-weight: bold;
        line-height: 1.25;
        margin-top: .5em;
        line-height: 1.25;
        display: block;
        justify: center;
      `
    },
    'brandH4': {
      style: css`
        font-family: "Gilroy",Helvetica,Arial,sans-serif;
        font-size: 22rpx;
        line-height: 1.25;
        margin-top: .5em;
        line-height: 1.25;
        font-weight: bolder;
        display: block;
        justify: center;
      `
    },
    'brandH5': {
      style: css`
        font-family: "Gilroy",Helvetica,Arial,sans-serif;
        font-size: 16pt;
        line-height: 1.25;
        margin-top: .5em;
        line-height: 1.25;
        display: block;
        justify: center;
      `
    },
    'rfwMainText': {
      style: css`
        color: rgba(0, 0, 0, 0.5);
        font-family: 'Noto-Sans',Helvetica,Arial,sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 2em;
        line-height: 58px;
      `
    },
    'errorMessage': {
      style: css`
        font-family: 'Noto-Sans',Helvetica,Arial,sans-serif;
        color: #A10429;
        font-size: .9em
      `
    }
  }
};
