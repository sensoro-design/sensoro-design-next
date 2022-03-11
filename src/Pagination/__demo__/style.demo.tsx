/**
 * title: 样式定制
 * desc: 可以通过样式定制得到不同的视觉风格。
 */
import { Pagination } from '@sensoro-design/react';

export default () => {
  return (
    <div>
      <Pagination
        total={200}
        style={{ marginBottom: 20 }}
        pageItemStyle={{ background: 'var(--color-bg-2)', marginRight: 0 }}
        activePageItemStyle={{ background: 'var(--color-fill-2)' }}
      />
      <Pagination
        total={200}
        pageItemStyle={{ background: 'var(--color-bg-2)' }}
        activePageItemStyle={{ background: 'var(--color-fill-2)' }}
      />
    </div>
  )
}
