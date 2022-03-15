import type { ReactNode } from 'react';
import type { ButtonType } from '../Button';

export interface Option {
  type?: ButtonType;
  icon?: ReactNode;
  status?: 'warning' | 'error' | 'success';
  label?: string;
  value?: string | number;
  disabled?: boolean;
}

/**
 * @title Operation
 */
export interface OperationProps {
  /**
   * 左对齐主要按钮在左边，右对齐主要按钮在右边
   * @default 'left'
   */
  position?: 'left' | 'right';
  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled?: boolean;
  /**
   * @zh间距大小
   * @defaultValue 12
   */
  space?: number;
  /**
   * 操作箱类型
   */
  type?: 'button' | 'link';
  /**
   *
   */
  maxCount?: number;
  /** 操作项配置 */
  options?: Option[];
  /** 点击回调 */
  onClick?: (type: string | number) => void;
}
