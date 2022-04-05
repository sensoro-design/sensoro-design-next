---
nav:
  title: 组件
  path: /components
---

# 数据穿梭框 Transfer

两栏布局的多选组件，将元素从一栏即时移到另一栏。

## 代码演示

### 基础用法

<code src="./__demo__/basic.demo.tsx" />

### 自定义标题栏

<code src="./__demo__/custom-header.demo.tsx" />

### 拖拽排序

<code src="./__demo__/drag-sort.demo.tsx" />

### 高级用法

<code src="./__demo__/more.demo.tsx" />

### 单向模式

<code src="./__demo__/one-way.demo.tsx" />

### 分页

<code src="./__demo__/pagination.demo.tsx" />

### 自定义渲染行数据

<code src="./__demo__/render.demo.tsx" />

### 带搜索框

<code src="./__demo__/show-search.demo.tsx" />

### 简单模式

<code src="./__demo__/simple.demo.tsx" />

### 表格穿梭框

<code src="./__demo__/with-table.demo.tsx" />

### 树穿梭框

<code src="./__demo__/with-tree.demo.tsx" />

## API

### Transfer

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|style|节点样式|`CSSProperties`|`-`|-|
|className|节点类名|`string \| string[]`|`-`|-|
|children|自定义列表渲染函数|`(props: TransferCustomListProps) => ReactNode`|`-`|-|
|dataSource|穿梭框数据源，其中一部分会被渲染到左边一栏，targetKeys 中指定的除外|`TransferItem[]`|`-`|-|
|defaultTargetKeys|默认的 `targetKeys`|`string[]`|`[]`|-|
|defaultSelectedKeys|默认的 `selectKeys`|`string[]`|`[]`|-|
|targetKeys|渲染到右边一栏数据的 key 集合|`string[]`|`-`|-|
|selectedKeys|当前应该有哪些项被选中|`string[]`|`-`|-|
|titleTexts|穿梭框左右栏标题数组。(函数写法 `2.18.0` 开始支持)|`Array<TransferListTitle>`|`['Source', 'Target']`|-|
|operationTexts|穿梭按钮的文案数组，顺序从上至下|`string[] \| ReactNode[]`|`-`|-|
|searchPlaceholder|搜索框默认提示文字|`string`|`-`|-|
|disabled|禁用穿梭框|`boolean`|`-`|-|
|oneWay|单向|`boolean`|`-`|-|
|simple|简单模式|`\| boolean\| {retainSelectedItems?: boolean;}`|`-`|`retainSelectedItems` in '2.21.0'|
|draggable|列表内条目是否可拖拽|`boolean`|`-`|-|
|showSearch|左右两栏是否显示搜索框|`boolean \| InputProps`|`-`|-|
|showFooter|左右两栏是否显示底部重置按钮|`boolean \| ReactNode`|`-`|ReactNode in `2.11.0`|
|pagination|是否使用翻页，也可传入 `Pagination` 的配置|`boolean \| PaginationProps`|`-`|-|
|listStyle|左右两栏框的样式|`CSSProperties`|`-`|-|
|operationStyle|穿梭中间操作部分的样式|`CSSProperties`|`-`|-|
|render|每行数据渲染函数|`(item: TransferItem) => any`|`-`|-|
|filterOption|搜索框筛选算法|`(inputValue: string, item: TransferItem) => boolean`|`(inputValue, item) => item.value.indexOf(inputValue) !== -1`|-|
|onChange|选中项在两栏之间转移时的回调|`(newTargetKeys: string[], direction: 'source' \| 'target', moveKeys: string[]) => void`|`-`|-|
|onSelectChange|数据项选中状态发生改变的回调|`(leftSelectedKeys: string[], rightSelectedKeys: string[]) => void`|`-`|-|
|onSearch|搜索框输入进行搜索时回调函数|`(value: string, type?: 'source' \| 'target') => void`|`-`|-|
|onResetData|点击重置按钮后的回调|`() => void`|`-`|-|
|onDragStart|节点开始拖拽的回调|`(e: DragEvent<HTMLSpanElement>, item: TransferItem) => void`|`-`|-|
|onDragEnd|节点结束拖拽的回调|`(e: DragEvent<HTMLSpanElement>, item: TransferItem) => void`|`-`|-|
|onDragLeave|节点离开可释放目标上时的回调|`(e: DragEvent<HTMLSpanElement>, item: TransferItem) => void`|`-`|-|
|onDragOver|节点被拖拽至可释放目标上时的回调|`(e: DragEvent<HTMLSpanElement>, item: TransferItem) => void`|`-`|-|
|onDrop|节点在可释放目标上释放时的回调|`(info: {e: DragEvent<HTMLSpanElement>;dragItem: TransferItem;dropItem: TransferItem;dropPosition: number;}) => void`|`-`|-|

### Transfer.Item

|Property|Description|Type|Default|
|---|:---:|:---:|---:|
|key|选项的键值（唯一标识符）|`string` **(required)**|`-`|
|value|选项对应的值|`string` **(required)**|`-`|
|disabled|是否禁用此选项|`boolean`|`-`|
