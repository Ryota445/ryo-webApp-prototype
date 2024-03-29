import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';

function MenuComponent() {

    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

  return (
    <div>
                    <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                    key: '1',
                    icon: <UserOutlined />,
                    label: 'nav 1',
                    },
                    {
                    key: '2',
                    icon: <VideoCameraOutlined />,
                    label: 'nav 2',
                    },
                    {
                    key: '3',
                    icon: <UploadOutlined />,
                    label: 'nav 3',
                    },
                ]}
                />
            </Sider>
  </div>
  )
}

export default MenuComponent