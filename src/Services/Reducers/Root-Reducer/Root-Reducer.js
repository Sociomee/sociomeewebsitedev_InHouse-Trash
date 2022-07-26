import { combineReducers } from 'redux';
import getAllGroupCategory from '../getAllGroupCategory';
import getAllUserPosts from '../getAllUserPosts'
import getAllPostsByUserId from '../getAllPostsByUserId'
import uploadFileReducer from '../uploadFileReducer'
import getAllReactionsReducer from '../getAllReactionsReducer'
import getUserProfileByUserIdReducer from '../getUserProfileByUserIdReducer'
import getArticleCategoryReducer from '../getArticleCategoryReducer'
import postSavedReducer from '../postSavedReducer'
import getUserSubModulesReducer from '../getUsersSubModulesReducer'
import getEventCategoryReducer from '../getEventCategoryReducer'

const rootReducer = combineReducers({
    getAllGroupCategoryData : getAllGroupCategory,
    getAllUserPostsData : getAllUserPosts,
    getAllPostsByUserIdData : getAllPostsByUserId,
    uploadFileData : uploadFileReducer,
    getAllReactionsData : getAllReactionsReducer,
    getUserProfileByUserIdData : getUserProfileByUserIdReducer,
    getArticleCategoryData : getArticleCategoryReducer,
    postSavedData : postSavedReducer,
    getUserSubModulesData : getUserSubModulesReducer,
    getEventCategoryData : getEventCategoryReducer,

});

export default rootReducer;