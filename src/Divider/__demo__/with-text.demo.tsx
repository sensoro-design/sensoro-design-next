
/**
 * title: 带有文字的分割线
 * desc: 通过 `orientation` 指定分割线文字的位置。
 */
import { Divider, Typography } from '@sensoro-design/react';
import './styles.less';

const { Paragraph } = Typography;

const orientations = ['left', 'center', 'right'] as const;

export default () => {
  return (
    <div className="divider-demo">
      <Paragraph>A design is a plan or specification for the construction of an object.</Paragraph>
      <Divider orientation={orientations[0]}>Text</Divider>
      <Paragraph>A design is a plan or specification for the construction of an object.</Paragraph>
      <Divider orientation={orientations[1]}>Text</Divider>
      <Paragraph>A design is a plan or specification for the construction of an object.</Paragraph>
      <Divider orientation={orientations[2]}>Text</Divider>
    </div>
  )
}
