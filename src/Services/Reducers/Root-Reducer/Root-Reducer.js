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
import getAlertDataReducer from '../getAlertDataReducer'
import bizCategoryReducer from '../bizCategoryReducer'
import bizSubCategoryReducer from '../bizSubCategoryReducer'

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
    getAlertData : getAlertDataReducer,
    bizCategoryData : bizCategoryReducer,
    bizSubCategoryData : bizSubCategoryReducer,

});

export default rootReducer;