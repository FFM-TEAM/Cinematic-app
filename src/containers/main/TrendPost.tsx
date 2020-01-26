import * as React from 'react';
import PostCardList from '../../components/common/PostCardList';

export interface TrendPostProps {}

const TrendPost: React.FC<TrendPostProps> = props => {
  return <PostCardList />;
};

export default TrendPost;
