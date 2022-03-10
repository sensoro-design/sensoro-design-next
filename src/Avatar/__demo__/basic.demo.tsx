
/**
 * title: 基础用法
 * desc: 头像的基础使用。如果头像是文字的话，会自动调节字体大小，来适应头像框。
 */
import { Avatar, Typography, Space } from '@sensoro-design/react';
import { IconUser } from '@sensoro-design/react/icon';

const { Text } = Typography;

export default () => {
  return (
    <Space size="large">
      <Avatar>A</Avatar>
      <Avatar style={{ backgroundColor: '#3370ff' }}>
        <IconUser />
      </Avatar>
      <Avatar style={{ backgroundColor: '#14a9f8' }}>Arco</Avatar>
      <Avatar style={{ backgroundColor: '#00d0b6' }}>Design</Avatar>
      <Avatar>
        <img alt="avatar" src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
      </Avatar>
    </Space>
  )
}
