import fetch from '@/config/fetch'

export const login = data => fetch('/admin/login', data, 'POST');

export const signout = () => fetch('/admin/signout');

export const adminList = data => fetch('/admin/all', data);

export const adminCount = () => fetch('/admin/count');

export const getUserList = data => fetch('/user/list', data);

/***************
 *   学校相关
 * ************/
export const getSchoolCount = data => fetch('/schoolCount', data);
export const getSchoolList = data => fetch('/school', data);
export const postSchool = data => fetch('/school', data,'post');
export const deleteSchool = data => fetch('/delSchool', data,'post');


/***************
 *   队伍相关
 * ************/
export const getTeamCount = data => fetch('/teamCount', data);
export const getTeamList = data => fetch('/team', data);
export const postTeam = data => fetch('/team', data,'post');
export const deleteTeam = data => fetch('/delTeam', data, 'post');

/***************
 *   专家相关
 * ************/
export const getExpertCount = data => fetch('/expertCount', data);
export const getExpertList = data => fetch('/expert', data);
export const postExpert = data => fetch('/expert', data,'post');
export const deleteExpert = data => fetch('/delExpert', data, 'post');

/***************
 *   新闻相关
 * ************/
export const getPostCount = data => fetch('/postsCount', data);
export const getPostList = data => fetch('/posts', data);
export const postPosts = data => fetch('/posts', data,'post');
export const deletePosts = data => fetch('/delPosts', data, 'post');

/***************
 *   消息相关
 * ************/
export const getMessageCount = data => fetch('/messageCount', data);
export const getMessageList = data => fetch('/message', data);
export const postMessage = data => fetch('/message', data,'post');
export const deleteMessage = data => fetch('/delMessage', data, 'post');

/***************
 *   小组分配相关
 * **************/

export const allocateExpert = data => fetch('/allocateExpert', data);
export const allocateRival = data => fetch('/allocateRival', data);

/***************
 *   其他相关
 * ************/

export const getUserCount = () => fetch('/user/count');






























/**
 * 获取用户信息
 */

export const getAdminInfo = () => fetch('/admin/info');

/**
 * api请求量
 */

export const apiCount = date => fetch('/statis/api/' + date + '/count');

/**
 * 所有api请求量
 */

export const apiAllCount = () => fetch('/statis/api/count');


/**
 * 所有api请求信息
 */

export const apiAllRecord = () => fetch('/statis/api/all');

/**
 * 用户注册量
 */

export const userCount = date => fetch('/statis/user/' + date + '/count');

/**
 * 某一天订单数量
 */

export const orderCount = date => fetch('/statis/order/' + date + '/count');


/**
 * 某一天管理员注册量
 */

export const adminDayCount = date => fetch('/statis/admin/' + date + '/count');



/**
 * 获取定位城市
 */

export const cityGuess = () => fetch('/v1/cities', {
	type: 'guess'
});

/**
 * 添加商铺
 */

export const addShop = data => fetch('/shopping/addShop', data, 'POST');

/**
 * 获取搜索地址
 */

export const searchplace = (cityid, value) => fetch('/v1/pois', {
	type: 'search',
	city_id: cityid,
	keyword: value
});

/**
 * 获取当前店铺食品种类
 */

export const getCategory = restaurant_id => fetch('/shopping/getcategory/' + restaurant_id);

/**
 * 添加食品种类
 */

export const addCategory = data => fetch('/shopping/addcategory', data, 'POST');


/**
 * 添加食品
 */

export const addFood = data => fetch('/shopping/addfood', data, 'POST');


/**
 * category 种类列表
 */

export const foodCategory = (latitude, longitude) => fetch('/shopping/v2/restaurant/category');

/**
 * 获取餐馆列表
 */

export const getResturants = data => fetch('/shopping/restaurants', data);

/**
 * 获取餐馆详细信息
 */

export const getResturantDetail = restaurant_id => fetch('/shopping/restaurant/' + restaurant_id);

/**
 * 获取餐馆数量
 */

export const getResturantsCount = () => fetch('/shopping/restaurants/count');

/**
 * 更新餐馆信息
 */

export const updateResturant = data => fetch('/shopping/updateshop', data, 'POST');

/**
 * 删除餐馆
 */

export const deleteResturant = restaurant_id => fetch('/shopping/restaurant/' + restaurant_id, {}, 'DELETE');

/**
 * 获取食品列表
 */

export const getFoods = data => fetch('/shopping/v2/foods', data);

/**
 * 获取食品数量
 */

export const getFoodsCount = data => fetch('/shopping/v2/foods/count', data);


/**
 * 获取menu列表
 */

export const getMenu = data => fetch('/shopping/v2/menu', data);

/**
 * 获取menu详情
 */

export const getMenuById = category_id => fetch('/shopping/v2/menu/' + category_id);

/**
 * 更新食品信息
 */

export const updateFood = data => fetch('/shopping/v2/updatefood', data, 'POST');

/**
 * 删除食品
 */

export const deleteFood = food_id => fetch('/shopping/v2/food/' + food_id, {}, 'DELETE');



/**
 * 获取订单列表
 */

export const getOrderList = data => fetch('/bos/orders', data);

/**
 * 获取订单数量
 */

export const getOrderCount = data => fetch('/bos/orders/count', data);

/**
 * 获取用户信息
 */

export const getUserInfo = user_id => fetch('/v1/user/' + user_id);

/**
 * 获取地址信息
 */

export const getAddressById = address_id => fetch('/v1/addresse/' + address_id);

/**
 * 获取用户分布信息
 */

export const getUserCity = () => fetch('/v1/user/city/count');
