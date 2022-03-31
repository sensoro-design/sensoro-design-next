/**
 * title: 带图标的标签
 * desc: 可通过设置 `icon` 在标签中加入图标。
 */
import { Tag, Space } from '@sensoro-design/react';
import { IconGitlab, IconTwitter, IconGithub, IconFacebook } from '@sensoro-design/react/icon';

export default () => {
  return (
    <Space size="large">
      <Tag color="gray" icon={<IconGithub />}>Github</Tag>
      <Tag color="orangered" icon={<IconGitlab />}>Gitlab</Tag>
      <Tag color="blue" icon={<IconTwitter />}>Twitter</Tag>
      <Tag color="arcoblue" icon={<IconFacebook />}>Facebook</Tag>
    </Space>
  )
}
