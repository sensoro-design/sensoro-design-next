
/**
 * title: 前缀后缀/自定义样式
 * desc: 这个示例展示了添加前缀后缀，并且可以自定义数值显示的样式。
 */
import { Statistic } from '@sensoro-design/react';
import ArrowUpOutlined from '@sensoro-design/icons/ArrowUpOutlined';
import ArrowDownOutlined from '@sensoro-design/icons/ArrowDownOutlined';

export default () => {
  return (
    <div>
    <Statistic
      title="New Users"
      value={192393}
      suffix={<ArrowUpOutlined style={{ color: '#ee4d38' }} />}
      style={{ marginRight: 60, marginBottom: 20 }}
    />
    <Statistic
      title="Active Users"
      value={934230}
      suffix={<ArrowDownOutlined style={{ color: '#0fbf60' }} />}
      style={{ marginRight: 60, marginBottom: 20 }}
    />
    <Statistic
      title="User Growth Rate"
      value={50.32}
      precision={2}
      prefix={<ArrowUpOutlined style={{ color: '#ee4d38' }}/>}
      suffix="%"
      styleValue={{ color: '#ee4d38' }}
      style={{ marginRight: 60, marginBottom: 20 }}
    />
  </div>
  )
}
