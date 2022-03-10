
/**
 * title: 无限长列表
 * desc:
 * 通过指定 `virtualListProps` 来开启虚拟列表，在大量数据时获得高性能表现。
 * **由于虚拟列表内部使用到了 ListItem 的 `ref`，因此如果你通过 `render` 返回了一个自定义函数组件，请使用 `React.forwardRef` 包裹它。**
 */
import { List, Avatar } from '@sensoro-design/react';

export default () => {
  return  (
    <>
      <h3 style={{ color: 'var(--color-text-2)' }}>10000 items</h3>
      <List
        style={{ width: 600 }}
        virtualListProps={{
          height: 560,
        }}
        dataSource={new Array(10000).fill(null).map((_, index) => {
          const prefix = `0000${index}`.slice(-5);
          return {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            description: `(${prefix}) Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.`,
          };
        })}
        render={(item, index) => (
          <List.Item key={index}>
            <List.Item.Meta
              avatar={
                <Avatar shape="square">
                  A
                </Avatar>
              }
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </>
  )
}
