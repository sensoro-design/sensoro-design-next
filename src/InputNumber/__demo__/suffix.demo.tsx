
/**
 * title: 前缀及后缀
 * desc: 可以添加前缀和后缀。
 */
import { InputNumber } from '@sensoro-design/react';

export default () => {
  return (
    <div>
      <InputNumber
        min={0}
        defaultValue={50}
        suffix="%"
        step={1}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
      <InputNumber
        min={0}
        defaultValue={500}
        prefix="¥"
        step={100}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
      <InputNumber
        mode="button"
        min={0}
        defaultValue={500}
        prefix="¥"
        step={100}
        style={{ width: 160, margin: '10px 24px 10px 0' }}
      />
    </div>
  );
}
