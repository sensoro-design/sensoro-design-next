/**
 * title: 滚动容器
 * desc:
 * 用 `target` 设置需要监听其滚动事件的元素，默认为 `window`。
 * `target` 指定为非 window 容器时，可能会出现 `target` 外层元素滚动，固钉元素跑出滚动容器的问题。
 * 这个时候可以通过传入 `targetContainer` 设置 `target` 外层的滚动元素。
 * `Affix` 会监听该元素的滚动事件来实时更新滚钉元素的位置。
 * 也可以在业务代码中自己监听 `target` 外层滚动元素的 `scroll` 事件，并调用 `this.affixRef.updatePosition()` 去更新固钉的位置。
 */
import React, { useRef } from 'react';
import { Affix, Button } from '@sensoro-design/react';

export default () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id="container"
      style={{ height: 200, overflow: 'auto' }}
      ref={containerRef}
    >
      <div
        style={{
          height: 400,
          backgroundColor: 'var(--color-fill-2)',
          backgroundImage: `
          linear-gradient(45deg, var(--color-bg-2) 25%, transparent 0, transparent 75%, var(--color-bg-2) 0),
          linear-gradient(45deg, var(--color-bg-2) 25%, transparent 0, transparent 75%, var(--color-bg-2) 0)`,
          backgroundPosition: `0 0, 15px 15px`,
          backgroundSize: `30px 30px`,
          overflow: 'hidden',
        }}
      >
        <Affix
          target={() => containerRef.current}
          offsetTop={20}
          style={{ margin: 40 }}
          targetContainer={() => window}
        >
          <Button type="primary">Affix in scrolling container</Button>
        </Affix>
      </div>
    </div>
  )
}
