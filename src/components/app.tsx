import React, {useEffect} from 'react';
import {Layout, Spin, Result} from "antd";
import {Routes, Route} from "react-router-dom";

import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creators/game";
import {useActions} from "../hooks/useActions";
import MainContent from "./content";
import HeaderMenu from './header-menu';
import GameForm from "./form";

const App = () => {
  const {error, loading, games} = useTypedSelector(state => state.gameResult)
  const {fetchUsers} = useActions()


  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <Spin size='large' className='spinner' tip="Идет загрузка..."/>
  }
  if (error) {
    return (
      <Result
        status="error"
        title="Error"
        subTitle="Please check and modify the following information before resubmitting."
      >
      </Result>
    )
  }

  return (
    <Layout className={'layout'}>
      <HeaderMenu/>
      <Routes>
        <Route path={'/'} element={<MainContent gameData={games}/>}/>
        <Route path={'/form'} element={<GameForm/>}/>
      </Routes>
    </Layout>
  );
};

export default App;
