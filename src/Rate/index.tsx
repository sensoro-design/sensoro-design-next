import React, { useState, useContext } from 'react';
import NP from 'number-precision';
import classNames from '@pansy/classnames';
import StarFilled from '@sensoro-design/icons/StarFilled';
import FrownFilled from '@sensoro-design/icons/FrownFilled';
import SmileFilled from '@sensoro-design/icons/SmileFilled';
import MehFilled from '@sensoro-design/icons/MehFilled';
import { ConfigContext } from '../ConfigProvider';
import Tooltip from '../Tooltip';
import omit from '../_util/omit';
import { RateProps } from './interface';
import useMergeProps from '../_util/hooks/useMergeProps';

NP.enableBoundaryChecking(false);

const defaultProps: RateProps = {
  character: <StarFilled />,
  count: 5,
};

function Rate(baseProps: RateProps, ref) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<RateProps>(baseProps, defaultProps, componentConfig?.Rate);
  const {
    style = {},
    className,
    defaultValue,
    character,
    count,
    value: propValue,
    tooltips,
    allowHalf,
    allowClear,
    readonly,
    disabled,
    grading,
    onChange,
    onHoverChange,
    ...restProps
  } = props;

  const [value, setValue] = useState<number>(defaultValue || propValue || 0);
  const [hoverIndex, setHoverIndex] = useState<number>(0);
  const [animation, setAnimation] = useState<boolean>();

  const prefixCls = getPrefixCls('rate');
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-readonly`]: readonly,
      [`${prefixCls}-disabled`]: disabled,
    },
    className
  );
  const mergedValue = 'value' in props ? propValue : value;

  const resetHoverIndex = () => {
    if (hoverIndex) {
      setHoverIndex(0);
      onHoverChange && onHoverChange(0);
    }
  };

  const onMouseEnter = (index, isHalf) => {
    const newHoverIndex = isHalf && allowHalf ? index + 0.5 : index + 1;
    if (newHoverIndex !== hoverIndex) {
      setHoverIndex(newHoverIndex);
      onHoverChange && onHoverChange(newHoverIndex);
    }
  };

  const onClick = (index, isHalf) => {
    const newValue = isHalf && allowHalf ? index + 0.5 : index + 1;
    setAnimation(true);
    if (newValue !== mergedValue) {
      setValue(newValue);
      onChange && onChange(newValue);
    } else if (allowClear) {
      setValue(0);
      onChange && onChange(0);
      resetHoverIndex();
    }
  };

  const renderCharacter = (index: number) => {
    // fix number like 3.7
    const fixedValue = allowHalf
      ? NP.times(+NP.divide(mergedValue || 0, 0.5).toFixed(0), 0.5)
      : Math.round(mergedValue);
    const _usedIndex = hoverIndex || fixedValue;
    let _usedCharacter = typeof character === 'function' ? character(index) : character;
    if (grading) {
      if (_usedIndex <= 2) {
        _usedCharacter = <FrownFilled />;
      } else if (_usedIndex <= 3) {
        _usedCharacter = <MehFilled />;
      } else {
        _usedCharacter = <SmileFilled />;
      }
      if (_usedIndex <= index) {
        _usedCharacter = <MehFilled />;
      }
    }
    const classes = classNames(`${prefixCls}-character`, {
      [`${prefixCls}-character-half`]: allowHalf && index + 0.5 === _usedIndex,
      [`${prefixCls}-character-full`]: index + 1 <= _usedIndex,
      [`${prefixCls}-character-scale`]: animation && index + 1 < mergedValue,
    });
    const leftProps =
      readonly || disabled
        ? {}
        : {
            onMouseEnter: onMouseEnter.bind(this, index, true),
            onClick: onClick.bind(this, index, true),
          };
    const rightProps =
      readonly || disabled
        ? {}
        : {
            onMouseEnter: onMouseEnter.bind(this, index, false),
            onClick: onClick.bind(this, index, false),
          };
    const tooltip = tooltips && tooltips[index];
    const CharacterWrapper = tooltip ? Tooltip : React.Fragment;
    const tooltipProps = tooltip ? { content: tooltip } : {};

    return (
      <CharacterWrapper key={index} {...tooltipProps}>
        <div
          className={classes}
          style={animation ? { animationDelay: `${50 * index}ms` } : {}}
          onAnimationEnd={() => {
            if (animation && index + 1 >= mergedValue - 1) {
              setAnimation(false);
            }
          }}
        >
          <div className={`${prefixCls}-character-left`} {...leftProps}>
            {_usedCharacter}
          </div>
          <div className={`${prefixCls}-character-right`} {...rightProps}>
            {_usedCharacter}
          </div>
        </div>
      </CharacterWrapper>
    );
  };

  return (
    <div
      ref={ref}
      {...omit(restProps, ['error'])}
      style={style}
      className={classes}
      onMouseLeave={resetHoverIndex}
    >
      <div className={`${prefixCls}-inner`}>
        {Array.apply(null, Array(grading ? 5 : count)).map((_, index) => renderCharacter(index))}
      </div>
    </div>
  );
}

const RateComponent = React.forwardRef<unknown, RateProps>(Rate);

RateComponent.displayName = 'Rate';

export default RateComponent;

export { RateProps };
