import React from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserSwitchOutlined,
  UploadOutlined,
} from '@ant-design/icons';
 import './layout.css'
 import 'antd/dist/antd.css'
 import {connect} from 'react-redux'

 import ManageUsers from './manage-users/manage_users'


const { Header, Sider } = Layout;

class SiderDemo extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      collapsed: false,    
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  componentWillMount(){

  
  }

  render() {
    return (
      <Layout>
        {console.log('reached second')}
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <h1 className="adminpanel">ADMIN PANEL</h1>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserSwitchOutlined />}>
              Manage Users
            </Menu.Item>
            <Menu.Item key="2" icon={<UploadOutlined />}>
              Services
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0,color:"white" }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>

          <ManageUsers></ManageUsers> 
        
        </Layout>
      </Layout>
    );
  }
}





const mapStateToProp = state =>{
  return{
     UserLoged:state.UserLoged
  }
}


const mapDispatchToProps = dispatch=>{
  return{
      // SendCredentials: (email,password) =>dispatch(sendUserData(email,password))
  }
}

export default  connect(mapStateToProp,mapDispatchToProps) (SiderDemo) 