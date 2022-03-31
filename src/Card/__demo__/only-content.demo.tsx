/**
 * title: 简洁卡片
 * desc: 卡片可以只有内容区域。
 */
import { Card, Avatar, Link, Typography } from '@sensoro-design/react';
import ArrowRightOutlined from '@sensoro-design/icons/ArrowRightOutlined';

import './styles.less';

const Content = ({ children }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ display: 'flex', alignItems: 'center', color: '#1D2129' }}>
        <Avatar style={{ marginRight: 8, backgroundColor: '#165DFF' }} size={28}>
          A
        </Avatar>
        <Typography.Text>Username</Typography.Text>
      </span>
      {children}
    </div>
  );
};

export default () => {
  return (
    <>
      <Card hoverable style={{ width: 360, marginBottom: 20 }}>
        <Content>
          <Link>More</Link>
        </Content>
      </Card>
      <Card className="card-with-icon-hover" hoverable style={{ width: 360 }}>
        <Content>
          <span className="icon-hover">
            <ArrowRightOutlined style={{ cursor: 'pointer' }} />
          </span>
        </Content>
      </Card>
    </>
  )
}
