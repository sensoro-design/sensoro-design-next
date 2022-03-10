
/**
 * title: 大小和形状
 * desc: 通过设置 `size` 字段，可以调节头像的大小，默认大小为 `40px`。设置 `shape` 字段，可以设置头像是圆形 (circle) 还是正方形 (square)。
 */
import { Avatar, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space size="large" direction="vertical">
      <Space size="large">
        <Avatar size={64}>
          Arco
        </Avatar>
        <Avatar size={40}>
          Arco
        </Avatar>
        <Avatar size={32}>
          Arco
        </Avatar>
        <Avatar size={24}>
          Arco
        </Avatar>
      </Space>
      <Space size="large">
        <Avatar size={64} shape="square">
          Arco
        </Avatar>
        <Avatar size={40} shape="square">
          Arco
        </Avatar>
        <Avatar size={32} shape="square">
          Arco
        </Avatar>
        <Avatar size={24} shape="square">
          Arco
        </Avatar>
      </Space>
    </Space>
  )
}
