import React from 'react';
import IconHover from '../../_class/icon-hover';
import classNames from '@pansy/classnames';

import UpOutlined from '@sensoro-design/icons/UpOutlined';
import DownOutlined from '@sensoro-design/icons/DownOutlined';
import LeftOutlined from '@sensoro-design/icons/LeftOutlined';
import RightOutlined from '@sensoro-design/icons/RightOutlined';

const TabNavIcon = (props) => {
  const {
    direction,
    headerSize,
    headerWrapperSize,
    prefixCls,
    iconPos,
    currentOffset: curOffset,
    align,
  } = props;

  const { height: wrapHeight, width: wrapWidth } = headerWrapperSize;
  const { height: headerHeight, width: headerWidth } = headerSize;
  const maxHeightOffset = headerHeight - wrapHeight;
  const maxWidthOffset = headerWidth - wrapWidth;

  const onChange = (offset) => {
    if (offset !== props.currentOffset) {
      props.onChange && props.onChange(offset);
    }
  };

  const handleHozClick = (e, pos) => {
    e.preventDefault();

    let nextOffset;
    if (align === 'left') {
      nextOffset = pos === 'left' ? curOffset - wrapWidth : curOffset + wrapWidth;
    } else {
      nextOffset = pos === 'left' ? curOffset + wrapWidth : curOffset - wrapWidth;
    }

    onChange(nextOffset);
  };

  const handleVerticalClick = (e, pos) => {
    e.preventDefault();

    let nextOffset;
    if (pos === 'up') {
      nextOffset = curOffset - wrapHeight;
    } else {
      nextOffset = curOffset + wrapHeight;
      if (nextOffset >= headerHeight) return;
    }
    onChange(nextOffset);
  };

  let disabledPrev = false;
  let disabledNext = false;

  if (align === 'left') {
    disabledPrev = curOffset <= 0;
    disabledNext =
      direction === 'vertical' ? curOffset >= maxHeightOffset : curOffset >= maxWidthOffset;
  } else {
    disabledPrev =
      direction === 'vertical' ? curOffset >= maxHeightOffset : curOffset >= maxWidthOffset;
    disabledNext = curOffset <= 0;
  }

  return direction === 'vertical' ? (
    iconPos === 'prev' ? (
      <IconHover
        disabled={disabledPrev}
        prefix={prefixCls}
        className={classNames(`${prefixCls}-up-icon`, {
          [`${prefixCls}-nav-icon-disabled`]: disabledPrev,
        })}
        onClick={(e) => {
          handleVerticalClick(e, 'up');
        }}
      >
        <UpOutlined />
      </IconHover>
    ) : (
      <IconHover
        prefix={prefixCls}
        className={classNames(`${prefixCls}-down-icon`, {
          [`${prefixCls}-nav-icon-disabled`]: disabledNext,
        })}
        disabled={disabledNext}
        onClick={(e) => {
          handleVerticalClick(e, 'down');
        }}
      >
        <DownOutlined />
      </IconHover>
    )
  ) : iconPos === 'prev' ? (
    <IconHover
      prefix={prefixCls}
      disabled={disabledPrev}
      className={classNames(`${prefixCls}-left-icon`, {
        [`${prefixCls}-nav-icon-disabled`]: disabledPrev,
      })}
      onClick={(e) => {
        handleHozClick(e, 'left');
      }}
    >
      <LeftOutlined />
    </IconHover>
  ) : (
    <IconHover
      prefix={prefixCls}
      className={classNames(`${prefixCls}-right-icon`, {
        [`${prefixCls}-nav-icon-disabled`]: disabledNext,
      })}
      disabled={disabledNext}
      onClick={(e) => {
        handleHozClick(e, 'right');
      }}
    >
      <RightOutlined />
    </IconHover>
  );
};

export default TabNavIcon;
