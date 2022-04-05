/**
 * title: 自定义图标
 * desc: 指定`icon`可以自定义图标显示。
 */
import { Steps } from '@sensoro-design/react';
import HomeOutlined from '@sensoro-design/icons/HomeOutlined';
import { LoadingOutlined } from '@sensoro-design/react/es/IconLoading';
import { IconThumbUp } from '@sensoro-design/react/icon';

const Step = Steps.Step;

export default () => {
  return (
    <Steps current={2}>
      <Step icon={<HomeOutlined />} title="Succeeded" description="This is a description" />
      <Step icon={<LoadingOutlined />} title="Processing" description="This is a description" />
      <Step icon={<IconThumbUp />} title="Pending" description="This is a description" />
    </Steps>
  )
}
