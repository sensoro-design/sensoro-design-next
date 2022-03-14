/**
 * title: 虚线
 * desc: 建议同类型信息之间使用虚线分隔
 */
import { Divider, Typography } from '@sensoro-design/react';
import './styles.less';

const { Paragraph } = Typography;

export default () => {
  return (
    <div className="divider-demo">
      <Paragraph>A design is a plan or specification for the construction of an object.</Paragraph>
      <Divider dashed />
      <Paragraph>A design is a plan or specification for the construction of an object.</Paragraph>
      <Divider dashed />
      <Paragraph>A design is a plan or specification for the construction of an object.</Paragraph>
      <Divider dashed />
    </div>
  )
}
