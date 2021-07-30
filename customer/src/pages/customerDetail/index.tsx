import React, { useState } from 'react';
import { useRequest, request, MicroAppWithMemoHistory, Link, connectMaster } from 'umi';
import { Descriptions, Drawer, Breadcrumb } from 'antd';

export default connectMaster(({ match, masterState }: any) => {
  const { customerId } = match.params;
  const { data = {} } = useRequest(() => request(`/api/customer/detail?id=${customerId}`, {
    headers: {
      token: masterState.token
    }
  }));
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">客户列表</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>客户详情</Breadcrumb.Item>
      </Breadcrumb>

      <h1 style={{ marginBottom: 24 }}>客户详情</h1>

      <Descriptions bordered>
        <Descriptions.Item label="名称">{data.name}</Descriptions.Item>
        <Descriptions.Item label="地址">{data.address}</Descriptions.Item>
        <Descriptions.Item label="创建时间">{data.create}</Descriptions.Item>
        <Descriptions.Item label="官网">{data.url}</Descriptions.Item>
        <Descriptions.Item label="管理员">
          {/* <a onClick={() => { setVisible(true) }}>管理员设置</a> */}
          <a onClick={() => { window.location.href =`/user?customerId=${customerId}` }}>管理员设置</a>
        </Descriptions.Item>
      </Descriptions>

      {/* <Drawer
        title="用户管理"
        visible={visible}
        closable
        width={'60%'}
        destroyOnClose
        onClose={() => { setVisible(false) }}
      >
      <MicroAppWithMemoHistory name="user" url='/' customerId={customerId} />
      </Drawer> */}
    </div>
  );
})
