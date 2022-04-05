/**
 * title: 自定义收起按钮
 * desc: 设置 `Menu.Sider` 的 `trigger` 属性为 `null` 后，`Sider` 内置的缩起按钮不会显示。此时可自定义收起按钮。
 */
import React from 'react';
import { Layout, Menu, Breadcrumb, Button, Message } from '@sensoro-design/react';
import HomeOutlined from '@sensoro-design/icons/HomeOutlined';
import CalendarOutlined from '@sensoro-design/icons/CalendarOutlined';
import CaretRightOutlined from '@sensoro-design/icons/CaretRightOutlined';
import CaretLeftOutlined from '@sensoro-design/icons/CaretLeftOutlined';
import './styles.less';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const { Sider, Header, Footer, Content, } = Layout;

export default class Demo extends React.Component {
  state = {
    collapsed: false,
  };

  handleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className="layout-collapse-demo">
        <Sider collapsed={this.state.collapsed} collapsible trigger={null} breakpoint="xl">
          <div className="logo" />
          <Menu
            defaultOpenKeys={['1']}
            defaultSelectedKeys={['0_3']}
            onClickMenuItem={(key) =>
              Message.info({ content: `You select ${key}`, showIcon: true })
            }

            style={{ width: '100%' }}
          >
            <MenuItem key="0_1" disabled>
              <HomeOutlined />
              Menu 1
            </MenuItem>
            <MenuItem key="0_2">
              <CalendarOutlined />
              Menu 2
            </MenuItem>
            <MenuItem key="0_3">
              <CalendarOutlined />
              Menu 3
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
          </Menu>
        </Sider>
        <Layout>
          <Header>
            <Button shape="round" className="trigger" onClick={this.handleCollapsed}>
              {this.state.collapsed ? <CaretRightOutlined /> : <CaretLeftOutlined />}
            </Button>
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
