/**
 * title: 不同尺寸
 * desc: 通过设置 `size` 来指定大小。
 */
import { InputTag, Radio } from '@sensoro-design/react';
import { useState } from 'react';
const RadioGroup = Radio.Group;

export default () => {
  const [size, setSize] = useState('default');
  return (
    <div>
      <RadioGroup
        style={{ marginBottom: 20, borderRadius: 4 }}
        type="button"
        name="size"
        value={size}
        onChange={(value) => setSize(value)}
      >
        <Radio value="small">small</Radio>
        <Radio value="default">default</Radio>
        <Radio value="large">large</Radio>
      </RadioGroup>
      <br />
      <InputTag
        allowClear
        size={size}
        defaultValue={['Beijing', 'Shanghai']}
        placeholder="Please input"
        style={{ maxWidth: 350, marginRight: 20 }}
      />
    </div>
  );
}
