import React, { useContext, ReactElement, forwardRef } from 'react';
import classNames from '@pansy/classnames';
import Step from './step';
import { ConfigContext } from '../ConfigProvider';
import { StepsProps } from './interface';
import useMergeProps from '../_util/hooks/useMergeProps';

const defaultProps: StepsProps = {
  current: 1,
  type: 'default',
  size: 'default',
  direction: 'horizontal',
  labelPlacement: 'horizontal',
};

function Steps(baseProps: StepsProps, ref) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<StepsProps>(baseProps, defaultProps, componentConfig?.Steps);
  const {
    className,
    style,
    children,
    current = 1,
    status,
    onChange,
    type,
    size,
    direction,
    labelPlacement,
    customDot,
    lineless,
  } = props;

  const prefixCls = getPrefixCls('steps');

  let innerLabelPlacement = labelPlacement;
  if (type === 'dot') {
    innerLabelPlacement = direction === 'vertical' ? 'horizontal' : 'vertical';
  }
  if (type === 'navigation') {
    innerLabelPlacement = 'horizontal';
  }

  let innerDirection = direction;
  if (type === 'navigation' || type === 'arrow') {
    innerDirection = 'horizontal';
  }

  const classes = classNames(
    prefixCls,
    `${prefixCls}-${innerDirection}`,
    `${prefixCls}-label-${innerLabelPlacement}`,
    `${prefixCls}-size-${size}`,
    {
      [`${prefixCls}-change-onclick`]: typeof onChange === 'function',
      [`${prefixCls}-mode-${type}`]: type !== 'default',
      [`${prefixCls}-lineless`]: lineless,
    },
    className
  );

  return (
    <div ref={ref} style={style} className={classes}>
      {React.Children.toArray(children)
        .filter(
          (child: ReactElement) =>
            child && child.type && (child.type as { displayName? }).displayName === 'Step'
        )
        .map((child: ReactElement, index) => {
          // step 的 index 从 1 开始
          index += 1;
          if (child) {
            const childProps = {
              prefixCls,
              type,
              index,
              current,
              status: current === index ? status : undefined,
              customDot,
              labelPlacement: innerLabelPlacement,
              direction: innerDirection,
              onClick: onChange,
              lineless,
              ...child.props,
            };
            if (status === 'error' && current === index + 1) {
              childProps.nextStepError = true;
            }
            return React.cloneElement(child, childProps);
          }
          return null;
        })}
    </div>
  );
}

const ForwardRefSteps = forwardRef<unknown, StepsProps>(Steps);

const StepsComponent = ForwardRefSteps as typeof ForwardRefSteps & {
  Step: typeof Step;
};

StepsComponent.displayName = 'Steps';

StepsComponent.Step = Step;

export default StepsComponent;

export { StepsProps };
