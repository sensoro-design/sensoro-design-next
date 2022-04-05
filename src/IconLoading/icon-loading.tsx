import React from 'react';
import classNames from '@pansy/classnames';

import Icon from '@sensoro-design/icons/lib/components/Icon';
import { LoadingGradient } from './loading-svg';

import type { CustomIconComponentProps } from '@sensoro-design/icons/es/components/Icon';

export const LoadingOutlined = (props: Partial<CustomIconComponentProps>) => {
  return (
    <Icon {...props} className={classNames('sen-icon-loading', props.className)} component={LoadingGradient} />
  )
}
