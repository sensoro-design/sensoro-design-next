import React from 'react';
import { ErrorBoundary } from '@sensoro-design/react';

import { ErrorTriggerTestPage } from './basic.demo';

export default () => {
  return (
    <ErrorBoundary
      resultProps={{
        title: '测试标题',
      }}
    >
      <ErrorTriggerTestPage />
    </ErrorBoundary>
  );
};
