/**
 * title: 嵌套评论
 * desc: Comments 组件可以嵌套。
 */
import { Comment } from '@sensoro-design/react';
import { IconMessage } from '@sensoro-design/react/icon';
import './styles.less';

export default () => {
  const actions = <span className="custom-comment-action"><IconMessage /> Reply</span>;

  return (
    <Comment
      actions={actions}
      author={'Socrates'}
      avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp"
      content={
        <div>
          Comment body content.
        </div>
      }
      datetime="1 hour"
    >
      <Comment
        actions={actions}
        author="Balzac"
        avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp"
        content={
          <div>
            Comment body content.
          </div>
        }
        datetime='1 hour'
      >
        <Comment
          actions={actions}
          author="Austen"
          avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp"
          content={
            <div> Reply content </div>
          }
          datetime='1 hour'
        />
        <Comment
          actions={actions}
          author="Plato"
          avatar="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          content={
            <div> Reply content </div>
          }
          datetime='1 hour'
        />
      </Comment>
    </Comment>
  );
};
