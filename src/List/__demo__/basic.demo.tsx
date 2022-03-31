/**
 * title: 基本用法
 * desc: 最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。
 */
import { List } from '@sensoro-design/react';

export default () => {
  return (
    <List
      style={{ width: 622 }}
      size="small"
      header="List title"
      dataSource={[
        'Beijing Bytedance Technology Co., Ltd.',
        'Bytedance Technology Co., Ltd.',
        'Beijing Toutiao Technology Co., Ltd.',
        'Beijing Volcengine Technology Co., Ltd.',
        'China Beijing Bytedance Technology Co., Ltd.',
      ]}
      render={(item, index) => <List.Item key={index}>{item}</List.Item>}
    />
  )
}
