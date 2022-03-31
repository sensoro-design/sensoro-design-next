/**
 * title: 时间格式
 * desc: 时间显示。通过 [dayjs](https://github.com/iamkun/dayjs) 来进行时间格式化，`format` 即 dayjs 的 format。
 */
import { Statistic } from '@sensoro-design/react';

export default () => {
  return <Statistic title="CreatedTime" value={1554869813383} format="YYYY/MM/DD HH:mm:ss" />
}
