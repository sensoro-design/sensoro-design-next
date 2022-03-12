
/**
 * title: 基本用法
 * desc: 基本用法展示。
 */
import { useState } from 'react';
import { Slider } from '@sensoro-design/react';

export default () => {
  const [value, setValue] = useState(30);
  return <Slider value={value} onChange={setValue} style={{ width: 200 }}/>
}
