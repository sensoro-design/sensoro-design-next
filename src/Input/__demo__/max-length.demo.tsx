/**
 * title: 字数统计
 * desc:
 *  设置 `maxLength` 可以限制最大字数，配合 `showWordLimit` 可以显示字数统计。
 *  设置 `maxLength.errorOnly` 后不会限制用户输入字数，但是超过最大字数会展示错误状态。
 *  值得注意的是，如果配置了 `showWordLimit`，那么你将不能使用 `suffix`。
 */
import { Input, Space } from '@sensoro-design/react';

export default () => {
  return (
    <Space direction="vertical">
      <div>
        <Input
          maxLength={10}
          showWordLimit
          placeholder="Please enter no more than 10 letters"
          style={{ width: 300, marginBottom: 24, marginRight: 20 }}
        />
        <Input.TextArea
          maxLength={50}
          showWordLimit
          placeholder="Please enter no more than 50 letters"
          wrapperStyle={{ width: 300, marginBottom: 24 }}
        />
      </div>

      <div>
        <Input
          maxLength={{ length: 10, errorOnly: true }}
          showWordLimit
          defaultValue="More than 10 letters will be error"
          style={{ width: 300, marginBottom: 24, marginRight: 20 }}
        />
        <Input.TextArea
          maxLength={{ length: 50, errorOnly: true }}
          showWordLimit
          placeholder="More than 50 letters will be error"
          wrapperStyle={{ width: 300, marginBottom: 24 }}
        />
      </div>
    </Space>
  )
}
