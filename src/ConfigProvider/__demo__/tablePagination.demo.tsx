
/**
 * title: 表格分页配置
 * desc: 配置全局的表格分页参数，比如可以全局设置 `tablePagination.hideOnSinglePage`, 当表格数据小于等于一页的时候隐藏分页。
 */
import { useState } from 'react';
import { ConfigProvider, Table, Switch, Space, Typography } from '@sensoro-design/react';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

const data = [{
  key: '1',
  name: 'Jane Doe',
  salary: 23000,
  address: '32 Park Road, London',
  email: 'jane.doe@example.com'
}, {
  key: '2',
  name: 'Alisa Ross',
  salary: 25000,
  address: '35 Park Road, London',
  email: 'alisa.ross@example.com'
}, {
  key: '3',
  name: 'Kevin Sandra',
  salary: 22000,
  address: '31 Park Road, London',
  email: 'kevin.sandra@example.com'
}];

export default () => {
  const [hideOnSinglePage, setHideOnSinglePage] = useState(true);

  return <ConfigProvider tablePagination={{ hideOnSinglePage }}>
    <Space style={{ marginBottom: 10 }}>
      <Typography.Text>tablePagination.hideOnSinglePage</Typography.Text>
      <Switch
        checked={hideOnSinglePage}
        onChange={(checked) => setHideOnSinglePage(checked)}
      />
    </Space>
    <Table columns={columns} data={data} />
  </ConfigProvider>;
}
