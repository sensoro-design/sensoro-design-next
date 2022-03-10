
/**
 * title: 下拉选择的头部
 * desc: 除了默认的头部切换外，也支持下拉选择的头部，更快速的定位。
 */
import { Calendar } from '@sensoro-design/react';

export default () => {
  return (
    <div style={{width: '100%', overflow: 'auto'}}>
      <Calendar defaultValue="2020-04-01" headerType="select" />
    </div>
  )
}
