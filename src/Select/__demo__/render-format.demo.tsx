/**
 * title: 定制回显内容
 * desc:
 * 使用 `renderFormat` 可以定制回显内容。
 * **注意：在如远程加载选项数据的场景下，value 中对应的选项可能在某些时刻并不存在，需要判断若 `option` 不存在则返回 `value` 作为显示的内容。**
 */
import { Select, Space } from '@sensoro-design/react';
import { IconStar, IconDelete } from '@sensoro-design/react/icon';

const Option = Select.Option;

export default () => {
  const data = ['Beijing', 'Guangzhou', 'Shanghai', 'Shenzhen'];
  return (
    <Space size="large">
      <Select
        placeholder="Select city"
        style={{ width: 345 }}
        renderFormat={(option, value) => {
          return option ? (
            <span>
              <IconStar style={{ color: '#f7ba1e' }} />
              {` ${option.value} `}
            </span>
          ) : (
            value
          );
        }}
      >
        {data.map((item, index) => (
          <Option value={item} key={index}>
            {item}
          </Option>
        ))}
      </Select>

      <Select
        placeholder="Select city"
        style={{ width: 345 }}
        mode="multiple"
        removeIcon={<IconDelete />}
        defaultValue={['Beijing', 'Shenzhen']}
        renderFormat={(option, value) => {
          // When labelInValue is true, the value is an object
          return option ? (
            <span>
              <IconStar style={{ color: '#f7ba1e' }} />
              {` ${option.value} City `}
            </span>
          ) : (
            value
          );
        }}
      >
        {data.map((item, index) => (
          <Option value={item} key={index}>
            {item}
          </Option>
        ))}
      </Select>
    </Space>
  );
}
