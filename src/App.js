import React, { Children } from 'react';
import './App.css';
import { Input, Menu, Space } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import { DashboardOutlined, DollarCircleOutlined, EditOutlined, MoneyCollectOutlined, SwitcherOutlined } from '@ant-design/icons/lib/icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Space>
        <Menu
        mode="inline"
        onClick={(info) => {
          console.log(info.key);
        }}
        defaultOpenKeys={["dashboard"]}
        items={[
          { label: (
            <Input.Search placeholder='cari disini om..'></Input.Search>
          ), 
            key: 'search', 
          },
          { label: "HOME", 
            key: 'home', 
            icon: <HomeFilled/> },
          { label: "Dashboard", 
            key: 'dashboard',
            icon: <DashboardOutlined />,
          children:[
            { label: "Revenue", 
              key: 'rev',
              icon: <DollarCircleOutlined />
             },
            { label: <span style={{color: "red"}}>Expenses</span>, 
              key: 'exp',
              icon: <MoneyCollectOutlined />
             }
          ]
           },
          { label: "User Management", 
            key: 'um',
            type: 'group',
            children:[
            { label: "Edit Profile", 
              key: 'ep',
              icon: <EditOutlined />
              },
            { label: "Switch Account",
              key: 'sa',
              icon: <SwitcherOutlined />
              }
          ] },
          { label: "Signout", key: 'signout', danger: true },
          ]}
        ></Menu>
        </Space>
      </header>
    </div>
  );
}
export default App;