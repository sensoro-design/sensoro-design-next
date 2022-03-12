
/**
 * title: 定制展开参数
 * desc:
 * 可以通过 `expandProps` 定制展开列的图标，宽度，标题，是否展开等。
 * **Tip:** 正常情况下，是否展开是由 `expandedRowRender` 返回值决定的，如果过多的 `expandedRowRender` 计算导致卡顿，建议使用 `expandProps.rowExpandable`。
 */
import { useState } from 'react';
import { Table } from '@sensoro-design/react';
import { IconRight, IconDown } from '@sensoro-design/react/icon';

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
}, {
  key: '4',
  name: 'Ed Hellen',
  salary: 17000,
  address: '42 Park Road, London',
  email: 'ed.hellen@example.com'
}, {
  key: '5',
  name: 'William Smith',
  salary: 27000,
  address: '62 Park Road, London',
  email: 'william.smith@example.com'
}];

export default () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

  function addExpandedRowKey(key) {
    setExpandedRowKeys(expandedRowKeys.concat(key));
  }

  function removeExpandedRowKey(key) {
    setExpandedRowKeys(expandedRowKeys.filter(k => k !== key));
  }

  return <Table
    columns={columns}
    data={data}
    expandedRowKeys={expandedRowKeys}
    expandedRowRender={(record) => record.email}
    expandProps={{
      icon: ({ expanded, record }) => expanded
        ? <button onClick={() => removeExpandedRowKey(record.key)}><IconDown /></button>
        : <button onClick={() => addExpandedRowKey(record.key)}><IconRight /></button>,
      width: 60,
      columnTitle: 'Expand',
      rowExpandable: (record) => record.key !== '4',
    }}
  />;
}
