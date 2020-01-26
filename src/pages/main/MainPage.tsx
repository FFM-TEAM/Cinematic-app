import * as React from 'react';
import MainTemplate from '../../components/main/MainTemplate';
import TrendPost from '../../containers/main/TrendPost';
export interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = props => {
  return (
    <MainTemplate>
      <MainTemplate.Left>회원정보</MainTemplate.Left>
      <MainTemplate.Main>
        <TrendPost />
      </MainTemplate.Main>
      <MainTemplate.Right>오른쪽</MainTemplate.Right>
    </MainTemplate>
  );
};

export default MainPage;
