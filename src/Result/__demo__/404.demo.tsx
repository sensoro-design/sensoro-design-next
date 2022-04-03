/**
 * title: 404
 * desc: 页面未找到
 */
import { Result, Button } from '@sensoro-design/react';

export default () => {
  return (
    <div >
      <Result
        status="404"
        subTitle="Whoops, that page is gone. "
        extra={[
          <Button key="again" style={{marginRight: 16}}>Again</Button>,
          <Button key="back" type="primary">Back</Button>,
        ]}
      >
      </Result>
    </div>
  )
}
