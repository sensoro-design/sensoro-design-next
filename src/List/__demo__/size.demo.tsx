/**
 * title: 不同尺寸
 * desc: 设置 `size` 可以使用三种尺寸（`small`, `default`, `large`）的列表，可根据业务需求自行选择。
 */
import { useState } from 'react';
import { List, Radio } from '@sensoro-design/react';

import type { ListProps } from '@sensoro-design/react/es/List';

const RadioGroup = Radio.Group;

export default () => {
  const [size, setSize] = useState<ListProps['size']>('default');

  return (
    <>
      <RadioGroup
        type="button"
        name="size"
        value={size}
        onChange={(value) => setSize(value)}
        style={{ marginBottom: 20, borderRadius: 4 }}
      >
        <Radio value="small">small</Radio>
        <Radio value="default">default</Radio>
        <Radio value="large">large</Radio>
      </RadioGroup>
      <List
        style={{ width: 622 }}
        size={size}
        header="List title"
        dataSource={[
          'Beijing Bytedance Technology Co., Ltd.',
          'Bytedance Technology Co., Ltd.',
          'Beijing Toutiao Technology Co., Ltd.',
          'Beijing Volcengine Technology Co., Ltd.',
          'China Beijing Bytedance Technology Co., Ltd.',
        ]}
        render={(item, index) => <List.Item key={index}>{item}</List.Item>}
      />
    </>
  );
}
