import * as React from 'react';
import PostCardList from '../../components/common/PostCardList';
import { moviesApi, kobisApi } from '../../components/api';
import MovieTrailer from '../../components/common/MovieTrailer';

export interface TrendPostProps {}

const TrendPost: React.FC<TrendPostProps> = props => {
  const [listData, setListData] = React.useState<any | null>(null);
  const [boxOffice, setBoxOffice] = React.useState<any | null>(null);
  const onGetReserveList = async () => {
    const {
      data: { results: movies }
    } = await moviesApi.nowPlaying(1);
    setListData(movies);

    // const { data: moviesBoxOffice } = await kobisApi.dailyBoxOffice({
    //   targetDt: '20200126'
    // });

    const { data: weeklyMoviesBoxOffice } = await kobisApi.weeklyBoxOffice({
      targetDt: '20200126'
    });
    setBoxOffice(weeklyMoviesBoxOffice.boxOfficeResult);
  };
  React.useEffect(() => {
    onGetReserveList();
  }, []);

  if (!listData || !boxOffice) return null;
  console.log(listData);
  console.log(boxOffice);

  return (
    <>
      <MovieTrailer movie={boxOffice.weeklyBoxOfficeList} />
      <PostCardList movieData={listData} />
    </>
  );
};

export default TrendPost;
