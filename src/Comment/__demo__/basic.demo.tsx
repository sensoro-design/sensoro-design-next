
/**
 * title: 基础用法
 * desc: 一个基本的评论组件，带有作者、头像、时间和操作。
 */
import React from 'react';
import { Comment, Avatar  } from '@sensoro-design/react';
import { IconHeart, IconMessage, IconStar, IconStarFill, IconHeartFill } from '@sensoro-design/react/icon';

export default () => {
  const [like, setLike] = React.useState();
  const [star, setStar] = React.useState();

  const actions = [
    <span
      className="custom-comment-action"
      key="heart"
      onClick={() => setLike(!like) }
    >
      { like ? <IconHeartFill style={{color: '#f53f3f'}} /> : <IconHeart  />}
      {' '}{83 + (like ? 1 : 0)}
    </span>,
    <span
      className="custom-comment-action"
      key="star"
      onClick={() => setStar(!star) }
    >
      {star ? <IconStarFill style={{color: '#ffb400'}} /> : <IconStar  />}
      {' '}{3 + (star ? 1 : 0)}
    </span>,
    <span className="custom-comment-action" key="reply"><IconMessage /> Reply</span>,
  ];

  return (
    <Comment
      actions={actions}
      author="Socrates"
      avatar={
        <Avatar>
          <img alt='avatar' src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp' />
        </Avatar>
      }
      content={
        <div>
          Comment body content.
        </div>
      }
      datetime="1 hour"
    />
  );
};
