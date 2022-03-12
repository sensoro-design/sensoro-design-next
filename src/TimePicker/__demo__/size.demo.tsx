
/**
 * title: 尺寸
 * desc: 有四种尺寸可供选择。
 */
import { useState } from 'react';
import { TimePicker, Radio } from '@sensoro-design/react';

const RadioGroup = Radio.Group;

export default () => {
  const [size, setSize] = useState('default');

  return <div>
    <RadioGroup
      value={size}
      options={['large', 'default', 'small', 'mini' ]}
      onChange={(value) => setSize(value)}
      type="button"
      style={{ marginBottom: 24 }}
    />
    <br />
    <TimePicker style={{ width: 194 }} size={size} placeholder="请选择时间" />
  </div>
}
