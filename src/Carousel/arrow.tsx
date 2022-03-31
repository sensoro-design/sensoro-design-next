import React, { useContext } from 'react';
import classNames from '@pansy/classnames';
import { ConfigContext } from '../ConfigProvider';
import { CarouselArrowProps } from './interface';

import UpOutlined from '@sensoro-design/icons/UpOutlined';
import DownOutlined from '@sensoro-design/icons/DownOutlined';
import LeftOutlined from '@sensoro-design/icons/LeftOutlined';
import RightOutlined from '@sensoro-design/icons/RightOutlined';

function CarouselArrow(props: CarouselArrowProps, ref) {
  const { className, direction, showArrow, prev, next, icons } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('carousel');
  const arrowClass = classNames(
    `${prefixCls}-arrow`,
    {
      [`${prefixCls}-arrow-hover`]: showArrow === 'hover',
    },
    className
  );
  const iconPrev =
    icons && icons.hasOwnProperty('prev') ? (
      icons.prev
    ) : direction === 'horizontal' ? (
      <LeftOutlined />
    ) : (
      <UpOutlined />
    );
  const iconNext =
    icons && icons.hasOwnProperty('next') ? (
      icons.next
    ) : direction === 'horizontal' ? (
      <RightOutlined />
    ) : (
      <DownOutlined />
    );

  return (
    <div ref={ref} className={arrowClass}>
      <div
        className={`${prefixCls}-arrow-${direction === 'vertical' ? 'top' : 'left'}`}
        onClick={prev}
      >
        {iconPrev}
      </div>
      <div
        className={`${prefixCls}-arrow-${direction === 'vertical' ? 'bottom' : 'right'}`}
        onClick={next}
      >
        {iconNext}
      </div>
    </div>
  );
}

const CarouselArrowComponent = React.forwardRef<unknown, CarouselArrowProps>(CarouselArrow);

CarouselArrowComponent.defaultProps = {
  direction: 'horizontal',
  showArrow: 'always',
};

export default CarouselArrowComponent;
