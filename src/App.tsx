import React, { useState } from 'react'
import './App.css'
import { Layout, Menu, Breadcrumb, Icon, Typography } from 'antd'
// import { Row, Col, Button } from 'antd'
const { Content, Sider } = Layout
const { SubMenu } = Menu
const { Title } = Typography

const App: React.FC = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false)
  
  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><Icon type="home" /></Breadcrumb.Item>
              <Breadcrumb.Item>Level 1</Breadcrumb.Item>
              <Breadcrumb.Item>Level 2</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Title>Content</Title>
              <Title level={2}>Heading Two</Title>
              Content
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default App
