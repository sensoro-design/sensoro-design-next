import type { ErrorInfo, ComponentType } from 'react';
import type { ResultProps } from '../Result';

export interface ErrorBoundaryProps {
  /**
   * 自定义报错组件
   */
  fallback?: ComponentType<{ errorInfo?: ErrorInfo; errorMessage?: string }>;
  /**
   * 自定义结果组件
   */
  resultProps?: ResultProps;
  /**
   * 异常发生时的回到
   */
  onError?: (error: Error, info: ErrorInfo) => void;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  errorInfo: ErrorInfo;
  errorMessage: string;
}
