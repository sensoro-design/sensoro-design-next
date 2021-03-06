import React, { ReactNode } from 'react';
import { Dayjs } from 'dayjs';
import DoubleLeftOutlined from '@sensoro-design/icons/DoubleLeftOutlined';
import DoubleRightOutlined from '@sensoro-design/icons/DoubleRightOutlined';
import RightOutlined from '@sensoro-design/icons/RightOutlined';
import LeftOutlined from '@sensoro-design/icons/LeftOutlined';
import classNames from '@pansy/classnames';
import { ModeType, IconsType } from '../interface';

export interface HeaderProps {
  prefixCls?: string;
  title?: ReactNode;
  onPrev?: () => void;
  onNext?: () => void;
  onSuperPrev?: () => void;
  onSuperNext?: () => void;
  mode?: ModeType;
  value?: Dayjs;
  onChangePanel?: (mode?: ModeType) => void;
  icons?: IconsType;
}

function Header(props: HeaderProps) {
  const {
    prefixCls,
    title,
    onPrev,
    onNext,
    onSuperPrev,
    onSuperNext,
    mode,
    value,
    onChangePanel,
    icons = {},
  } = props;

  const showPrev = typeof onPrev === 'function';
  const showSuperPrev = typeof onSuperPrev === 'function';
  const showNext = typeof onNext === 'function';
  const showSuperNext = typeof onSuperNext === 'function';

  const getIconClassName = (isShow) => {
    return classNames(`${prefixCls}-header-icon`, { [`${prefixCls}-header-icon-hidden`]: !isShow });
  };

  function renderHeaderLabel() {
    if (title) {
      return title;
    }
    if (mode === 'date' || mode === 'week') {
      return (
        <>
          <span className={`${prefixCls}-header-label`} onClick={() => onChangePanel('year')}>
            {value.format('YYYY')}
          </span>
          -
          <span className={`${prefixCls}-header-label`} onClick={() => onChangePanel('month')}>
            {value.format('MM')}
          </span>
        </>
      );
    }
    if (mode === 'month' || mode === 'quarter') {
      return (
        <span className={`${prefixCls}-header-label`} onClick={() => onChangePanel('year')}>
          {value.format('YYYY')}
        </span>
      );
    }
  }

  const prevDoubleNull = icons.prevDouble === null;
  const prevNull = icons.prev === null;
  const nextNull = icons.next === null;
  const nextDoubleNull = icons.nextDouble === null;

  return (
    <div className={`${prefixCls}-header`}>
      {!prevDoubleNull && (
        <div className={getIconClassName(showSuperPrev)} onClick={onSuperPrev}>
          {showSuperPrev && (prevDoubleNull ? null : icons.prevDouble || <DoubleLeftOutlined />)}
        </div>
      )}
      {!prevNull && (
        <div className={getIconClassName(showPrev)} onClick={onPrev}>
          {showPrev && (prevNull ? null : icons.prev || <LeftOutlined />)}
        </div>
      )}
      <div className={`${prefixCls}-header-value`}>{renderHeaderLabel()}</div>
      {!nextNull && (
        <div className={getIconClassName(showNext)} onClick={onNext}>
          {showNext && (nextNull ? null : icons.next || <RightOutlined />)}
        </div>
      )}
      {!nextDoubleNull && (
        <div className={getIconClassName(showSuperNext)} onClick={onSuperNext}>
          {showSuperNext && (nextDoubleNull ? null : icons.nextDouble || <DoubleRightOutlined />)}
        </div>
      )}
    </div>
  );
}

export default Header;
