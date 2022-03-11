
/**
 * title: 基础用法
 * desc: 当需要突出某个或某组数字或展示带描述的统计类数据时使用。
 */
import { Statistic } from '@sensoro-design/react';

export default () => {
  return (
    <div>
      <Statistic title="Downloads" value={125670} groupSeparator style={{ marginRight: 60 }} />
      <Statistic extra="Comments" value={40509} groupSeparator precision={2} />
    </div>
  )
}

