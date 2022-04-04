/**
 * title: 基本用法
 * desc: 对不同章节的文本段落进行分割，默认为水平分割线，可在中间加入文字。
 */
import { Divider, Typography } from '@sensoro-design/react';
import FileImageOutlined from '@sensoro-design/icons/FileImageOutlined';
import UserOutlined from '@sensoro-design/icons/UserOutlined';
import { IconPen } from '@sensoro-design/react/icon';
import './styles.less';

const { Paragraph, Title } = Typography;

export default () => {
  return (
    <>
      <div className="divider-demo">
        <Paragraph>A design is a plan or specification for the construction of an object.</Paragraph>
        <Divider />
        <Paragraph>A design is a plan or specification for the construction of an object.</Paragraph>
        <Divider style={{ borderBottomStyle: 'dashed' }} />
        <Paragraph>A design is a plan or specification for the construction of an object.</Paragraph>
        <Divider style={{ borderBottomWidth: 2, borderBottomStyle: 'dotted' }} />
        <Paragraph>A design is a plan or specification for the construction of an object.</Paragraph>
      </div>
      <div className="divider-demo" style={{ marginTop: 48 }}>
        <div className="divider-demo-flex-content">
          <span className="avatar">
            <FileImageOutlined />
          </span>
          <div className="content">
            <Title heading={6}>Image</Title>May 4, 2010
          </div>
        </div>
        <Divider className="half-divider" />
        <div className="divider-demo-flex-content">
          <span className="avatar">
            <UserOutlined />
          </span>
          <div className="content">
            <Title heading={6}>Avatar</Title>May 4, 2010
          </div>
        </div>
        <Divider className="half-divider" />
        <div className="divider-demo-flex-content">
          <span className="avatar">
            <IconPen />
          </span>
          <div className="content">
            <Title heading={6}>Icon</Title>May 4, 2010
          </div>
        </div>
      </div>
    </>
  )
}
