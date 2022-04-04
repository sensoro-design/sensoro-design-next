/**
 * title: 完整功能
 * desc: 体现全部功能。
 */
import { Result, Button, Typography } from '@sensoro-design/react';
import SmileFilled from '@sensoro-design/icons/SmileFilled';

export default () => {
  return (
    <div >
      <Result
        status="error"
        icon={<SmileFilled />}
        title='No internet'
        subTitle='DNS_PROBE_FINISHED_NO_INTERNET'
        extra={<Button type='primary'>Refresh</Button>}
      >
        <Typography className="result-content" style={{background: 'var(--color-fill-2)', padding: 24}}>
          <Typography.Paragraph>Try:</Typography.Paragraph>
          <ul>
            <li> Checking the network cables, modem, and router </li>
            <li> Reconnecting to Wi-Fi </li>
          </ul>
        </Typography>
      </Result>
    </div>
  )
}
