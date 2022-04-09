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

export default () => {
  return (
    <ErrorBoundary>
      <ErrorTriggerTestPage />
    </ErrorBoundary>
  );
};
