import * as React from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';
const PostCardListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
`;

const Title = styled.span`
  font-size: 1rem;
  margin-left: 64px;
  font-weight: 600;
  font-family: 'Fira Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`;

export interface MovieData {
  results: Result[];
  page: number;
  total_results: number;
  dates: Dates;
  total_pages: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface Result {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: OriginalLanguage;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

export enum OriginalLanguage {
  En = 'en',
  Fr = 'fr',
  It = 'it',
  Ko = 'ko'
}

export interface PostCardListProps {
  movieData: Result[];
}

const PostCardList: React.FC<PostCardListProps> = ({ movieData }) => {
  if (movieData) {
    console.log(movieData[0]);
  }

  return (
    <>
      <Title>현재상영중</Title>
      <PostCardListBlock>
        {movieData.map((movie: any, index: number) => (
          <PostCard data={movie} number={index} key={index} />
        ))}
      </PostCardListBlock>
    </>
  );
};

export default PostCardList;
