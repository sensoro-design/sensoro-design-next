
/**
 * title: 范围选择
 * desc: 设置 `range = true` 即可开启范围选择，此时 `value` 为数组。
 */
import { useState } from 'react';
import { Slider } from '@sensoro-design/react';

export default () => {
  const [value, setValue] = useState([0, 50]);
  return (
    <div style={{ width: 200 }}>
      <Slider range value={value} onChange={setValue} />
    </div>
  );
}
