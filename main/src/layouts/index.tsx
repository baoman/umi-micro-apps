import React, { useEffect, useState } from 'react';
import { IRouteComponentProps } from 'umi'
import { Layout, Menu } from 'antd';
import { Link } from 'umi';
import style from './index.less';
import UserService from '../common/domains/user/service';
import User from '../common/domains/user/entities/user';

const { Content, Header } = Layout;
interface MenuI {
  title: string;
  menuDataRender: () => MenuItem[];
}
interface MenuItem {
  id: string;
  name: string;
  path: string;
}
const menuList: MenuI = {
  title: '方舟工作台',
  menuDataRender: () => ([
    {
      id: 'home',
      name: '方舟工作台',
      path: '/'
    },
    {
      id: 'customer',
      name: '客户管理',
      path: '/customer'
    },
    {
      id: 'user',
      name: '用户管理',
      path: '/user'
    }])
}
export default ({ children, location, route, history, match }: IRouteComponentProps) => {
  const [user, setUser] = useState(new User())
  const [selectedMenu, setSelectedMenu] = useState(location.pathname.split('/')[1] || 'home')
  useEffect(() => {
    getUserInfo()
  }, [])
  // 获取用户信息
  const getUserInfo = () => {
    UserService.getUserInfo().then(u => {
      setUser(u)
    });
  }
  const onClickMenu = (item: any) => {
    setSelectedMenu(item.key)
  }
  return (
    <Layout className={style.layout}>
      <Header>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          selectedKeys={[selectedMenu]}
          onClick={onClickMenu}
          style={{ height: '100%', borderRight: 0 }}
        >
          {
            menuList.menuDataRender().map((item: MenuItem) => {
              return <Menu.Item key={item.id}>
                <Link to={item.path}>{item.name}</Link>
              </Menu.Item>
            })
          }
        </Menu>
        <div className={style.username}>{user.name} {user.getUserType(user.type)}</div>
      </Header>
      <Content
        style={{
          background: '#fff',
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        {children}
      </Content>
    </Layout>
  )
}



