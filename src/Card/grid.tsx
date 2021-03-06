import React, { useContext } from 'react';
import classNames from '@pansy/classnames';
import { ConfigContext } from '../ConfigProvider';
import { CardGridProps } from './interface';

function Grid(props: CardGridProps, ref) {
  const { children, style, className, hoverable } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('card-grid');
  return (
    <div
      ref={ref}
      style={style}
      className={classNames(prefixCls, { [`${prefixCls}-hoverable`]: hoverable }, className)}
    >
      {children}
    </div>
  );
}

const CardComponent = React.forwardRef<unknown, CardGridProps>(Grid);

CardComponent.displayName = 'CardGrid';

export default CardComponent;

export { CardGridProps };
