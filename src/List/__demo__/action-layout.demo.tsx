
/**
 * title: 竖排列表样式
 * desc: 这是一个包括分页、右侧内容、下方列表操作的示例。
 */
import { List, Avatar } from '@sensoro-design/react';
import { IconHeart, IconMessage, IconStar } from '@sensoro-design/react/icon';
import './styles.less';

const names = ['Socrates', 'Balzac', 'Plato'];

const avatarSrc = [
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp',
];

const imageSrc = [
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/29c1f9d7d17c503c5d7bf4e538cb7c4f.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/04d7bc31dd67dcdf380bc3f6aa07599f.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/1f61854a849a076318ed527c8fca1bbf.png~tplv-uwbnlip3yd-webp.webp',
];

const dataSource = new Array(15).fill(null).map((_, index) => {
  return {
    index: index,
    avatar: avatarSrc[index % avatarSrc.length],
    title: names[index % names.length],
    description:
      'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China. ByteDance has products such as TikTok, Toutiao, volcano video and Douyin (the Chinese version of TikTok).',
    imageSrc: imageSrc[index % imageSrc.length],
  };
});

export default () => {
  return (
    <List
    className="list-demo-action-layout"
    wrapperStyle={{ maxWidth: 830 }}
    bordered={false}
    pagination={{
      pageSize: 3,
    }}
    dataSource={dataSource}
    render={(item, index) => (
      <List.Item
        key={index}
        style={{ padding: '20px 0', borderBottom: '1px solid var(--color-fill-3)' }}
        actionLayout="vertical"
        actions={[
          <span key={1}>
            <IconHeart />
            {83}
          </span>,
          <span key={2}>
            <IconStar />
            {item.index}
          </span>,
          <span key={3}>
            <IconMessage />
            Reply
          </span>,
        ]}
        extra={
          <div className="image-area">
            <img alt="arcodesign" src={item.imageSrc} />
          </div>
        }
      >
        <List.Item.Meta
          avatar={
            <Avatar shape="square">
              <img alt="avatar" src={`${item.avatar}`} />
            </Avatar>
          }
          title={item.title}
          description={item.description}
        />
      </List.Item>
    )}
  />
  )
}
