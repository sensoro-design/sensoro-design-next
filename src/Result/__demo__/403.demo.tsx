
/**
 * title: 403
 * desc: 没有当前页面的访问权限。
 */
import { Result, Button } from '@sensoro-design/react';

export default () => {
  return (
    <div >
      <Result
        status="403"
        subTitle="Access to this resource on the server is denied."
        extra={ <Button type="primary">Back</Button>}
      >
      </Result>
    </div>
  )
}
