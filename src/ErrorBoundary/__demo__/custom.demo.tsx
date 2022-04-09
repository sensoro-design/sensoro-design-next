import React from 'react';
import { ErrorBoundary } from '@sensoro-design/react';

import { ErrorTriggerTestPage } from './basic.demo';

const Fallback = () => {
  return <div>页面出错了</div>;
};

export default () => {
  return (
    <ErrorBoundary
      fallback={Fallback}
      onError={(errorMessage, errorInfo) => {
        console.log(errorInfo);
        console.log(errorMessage);
      }}
    >
      <ErrorTriggerTestPage />
    </ErrorBoundary>
  );
};
