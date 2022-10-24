export interface GameState {
  games: any[];
  loading: boolean;
  error: null | string;
}
export enum GameActionTypes {
  FETCH_GAMES = 'FETCH_GAMES',
  FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS',
  FETCH_GAMES_ERROR = 'FETCH_GAMES_FETCH_USERS_ERROR',
}
interface FetchGamesAction {
  type: GameActionTypes.FETCH_GAMES;
}
interface FetchGamesSuccessAction {
  type: GameActionTypes.FETCH_GAMES_SUCCESS;
  payload: any[]
}
interface FetchGamesErrorAction {
  type: GameActionTypes.FETCH_GAMES_ERROR;
  payload: string;
}
export type GameAction = FetchGamesAction | FetchGamesErrorAction | FetchGamesSuccessAction