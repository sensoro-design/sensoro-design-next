
/**
 * title: 受控组件
 * desc: `value` 和 `onChange` 需要配合使用。
 */
import { useState } from 'react';
import { TimePicker } from '@sensoro-design/react';

export default () => {
  const [value, setValue] = useState();

  return (
    <TimePicker
      style={{ width: 194 }}
      value={value}
      onChange={(valueString) => setValue(valueString)}
    />
  );
}
