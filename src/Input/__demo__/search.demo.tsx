/**
 * title: 搜索框
 * desc: 带有搜索按钮的输入框，用于内容检索。
 */
import { Input, Space } from '@sensoro-design/react';

const InputSearch = Input.Search;

export default () => {
  return (
    <Space wrap>
      <InputSearch
        allowClear
        placeholder="Enter keyword to search"
        style={{ width: 350 }}
      />
      <InputSearch
        searchButton
        defaultValue="Search content"
        placeholder="Enter keyword to search"
        style={{ width: 350 }}
      />
      <InputSearch
        searchButton="Search"
        defaultValue="Search content"
        placeholder="Enter keyword to search"
        style={{ width: 350 }}
      />
    </Space>
  )
}
