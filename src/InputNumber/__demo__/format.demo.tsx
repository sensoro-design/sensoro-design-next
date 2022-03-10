
/**
 * title: 格式化展示值
 * desc: 通过 `formatter`、 `parser` 配合使用可以定义输入框展示值。
 */
import { useState } from 'react';
import { InputNumber } from '@sensoro-design/react';

export default () => {
  const [value, setValue] = useState(12000);
  return (
    <InputNumber
      style={{ width: 160, margin: '10px 24px 10px 0' }}
      min={0}
      max={1000000000}
      step={1000}
      value={value}
      onChange={setValue}
      prefix="¥"
      formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={(value) => value.replace(/,/g, '')}
    />
  );
}
