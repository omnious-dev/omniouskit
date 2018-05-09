// Global import
import React from 'react';

// Local import
import Readme from '../../../README.md';
import { StyledWelcomeStory } from './Style';

export const WelcomeStory = () => (
  <StyledWelcomeStory className="markdown-body">
    <div dangerouslySetInnerHTML={{ __html: Readme }} />
  </StyledWelcomeStory>
);