import * as React from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';
const PostCardListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
`;
export interface PostCardListProps {}

const PostCardList: React.FC<PostCardListProps> = props => {
  return (
    <PostCardListBlock>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </PostCardListBlock>
  );
};

export default PostCardList;
