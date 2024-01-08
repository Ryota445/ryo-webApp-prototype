import React, { useState } from 'react';
import { Layout, Flex } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import MenuComponent from './MenuComponent';

import {MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  ProfileOutlined,
  TagsOutlined,
  ToolOutlined,
  FileExcelOutlined,
  LogoutOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { Menu, Button, theme } from 'antd';
import Logo from '../assets/img/logo.png'
import { Input, Space } from 'antd';
import ContentComponent from './ContentComponent';

const { Search } = Input;



const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(100% - 8px)',
  maxWidth: 'calc(100% - 8px)',
};

const onSearch = (value, _e, info) => console.log(info?.source, value);




function HomeComponent() {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
  return (
    <div>
         <Layout style={layoutStyle}>
            <Sider className=" text-white text-center" width="15%" style={{lineHeight: '120px',  backgroundColor: '#001529', }} trigger={null} collapsible collapsed={collapsed}>
                            <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                            key: '1',
                            icon: <HomeOutlined />,
                            label: 'หน้าหลัก',
                            },
                            {
                            key: '2',
                            icon: <ProfileOutlined />,
                            label: 'จัดการครุภัณฑ์',
                            },
                            {
                              key: '3',
                              icon: <PlusCircleOutlined />,
                              label: 'เพิ่มข้อมูลครุภัณฑ์',
                              },
                            {
                            key: '4',
                            icon: <TagsOutlined />,
                            label: 'การทำจำหน่าย',
                            },
                            {
                            key: '5',
                            icon: <ToolOutlined />,
                            label: 'การบำรุงรักษา',
                            },
                            {
                              key: '6',
                              icon: <FileExcelOutlined />,
                              label: 'สร้างรายงาน',
                            },
                            {
                              key: '7',
                              icon: <LogoutOutlined />,
                              label: 'Logout',
                            },
                            
                        ]}
                        />

                        

            </Sider>
      <Layout style={{backgroundColor: '#001529'}}>
            <Header className="  text-white  h-16 ps-12 " style={{lineHeight: '64px',}}>
                <div className='flex justify-between'>
                   <div>
                        <Button
                                icon={collapsed ? <MenuUnfoldOutlined  /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                border:'none',
                                fontSize: '16px',
                                color:"white",
                                width: 64,
                                height: 64, 
                                right:'40px',
                            }} />
                   </div>
                    <div className='flex items-center'>
                        
                        
                            <img className="w-20 " src={Logo} alt="Logo" />
                        </div>
                   <div  className='flex items-center'>
                        <Search  placeholder="Search" onSearch={onSearch} enterButton  style={{width: 200,}} />
                   </div>
                   
                   
                </div>
                            
            </Header>
            <Content className=" text-white   min-h-screen rounded-2xl " style={{lineHeight: '50px',backgroundColor:'#A3AED0'}}>
                <ContentComponent/>
            </Content>
            <Footer className=" text-center text-white " style={{backgroundColor: '#001529'}} >
                Footer
            </Footer>
      </Layout>
    </Layout>
    </div>
  )
}

export default HomeComponent