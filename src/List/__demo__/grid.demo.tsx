/**
 * title: 栅格列表
 * desc: 通过 `grid.span` 设置期望每行展示的列数。
 */
import { List, Card } from '@sensoro-design/react';

const data = [
  {
    title: 'Platform',
    data: ['iOS', 'Android', 'Web'],
  },
  {
    title: 'Framework',
    data: ['Angular', 'Vue', 'React'],
  },
  {
    title: 'Language',
    data: ['C++', 'JavaScript', 'Python'],
  },
  {
    title: 'Component',
    data: ['Button', 'Breadcrumb', 'Transfer'],
  },
];
export default () => {
  return (
    <List
      grid={{
        gutter: 0,
        span: 6,
      }}
      dataSource={data}
      bordered={false}
      render={(item, index) => (
        <List.Item key={index}>
          <List
            size="small"
            header={item.title}
            dataSource={item.data}
            render={(item, index) => <List.Item key={index}>{item}</List.Item>}
          />
        </List.Item>
      )}
    />
  )
}

