
/**
 * title: 基本用法
 * desc: 日历的基本用法。
 */
import { Calendar } from '@sensoro-design/react';

export default () => {
  return (
    <div style={{width: '100%', overflow: 'auto'}}>
      <Calendar defaultValue="2020-04-01" />
    </div>
  )
}
