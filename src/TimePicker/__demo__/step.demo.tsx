
/**
 * title: 定制步长
 * desc: 通过设置 `step`，可以定制需要显示的时、分、秒的步长。
 */
import { TimePicker } from '@sensoro-design/react';

export default () => {
  return (
    <TimePicker
      defaultValue="10:25:30"
      step={{
        hour: 2,
        minute: 5,
        second: 10,
      }}
      style={{ width: 194 }}
    />
  )
}
