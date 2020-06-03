import React, { useState } from 'react'
import './antd.scss'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import AppMain from './AppMain'
import MenuComponent from './SideMenu'
import TagsView from '@/components/TagsView'
import MyBreadcrumb from './MyBreadcrumb'
import TopRightDrop from './TopRightDrop'
import ModuleScss from './index.module.scss'
const { Header, Sider, Content } = Layout

function LayoutManage() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div>
      <Layout className={ModuleScss.wrapperContainer}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className={ModuleScss.IconWrapper}>
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              alt=""
            />
            <h1>雪茄学院平台</h1>
          </div>
          <MenuComponent />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background">
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed)
              }
            )}
            <MyBreadcrumb />
            <div style={{ float: 'right', marginRight: '20px' }}>
              <TopRightDrop></TopRightDrop>
            </div>
          </Header>
          <TagsView />
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280
            }}
          >
            <AppMain />
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default LayoutManage
