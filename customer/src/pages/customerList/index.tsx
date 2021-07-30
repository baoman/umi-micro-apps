import React from 'react';
import { useRequest, request, Link, useModel } from 'umi';
import { Table } from 'antd';

export default () => {
  const { masterState } = useModel('@@qiankunStateFromMaster');
  const { data = [] } = useRequest(() => request('/api/customer/list', {
    headers: {
      token: masterState.token
    }
  }));

  const columns = [
    {
      dataIndex: 'id',
      title: 'ID',
    },
    {
      dataIndex: 'name',
      title: '名称',
    },
    {
      dataIndex: 'address',
      title: '地址',
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
      <h1 style={{ marginBottom: 24 }}>客户列表</h1>

      <Table rowKey="id" columns={columns} dataSource={data} />

    </div>
  );
}
