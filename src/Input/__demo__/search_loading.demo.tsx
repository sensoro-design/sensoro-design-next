/**
 * title: 搜索框 Loading
 * desc: 通过 `loading` 属性可以设置搜索框在 `onSearch` 的时候展示 `loading`。
 */
import { Input, Space } from '@sensoro-design/react';

const InputSearch = Input.Search;

export default () => {
  return (
    <Space wrap>
      <InputSearch
        loading
        placeholder="Enter keyword to search"
        style={{ width: 350 }}
      />
      <InputSearch
        searchButton
        loading
        defaultValue="Search content"
        placeholder="Enter keyword to search"
        style={{ width: 350 }}
      />
      <InputSearch
        searchButton="Search"
        loading
        defaultValue="Search content"
        placeholder="Enter keyword to search"
        style={{ width: 350 }}
      />
    </Space>
  )
}
