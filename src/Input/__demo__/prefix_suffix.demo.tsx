/**
 * title: 前后缀
 * desc: 通过指定`prefix`和`suffix`来在输入框内添加前缀和后缀。
 */
import { Input, Space } from '@sensoro-design/react';

import UserOutlined from '@sensoro-design/icons/UserOutlined';
import SearchOutlined from '@sensoro-design/icons/SearchOutlined';
import InfoCircleOutlined from '@sensoro-design/icons/InfoCircleOutlined';

export default () => {
  return (
    <Space direction="vertical">
      <Space wrap>
        <Input
          style={{ width: 350 }}
          prefix={<UserOutlined />}
          placeholder="Please enter"
        />
        <Input
          allowClear
          style={{ width: 350 }}
          suffix={<InfoCircleOutlined />}
          placeholder="Please enter"
        />
      </Space>
      <Space wrap>
        <Input
          style={{ width: 350 }}
          prefix={<UserOutlined />}
          suffix={<InfoCircleOutlined />}
          placeholder="Please enter"
        />
        <Input
          style={{ width: 350 }}
          addBefore="+86"
          addAfter={<SearchOutlined />}
          prefix={<UserOutlined />}
          suffix={<InfoCircleOutlined />}
          allowClear
          placeholder="Please enter"
        />
      </Space>
    </Space>
  )
}
