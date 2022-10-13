import { combineReducers } from 'redux';
// Social Feed
import getAllUserPosts from '../SocialFeed/getAllUserPosts'
import getAllPostsByUserId from '../SocialFeed/getAllPostsByUserId'
import uploadFileReducer from '../SocialFeed/uploadFileReducer'
import getAllReactionsReducer from '../SocialFeed/getAllReactionsReducer'
import getUserProfileByUserIdReducer from '../UserProfile/getUserProfileByUserIdReducer'
import getArticleCategoryReducer from '../SocialFeed/getArticleCategoryReducer'
import postSavedReducer from '../SocialFeed/postSavedReducer'
import getUserSubModulesReducer from '../UserProfile/getUsersSubModulesReducer'
import getEventCategoryReducer from '../SocialFeed/getEventCategoryReducer'
import getAlertDataReducer from '../SocialFeed/getAlertDataReducer'
import getColorsReducer from '../SocialFeed/getColorsReducer'
import getAllCommentsReducer from '../SocialFeed/getAllCommentsReducer'


// bizPage
import bizCategoryReducer from '../BizPage/bizCategoryReducer'
import bizSubCategoryReducer from '../BizPage/bizSubCategoryReducer'
import bizPageReducer from '../BizPage/bizPageReducer'

// USER PROFILE
import getAllInterestsReducer from '../UserProfile/getAllInterestsReducer'
import getAllSportsReducer from '../UserProfile/getAllSportsReducer'
import suggestedUsersReducer from '../UserProfile/suggestedUsersReducer'
import userFollowingRequestsReducer from '../UserProfile/userFollowingRequestsReducer'

// GROUP 
import getAllGroupCategory from '../getAllGroupCategory';
import getAllUserGroups from '../getAllUserGroups'
import getAllGroupsByUserId from '../getAllGroupsByUserId'
import getGroupAdministraterReducer from '../getGroupAdministraterReducer'

// COMMONE
import TrendingHashtagReducer from '../Common/TrendingHashtagReducer'
import GetUserFollowersReducer from '../Common/GetUserFollowersReducer'
import GetUserFollowingReducer from '../Common/GetUserFollowingReducer'
import GetUserConnectionReducer from '../Common/GetUserConnectionReducer'

// AD MANGER
import getAllAdByStatusReducer from '../AdManager/getAllAdByStatusReducer'
import getTypeReducer from '../AdManager/getTypeReducer'



const rootReducer = combineReducers({
    // Social Feed
    getAllUserPostsData: getAllUserPosts,
    getAllPostsByUserIdData: getAllPostsByUserId,
    uploadFileData: uploadFileReducer,
    getAllReactionsData: getAllReactionsReducer,
    getUserProfileByUserIdData: getUserProfileByUserIdReducer,
    getArticleCategoryData: getArticleCategoryReducer,
    postSavedData: postSavedReducer,
    getUserSubModulesData: getUserSubModulesReducer,
    getEventCategoryData: getEventCategoryReducer,
    getAlertData: getAlertDataReducer,
    getColorsData: getColorsReducer,
    getAllCommentsData: getAllCommentsReducer,

    // Biz Page
    bizCategoryData: bizCategoryReducer,
    bizSubCategoryData: bizSubCategoryReducer,
    bizPageData: bizPageReducer,

    // USER PROFILE
    getAllInterestsData: getAllInterestsReducer,
    getAllSportsData: getAllSportsReducer,
    suggestedUsersData: suggestedUsersReducer,
    userFollowingRequestsData: userFollowingRequestsReducer,

    // GROUP
    getAllUserGroupsData: getAllUserGroups,
    getAllGroupsByUserData: getAllGroupsByUserId,
    getAllGroupCategoryData: getAllGroupCategory,
    getGroupAdministraterData: getGroupAdministraterReducer,

    //  COMMON
    TrendingHashtagData: TrendingHashtagReducer, 
    GetUserFollowersData: GetUserFollowersReducer, 
    GetUserFollowingData: GetUserFollowingReducer,
    GetUserConnectionData: GetUserConnectionReducer,
    
    // AD MANAGER
    getAllAdByStatusData: getAllAdByStatusReducer,
    getTypeData: getTypeReducer,


});

export default rootReducer;