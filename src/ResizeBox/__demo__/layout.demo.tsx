
/**
 * title: 在布局中使用
 * desc: [Layout](/react/components/ResizeBox) 组件中集成了 `ResizeBox` 组件，可以在 Layout 中使用可伸缩的侧边栏。
 */
import { Layout } from '@sensoro-design/react';

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
