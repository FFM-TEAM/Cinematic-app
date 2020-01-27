import * as React from 'react';
import styled from 'styled-components';
import { MdFavorite } from 'react-icons/md';
import { Result } from './PostCardList';
const PostCardBlock = styled.div`
  width: 197px;
  margin-left: 64px;
  margin-bottom: 1rem;
  font-family: 'Fira Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  .ranking {
    background: #333333;
    &:first-child {
      background: #e71a0f;
    }
    font-size: 1.125rem;
    font-weight: 700;
    text-align: center;
    border: 6px solid black;
  }
  .img-wrapper {
    border: 6px solid black;
    img {
      width: 100%;
      height: 260px;
      display: block;
      object-fit: cover;
      box-shadow: 0px 0 6px rgb(102, 102, 102);
    }
    margin-top: 1rem;
  }

  .content-wrapper {
    font-size: 0.875rem;
    margin-top: 0.5rem;
    .title {
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    .score {
      line-height: 1.5rem;
      display: flex;
      span {
        font-size: 1rem;
      }
    }
  }
  .event-wrapper {
    display: flex;
    justify-content: center;
    justify-items: center;
    svg {
      font-size: 1.5rem;
      color: gray;
    }
    .like-count {
      border: 1px solid gray;
      padding: 0.125rem;
      border-radius: 1rem;
    }
    button {
      margin-left: 1rem;
      color: #e71a0f;
      background: none;
      border: 1px solid #e71a0f;
      border-radius: 1rem;
      justify-content: space-between;
    }
  }
`;
export interface PostCardProps {
  data: Result;
  number: number;
}

const PostCard: React.FC<PostCardProps> = ({ data, number }) => {
  return (
    <PostCardBlock>
      <div className="ranking">No.{number + 1}</div>
      <div className="img-wrapper">
        <img src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} alt="" />
      </div>
      <div className="content-wrapper">
        <div className="title">{data.title}</div>
        <div className="score">
          <div className="kind">예매율</div>
          <div className="advance-rate">38.5% | </div>
          <span>&#127894;</span>
          <div className="great">92%</div>
        </div>
        <strong>2020.01.22 개봉</strong>
        <div className="event-wrapper">
          <MdFavorite />
          <div className="like-count">{data.vote_count}</div>
          <button>예매하기</button>
        </div>
      </div>
    </PostCardBlock>
  );
};

export default PostCard;
