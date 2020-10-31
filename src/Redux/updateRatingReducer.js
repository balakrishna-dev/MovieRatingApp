import movieList from '../MovieData'

const initialState= () => movieList
 const updateRatingReducer = (state=initialState , action) => {
    switch (action.type) {
        case "UPDATE_RATING":
            return {
                type: action.type,
             movieList: action.payLoad
            }
    }
    return state;
}

export default updateRatingReducer