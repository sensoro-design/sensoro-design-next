/**
 * title: 自定义icon
 * desc: 通过`Icon`属性自定义图标
 */
import { Result, Button } from '@sensoro-design/react';

import SmileFilled from '@sensoro-design/icons/SmileFilled';

export default () => {
  return (
    <div >
    <Result
        status={null}
        icon={<SmileFilled style={{color: 'rgb(var(--arcoblue-6))'}} />}
        title="Your operation has been performed."
        extra={<Button type="primary">Back</Button>}
      >
      </Result>
    </div>
  )
}
