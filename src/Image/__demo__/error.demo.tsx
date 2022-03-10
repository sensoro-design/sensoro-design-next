
/**
 * title: 错误状态
 * desc: 当加载图片失败的时候显示的内容。
 */
import { Image, Space } from '@sensoro-design/react';

export default () => {
  return <Space size={20}>
    <Image
      width={400}
      height={300}
      src="some-error.png"
    />
    <Image
      width={400}
      height={300}
      src="some-error.png"
      alt="This is a picture of humans eating ice cream. The humans on the screen are very happy just now. The ice cream is green, it seems to be flavored with matcha. The gender of the human is unknown. It has very long hair and the human hair is brown."
    />
  </Space>
}
