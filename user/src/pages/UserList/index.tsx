import React from 'react';
import { useRequest, request, Link, connectMaster } from 'umi';
import { Table } from 'antd';
import User from '../../common/domains/user/entities/user';
const UserList = (props: any) => {
  const { customerId } = props;
  const user = new User();
  const { data = [] } = useRequest(() => request(`/api/user/list?customerId=${customerId}`));

  const columns = [
    {
      dataIndex: 'id',
      title: 'ID',
    },
    {
      dataIndex: 'name',
      title: '姓名',
    },
    {
      dataIndex: 'address',
      title: '住址',
    },
    {
      dataIndex: 'type',
      title: '类型',
      render: (type: number) => <span style={{color: 'red'}}>{user.getUserType(type)}</span>
    },
    {
      dataIndex: 'id',
      title: '操作',
      render: (id: string) => (
        <Link to={`/${id}`}>详情</Link>
      )
    },
  ];

  return (
    <div>
      <h1 style={{ marginBottom: 24 }}>用户列表</h1>

      <Table rowKey="id" columns={columns} dataSource={data} />

    </div>
  );
}

export default connectMaster(UserList);
