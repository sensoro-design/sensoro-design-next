/**
 * title: 带图标的标签
 * desc: 可通过设置 `icon` 在标签中加入图标。
 */
import { Tag, Space } from '@sensoro-design/react';
import GithubFilled from '@sensoro-design/icons/GithubFilled';

export default () => {
  return (
    <Space size="large">
      <Tag color="gray" icon={<GithubFilled />}>Github</Tag>
      <Tag color="orangered" icon={<GithubFilled />}>Gitlab</Tag>
      <Tag color="blue" icon={<GithubFilled />}>Twitter</Tag>
      <Tag color="arcoblue" icon={<GithubFilled />}>Facebook</Tag>
    </Space>
  )
}
