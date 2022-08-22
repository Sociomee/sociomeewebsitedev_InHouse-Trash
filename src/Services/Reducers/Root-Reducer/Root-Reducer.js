import { combineReducers } from 'redux';
import getAllUserPosts from '../getAllUserPosts'
import getAllPostsByUserId from '../getAllPostsByUserId'
import uploadFileReducer from '../uploadFileReducer'
import getAllReactionsReducer from '../getAllReactionsReducer'
import getUserProfileByUserIdReducer from '../UserProfile/getUserProfileByUserIdReducer'
import getArticleCategoryReducer from '../getArticleCategoryReducer'
import postSavedReducer from '../postSavedReducer'
import getUserSubModulesReducer from '../UserProfile/getUsersSubModulesReducer'
import getEventCategoryReducer from '../getEventCategoryReducer'
import getAlertDataReducer from '../getAlertDataReducer'
import bizCategoryReducer from '../bizCategoryReducer'
import bizSubCategoryReducer from '../bizSubCategoryReducer'
import getAllInterestsReducer from '../UserProfile/getAllInterestsReducer'

// GROUP 
import getAllGroupCategory from '../getAllGroupCategory';
import getAllUserGroups from '../getAllUserGroups'
import getAllGroupsByUserId from '../getAllGroupsByUserId'



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
    getAllInterestsData : getAllInterestsReducer,

     // GROUP
     getAllUserGroupsData : getAllUserGroups,
     getAllGroupsByUserData : getAllGroupsByUserId,
     getAllGroupCategoryData : getAllGroupCategory,

});

export default rootReducer;