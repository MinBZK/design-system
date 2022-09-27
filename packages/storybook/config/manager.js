import * as designTokens from '@minbzk/design-tokens/dist/index.js';
import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

// For more info on Storybook theming and an overview of all options:
// https://storybook.js.org/docs/react/configure/theming

addons.setConfig({
  theme: create({
    base: 'light',
    colorPrimary: '#007bc7', // designTokens.minbzkColorHemelblauw,
    colorSecondary: '#b3d7ee', // designTokens.minbzkColorHemelblauwTint1,

    // UI
    appContentBg: '#ffffff', // `${designTokens.minbzkColorWit}`,
    textColor: '#535353', // `${designTokens.minbzkColorGrijs7}`,

    // Typography
    fontBase: `${designTokens.minbzkFontSansSerifFontFamily}`,
    fontCode: 'monospace',
    fontSize: '100%',

    brandTitle: 'Ministerie van Binnenlandse Zaken met NL Design System',
    brandUrl: `${document.location.protocol}//${document.location.host}${document.location.pathname}`,
    brandTarget: '_self',
    // brandImage: '',
  }),
});
