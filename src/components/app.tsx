import React, {useEffect} from 'react';
import {Layout} from "antd";
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

  console.log(games);

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <Layout className={'layout'}>
      <HeaderMenu/>
      <Routes>
        <Route path={'/'} element={<MainContent gameData={games}/>}/>
        <Route path={'/form'} element={<GameForm />}/>
      </Routes>
    </Layout>
  );
};

export default App;
