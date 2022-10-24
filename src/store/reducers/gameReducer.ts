import {GameAction, GameActionTypes, GameState} from "../../types/game";

const initialState: GameState = {
  games: [],
  loading: false,
  error: null
}

export const gameReducer = (state = initialState, action: GameAction): GameState => {
  switch (action.type) {
    case GameActionTypes.FETCH_GAMES:
      return {loading: true, error: null, games: []}
    case GameActionTypes.FETCH_GAMES_SUCCESS:
      return {loading: false, error: null, games: action.payload}
    case GameActionTypes.FETCH_GAMES_ERROR:
      return {loading: false, error: action.payload, games: []}
    default:
      return state
  }
}