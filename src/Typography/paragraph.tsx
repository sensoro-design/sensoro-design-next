import React, { useContext } from 'react';
import { TypographyParagraphProps } from './interface';
import Base from './base';
import classNames from '@pansy/classnames';
import { ConfigContext } from '../ConfigProvider';

function Paragraph(props: TypographyParagraphProps) {
  const { spacing = 'default', className } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('typography');
  const classes = spacing === 'close' ? classNames(`${prefixCls}-spacing-close`, className) : className;

  return <Base {...props} componentType="Paragraph" className={classes} />;
}

Paragraph.displayName = 'Paragraph';

export default Paragraph;
