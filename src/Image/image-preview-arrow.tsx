import React, { useContext } from 'react';
import { ConfigContext } from '../ConfigProvider';
import classNames from '@pansy/classnames';

import LeftOutlined from '@sensoro-design/icons/LeftOutlined';
import RightOutlined from '@sensoro-design/icons/RightOutlined';

interface ImagePreviewArrowProps {
  current: number;
  previewCount: number;
  infinite?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
}

function ImagePreviewArrow(props: ImagePreviewArrowProps) {
  const { current, previewCount, infinite = false, onPrev, onNext } = props;
  const { getPrefixCls } = useContext(ConfigContext);

  const prefixCls = getPrefixCls('image-preview');
  const classes = classNames(`${prefixCls}-arrow`);
  const disableLeft = !infinite && current <= 0;
  const disableRight = !infinite && current >= previewCount - 1;

  return (
    <div className={classes}>
      <div
        className={classNames(`${prefixCls}-arrow-left`, {
          [`${prefixCls}-arrow-disabled`]: disableLeft,
        })}
        onClick={(e) => {
          e.preventDefault();
          !disableLeft && onPrev && onPrev();
        }}
      >
        <LeftOutlined />
      </div>
      <div
        className={classNames(`${prefixCls}-arrow-right`, {
          [`${prefixCls}-arrow-disabled`]: disableRight,
        })}
        onClick={(e) => {
          e.preventDefault();
          !disableRight && onNext && onNext();
        }}
      >
        <RightOutlined />
      </div>
    </div>
  );
}

export default ImagePreviewArrow;
