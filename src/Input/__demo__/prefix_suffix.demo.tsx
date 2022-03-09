/**
 * title: 前后缀
 * desc: 通过指定`prefix`和`suffix`来在输入框内添加前缀和后缀。
 */
import { Input, Space } from '@sensoro-design/react';
import { IconUser, IconSearch, IconInfoCircle } from '@sensoro-design/react/icon';

export default () => {
  return (
    <Space direction="vertical">
      <Space wrap>
        <Input
          style={{ width: 350 }}
          prefix={<IconUser />}
          placeholder="Please enter"
        />
        <Input
          allowClear
          style={{ width: 350 }}
          suffix={<IconInfoCircle />}
          placeholder="Please enter"
        />
      </Space>
      <Space wrap>
        <Input
          style={{ width: 350 }}
          prefix={<IconUser />}
          suffix={<IconInfoCircle />}
          placeholder="Please enter"
        />
        <Input
          style={{ width: 350 }}
          addBefore="+86"
          addAfter={<IconSearch />}
          prefix={<IconUser />}
          suffix={<IconInfoCircle />}
          allowClear
          placeholder="Please enter"
        />
      </Space>
    </Space>
  )
}
