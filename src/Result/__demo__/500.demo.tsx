/**
 * title: 500
 * desc: 通常表示服务器错误
 */
import { Result, Button } from '@sensoro-design/react';

export default () => {
  return (
    <div >
      <Result
        status="500"
        subTitle="This page isn’t working."
        extra={<Button type='primary'>Back</Button>}
      >
      </Result>
    </div>
  )
}
