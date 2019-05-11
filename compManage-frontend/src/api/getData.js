import fetch from '@/config/fetch'

export const login = data => fetch('/admin/login', data, 'POST');
export const signin = data => fetch('/admin/signin', data, 'POST');
export const signout = () => fetch('/admin/signout');
export const adminList = data => fetch('/admin/all', data);
export const adminCount = () => fetch('/admin/count');

export const getUserList = data => fetch('/user/list', data);
export const activeAdmin = data => fetch('/activeAdmin', data, 'post');
export const disableAdmin = data => fetch('/disableAdmin', data, 'post');
export const deleteAdmin = data => fetch('/deleteAdmin', data, 'post');
export const getAdminInfo = data => fetch('/isSuper', data, 'post');


/***************
 *   学校相关
 * ************/
export const getSchoolCount = data => fetch('/schoolCount', data);
export const getSchoolList = data => fetch('/school', data);
export const postSchool = data => fetch('/school', data, 'post');
export const deleteSchool = data => fetch('/delSchool', data, 'post');

/***************
 *   请求省份,城市列表
 * ************/
export const getProvinceList = data => fetch('/provinceList', data);
export const getCityList = data => fetch('/cityList', data);

/***************
 *   队伍相关
 * ************/
export const getTeamCount = data => fetch('/teamCount', data);
export const getTeamList = data => fetch('/team', data);
export const postTeam = data => fetch('/team', data, 'post');
export const deleteTeam = data => fetch('/delTeam', data, 'post');
export const getTeamMember = data => fetch('/teamMember', data);
export const postTeamMember = data => fetch('/teamMember', data,'post');
export const delTeamMember = data => fetch('/delTeamMember', data,'post');

/***************
 *   专家相关
 * ************/
export const getExpertCount = data => fetch('/expertCount', data);
export const getExpertList = data => fetch('/expert', data);
export const postExpert = data => fetch('/expert', data, 'post');
export const deleteExpert = data => fetch('/delExpert', data, 'post');

/***************
 *   新闻相关
 * ************/
export const getPostCount = data => fetch('/postsCount', data);
export const getPostList = data => fetch('/posts', data);
export const postPosts = data => fetch('/posts', data, 'post');
export const deletePosts = data => fetch('/delPosts', data, 'post');

/***************
 *   消息相关
 * ************/
export const getMessageCount = data => fetch('/messageCount', data);
export const getMessageList = data => fetch('/message', data);
export const postMessage = data => fetch('/message', data, 'post');
export const deleteMessage = data => fetch('/delMessage', data, 'post');

/***************
 *   小组分配相关
 * **************/

export const allocateExpert = data => fetch('/allocateExpert', data, 'post');
export const allocateRival = data => fetch('/allocateRival', data, 'post');
export const autoGetRival = data => fetch('/autoGetRival', data);

/***************
 *   其他相关
 * ************/

export const getUserCount = () => fetch('/user/count');


