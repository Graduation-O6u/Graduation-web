/***************Server**************** */
export const SERVER_LINK =
  "https://graduation-backend-production-f50a.up.railway.app";
// export const SERVER_LINK = "http://127.0.0.1:4001";

/****************Auth**************** */
export const SIGN_IN_LINK = `${SERVER_LINK}/auth/signin`;
export const SIGN_UP_LINK = `${SERVER_LINK}/auth/signup`;
export const FORGET_PASSWORD_LINK = `${SERVER_LINK}/auth/forgetPassword`;
export const RESET_PASSWORD_LINK = `${SERVER_LINK}/auth/reset-password`;
export const CHANGE_PASSWORD_LINK = `${SERVER_LINK}/auth/change-password`;
export const VERIFY_EMAIL_LINK = `${SERVER_LINK}/auth/verify-email`;
export const GOOGLE_LINK = `${SERVER_LINK}/auth/google`;
export const LOGOUT_LINK = `${SERVER_LINK}/auth/logout`;

/****************Default**************** */
export const UPLOAD_LINK = `${SERVER_LINK}/upload/file`;
export const SEARCH_USER = `${SERVER_LINK}/user/search`;

/*************** User ********************/
export const PROFILE_DATA_URL = `${SERVER_LINK}/user`;
export const CHANGE_PROFILE_URL = `${SERVER_LINK}/user/profileImage`;
export const CHANGE_BACKGROUND_URL = `${SERVER_LINK}/user/backGroundImage`;

/***************  JObs ********************/
export const GET_JOB_URL = `${SERVER_LINK}/job`;

export const APPLAY_JOB_URL = `${SERVER_LINK}/job`;
export const Job_DATA_URL = `${SERVER_LINK}/job/all`;
export const Job_SEARCH_URL = `${SERVER_LINK}/job/search`;

/***************  Market ********************/
export const Market_DATA_URL = `${SERVER_LINK}/job`;

/***************  FalterTitle ********************/
export const Title_DATA_URL = `${SERVER_LINK}/auth/jobs`;
export const Cite_DATA_URL = `${SERVER_LINK}/auth/cities`;

/***************  Company ********************/
export const COMPANY_PROFILE_URL = `${SERVER_LINK}/user/`;
export const UPDATE_COMPANY_PROFILE_URL = `${SERVER_LINK}/user/company`;

export const COMPANY_SIGNUP_URL = `${SERVER_LINK}/auth/signup/company`;

/***************  Notifications ********************/
export const NOTIFICATIONS_URL = `${SERVER_LINK}/notification/all`;
export const UNREADNUMBER_URL = `${SERVER_LINK}/notification/unReadNumber`;

/***************  Meeting ********************/
export const Meeting_DATA_URL = `${SERVER_LINK}/meeting/all`;
export const Send_Meeting_DATA_URL = `${SERVER_LINK}/meeting`;
