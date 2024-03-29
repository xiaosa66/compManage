import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const adminList = r => require.ensure([], () => r(require('@/page/adminList')), 'adminList');
const uploadImg = r => require.ensure([], () => r(require('@/page/uploadImg')), 'uploadImg');
const vueEdit = r => require.ensure([], () => r(require('@/page/vueEdit')), 'vueEdit');
const adminSet = r => require.ensure([], () => r(require('@/page/adminSet')), 'adminSet');
const sendMessage = r => require.ensure([], () => r(require('@/page/sendMessage')), 'sendMessage');
const countyManage = r => require.ensure([], () => r(require('@/page/countyManage')), 'countyManage');
const teamManage = r => require.ensure([], () => r(require('@/page/teamManage')), 'teamManage');
const expertManage = r => require.ensure([], () => r(require('@/page/expertManage')), 'expertManage');
const schoolManage = r => require.ensure([], () => r(require('@/page/schoolManage')), 'schoolManage');
const memberManage = r => require.ensure([], () => r(require('@/page/memberManage')), 'memberManage');
const groupManage = r => require.ensure([], () => r(require('@/page/groupManage')), 'groupManage');


const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		},{
			path: '/memberManage',
			component: memberManage,
			meta: ['队伍管理', '成员管理'],
		},
            {
            path: '/countyManage',
            component: countyManage,
            meta: ['队伍管理', '省市管理'],
        },  {
            path: '/groupManage',
            component: groupManage,
            meta: ['评审管理', '小组管理'],
        },            {
            path: '/teamManage',
            component: teamManage,
            meta: ['队伍管理', '队伍管理'],
        },          {
            path: '/schoolManage',
            component: schoolManage,
            meta: ['队伍管理', '高校管理'],
        },            {
            path: '/expertManage',
            component: expertManage,
            meta: ['专家管理', '专家管理'],
        },
            {
			path: '/adminList',
			component: adminList,
			meta: ['数据管理', '管理员列表'],
		},{
			path: '/uploadImg',
			component: uploadImg,
			meta: ['文本编辑', 'MarkDown'],
		},{
			path: '/vueEdit',
			component: vueEdit,
			meta: ['编辑', '文本编辑'],
		},{
			path: '/adminSet',
			component: adminSet,
			meta: ['设置', '管理员设置'],
		},{
			path: '/sendMessage',
			component: sendMessage,
			meta: ['设置', '发送通知'],
		}]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
