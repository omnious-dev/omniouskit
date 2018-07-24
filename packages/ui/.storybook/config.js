// CSS import
// import '@omnious/reset';
import './index.css';
// import 'react-select/dist/react-select.css';
// import 'github-markdown-css/github-markdown';

// Global import
import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: '@omnious/ui',
  url: 'https://www.npmjs.com/package/@omnious/ui',
  hierarchyRootSeparator: /\|/
});

setDefaults({
  inline: true,
  styles: base => ({
    ...base,
    infoStory: {
      alignItems: 'flex-start',
      backgroundColor: '#dfe3e6',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '35vh',
      padding: '20px 40px 40px'
    },
    infoBody: {
      ...base.infoBody,
      border: 0
    }
  })
});

const req = require.context('../src', true, /\.stories.tsx$/);
const loadStories = () => {
  require('./Welcome.stories');
  req.keys().forEach(file => req(file));
};

configure(loadStories, module);
