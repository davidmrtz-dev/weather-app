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
    lightWhite: '#D5D5D6',
    blues: {
      fancyBlue: '#8DB0F4',
      dailyBlue: '#7099E8',
      transitionBlue: '#5682D7',
      darkBlue: '#1C4494'
    },
    grays: {
      lighter: '#B8BDBF',
      light: '#949B9E',
      normal: '#6F787B',
      dark: '#54565D',
      darker: '#38373D'
    },
    yellows: {
      light: '#FDE350',
      normal: '#F0D745',
      dark: '#DFCB55'
    }
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
        font-family: 'Poppins',Helvetica,Arial,sans-serif;
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
    'errorMessage': {
      style: css`
        font-family: 'Noto-Sans',Helvetica,Arial,sans-serif;
        color: #A10429;
        font-size: .9em
      `
    }
  }
};
