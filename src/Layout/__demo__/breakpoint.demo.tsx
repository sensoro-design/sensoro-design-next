/**
 * title: 响应式侧边栏
 * desc: 左侧 Sider 可以结合 Menu 设置为展开/收起状态, 设置 `breakpoint` 可触发响应式收缩。
 */
import React from 'react';
import { Layout, Menu, Breadcrumb, Message } from '@sensoro-design/react';

import HomeOutlined from '@sensoro-design/icons/HomeOutlined';
import CalendarOutlined from '@sensoro-design/icons/CalendarOutlined';

import './styles.less';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const { Sider, Header, Footer, Content, } = Layout;

function BaseMenu(props) {
  return <Menu
    defaultOpenKeys={['1']}
    defaultSelectedKeys={['0_2']}
    {...props}
  >
    <MenuItem key="0_1" disabled>
      <HomeOutlined />
      Menu 1
    </MenuItem>
    <MenuItem key="0_2">
      <CalendarOutlined />
      Menu 2
    </MenuItem>
    <SubMenu
      key="1"
      title={
        <span>
          <CalendarOutlined />
          Navigation 1
        </span>
      }
    >
      <MenuItem key="1_1">Menu 1</MenuItem>
      <MenuItem key="1_2">Menu 2</MenuItem>
      <SubMenu key="2" title="Navigation 2">
        <MenuItem key="2_1">Menu 1</MenuItem>
        <MenuItem key="2_2">Menu 2</MenuItem>
      </SubMenu>
      <SubMenu key="3" title="Navigation 3">
        <MenuItem key="3_1">Menu 1</MenuItem>
        <MenuItem key="3_2">Menu 2</MenuItem>
        <MenuItem key="3_3">Menu 3</MenuItem>
      </SubMenu>
    </SubMenu>
    <SubMenu
      key="4"
      title={
        <span>
          <CalendarOutlined />
          Navigation 4
        </span>
      }
    >
      <MenuItem key="4_1">Menu 1</MenuItem>
      <MenuItem key="4_2">Menu 2</MenuItem>
      <MenuItem key="4_3">Menu 3</MenuItem>
    </SubMenu>
  </Menu>;
}

export default class Demo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed, type) => {
    const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩';
    Message.info({
      content,
      duration: 2000,
    });
    this.setState({
      collapsed,
    });
  };

  render() {
    return (
      <Layout className="layout-collapse-demo">
        <Sider
          theme="dark"
          breakpoint="lg"
          onCollapse={this.onCollapse}
          collapsed={this.state.collapsed}
          width={220}
          collapsible
        >
          <div className="logo" />
          <BaseMenu
            onClickMenuItem={(key) =>
              Message.info({ content: `You select ${key}`, showIcon: true })
            }
            theme="dark"
            style={{ width: '100%' }}
          />
        </Sider>
        <Layout>
          <Header>
            <BaseMenu mode="horizontal" />
          </Header>
          <Layout style={{ padding: '0 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
