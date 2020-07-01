import React from 'react'
import {Menu,Dropdown } from 'antd';
import {UserOutlined } from '@ant-design/icons';

export default function Buttons() {

    function handleButtonClick(e) {
        // message.info('Click on left button.');
        console.log('click left button', e);
    }
      
    function handleMenuClick(e) {
        // message.info('Click on menu item.');
        console.log('click', e);
    }
    const menu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="Customer" icon={<UserOutlined />}>
            Customer
          </Menu.Item>
          <Menu.Item key="Service_Provider" icon={<UserOutlined />}>
            Service Provider
          </Menu.Item>
        </Menu>
      );
    return (
        <>
    <Dropdown.Button overlay={menu} placement="bottomCenter" icon={<UserOutlined />}>
      Change Role
    </Dropdown.Button>
        </>
    )
}
