/**
 * title: 禁用
 * desc: 禁用复选框。
 */
import { Checkbox, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space>
      <Checkbox checked disabled>
        已选禁用
      </Checkbox>
      <Checkbox disabled>未选禁用</Checkbox>
    </Space>
  );
};
