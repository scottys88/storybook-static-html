import { configure } from '@storybook/html';
import { themes } from '@storybook/theming';
import { addParameters } from '@storybook/html';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);

addParameters({
    options: {
      theme: themes.dark,
    },
  });