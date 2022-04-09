import React, { useState } from 'react';
import { Button, ErrorBoundary } from '@sensoro-design/react';

const ErrorTriggerTestPage = () => {
  // default to throw error for snapshot test
  const [error, setError] = useState<boolean>(false);

  if (error) throw new Error('渲染发生了错误');

  return (
    <Button
      type="primary"
      onClick={() => {
        setError(true);
      }}
    >
      触发错误
    </Button>
  );
};

const Fallback = () => {
  return <div>页面出错了</div>;
};

export default () => {
  return (
    <ErrorBoundary fallback={Fallback}>
      <ErrorTriggerTestPage />
    </ErrorBoundary>
  );
};
