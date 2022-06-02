// Button.stories.js|jsx

import React from 'react';

import Clock from '../Clock';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'components/Clock',
  component: Clock,
};

export const Primary = () => <Clock />;