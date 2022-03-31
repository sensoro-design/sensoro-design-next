import React, { forwardRef, useState, useEffect, useContext, useRef } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { getDayjsValue, getNow } from '../_util/dayjs';
import classNames from '@pansy/classnames';
import { getDateString } from './util';
import { ConfigContext } from '../ConfigProvider';
import { CountdownProps } from './interface';

function Countdown(props: CountdownProps, ref) {
  const { getPrefixCls } = useContext(ConfigContext);
  const { className, style, title, styleValue, value, start, format, onFinish } = props;

  const dayjsValue = (getDayjsValue(value, format) as Dayjs) || dayjs();
  const now = getDayjsValue(props.now, format) as Dayjs;

  const prefixCls = getPrefixCls('statistic');

  const [valueShow, setValueShow] = useState(
    getDateString(Math.max(dayjsValue.diff(now, 'millisecond'), 0), format)
  );
  const timerRef = useRef(null);

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      const _value = dayjsValue.diff(getNow(), 'millisecond');
      if (_value <= 0) {
        stopTimer();
        onFinish && onFinish();
      }
      const valueShow = getDateString(Math.max(_value, 0), format as string);
      setValueShow(valueShow);
    }, 1000 / 30);
  };

  useEffect(() => {
    if (!timerRef.current && start) {
      if (dayjsValue.valueOf() >= Date.now()) {
        startTimer();
      }
    }
    return () => {
      stopTimer();
    };
  }, [props.start]);

  return (
    <div
      ref={ref}
      className={classNames(`${prefixCls}`, `${prefixCls}-countdown`, className)}
      style={style}
    >
      {title && <div className={`${prefixCls}-title`}>{title}</div>}
      <div className={`${prefixCls}-content`}>
        <div className={`${prefixCls}-value`} style={styleValue}>
          {valueShow}
        </div>
      </div>
    </div>
  );
}

const CountdownComponent = forwardRef<unknown, CountdownProps>(Countdown);

CountdownComponent.displayName = 'StatisticCountdown';

CountdownComponent.defaultProps = {
  format: 'HH:mm:ss',
  start: true,
};

export default CountdownComponent;

export { CountdownProps };
