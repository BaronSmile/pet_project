import {GameAction, GameActionTypes} from "../../types/game";
import {Dispatch} from "redux";
import axios from "axios";

const data = [{
  key: '1',
  date: '24.10.2022',
  hero: 'Axe Lina',
  team: 'Radiant',
  result: 'loss',
  type: 'all pick'
}]

export const fetchUsers = () => {
  return async (dispatch: Dispatch<GameAction>) => {
    try {
      dispatch({type: GameActionTypes.FETCH_GAMES})
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setTimeout(() => {
        dispatch({type: GameActionTypes.FETCH_GAMES_SUCCESS, payload: data})
      }, 500)
    } catch (e) {
      dispatch({
        type: GameActionTypes.FETCH_GAMES_ERROR,
        payload: 'Произошла ошибка при загрузке пользователей'
      })
    }
  }
}