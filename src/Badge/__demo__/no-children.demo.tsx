
/**
 * title: 独立使用
 * desc: `children` 为空时，将会独立展示徽标。
 */
import { Badge, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space size={40}>
      <Badge count={2} />
      <Badge count={2} dotStyle={{background: '#E5E6EB', color: '#86909C' }}/>
      <Badge count={16} />
      <Badge maxCount={99} count={1000} />
    </Space>
  )
}
