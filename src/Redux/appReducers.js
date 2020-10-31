import updateRating from './updateRatingReducer'
import { combineReducers } from 'redux';
import movieList from '../MovieData'

const appReducerList = combineReducers({
     updateRating : updateRating
}
)

const appReducers = (state, action) =>  {
return appReducerList(state,action)
}

export default appReducers;