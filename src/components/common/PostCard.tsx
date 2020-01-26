import * as React from 'react';
import styled from 'styled-components';

const PostCardBlock = styled.div`
  width: 197px;
  margin-left: 64px;
  /* background: black; */
  font-family: 'Fira Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  .ranking {
    background: #e71a0f;
    font-size: 1.125rem;
    font-weight: 700;
    text-align: center;
    border: 6px solid black;
  }
  .img-wrapper {
    border: 6px solid black;
    img {
      width: 100%;
      display: block;
      object-fit: cover;
      box-shadow: 0px 0 6px rgb(102, 102, 102);
    }
    margin-top: 1rem;
  }

  .content-wrapper {
    .score {
      display: flex;
    }
  }
`;
export interface PostCardProps {}

const PostCard: React.FC<PostCardProps> = props => {
  return (
    <PostCardBlock>
      <div className="ranking">No.1</div>
      <div className="img-wrapper">
        <img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82999/82999_320.jpg" alt="" />
      </div>
      <div className="content-wrapper">
        <div className="title">해치지않아</div>
        <div className="score">
          <div className="advance-rate">38.5%</div>
          <div className="great">92%</div>
        </div>
        <strong>2020.01.22 개봉</strong>
      </div>
    </PostCardBlock>
  );
};

export default PostCard;
