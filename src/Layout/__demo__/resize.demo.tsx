
/**
 * title: 可伸缩侧边栏
 * desc: 可以用鼠标进行拖拽放大缩小的侧边栏，需要用到的参数：`resizeDirections`。
 */
import { Layout } from '@sensoro-design/react';
import './styles.less';

const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

export default () => {
  return (
    <div className="layout-basic-demo">
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider resizeDirections={['right']} style={{ minWidth: 150, maxWidth: 500, height: 200 }}>
            Sider
          </Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}
