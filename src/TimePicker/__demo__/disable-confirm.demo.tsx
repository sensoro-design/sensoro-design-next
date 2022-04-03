
/**
 * title: 禁用确认
 * desc: 跳过确认步骤，直接点击选择时间。
 */
import { TimePicker } from '@sensoro-design/react';

const style = { width: 194, margin: '0 24px 24px 0' };

function onSelect(valueString, value) {
  console.log('onSelect', valueString, value);
}

function onChange(valueString, value) {
  console.log('onChange', valueString, value);
}

export default () => {
  return (
    <div>
      <TimePicker disableConfirm style={style} onSelect={onSelect} onChange={onChange} />
      <TimePicker.RangePicker
        disableConfirm
        style={{ ...style, width: 252 }}
        onSelect={onSelect}
        onChange={onChange}
      />
    </div>
  )
}
