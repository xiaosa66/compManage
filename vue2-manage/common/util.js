import {delItem} from '@/api/getData';

const Fn = {
	async commonDelItem(delArr, tableName, that) {
		let postData = {
			delArr,
			tableName
		}
		await delItem(postData).then(res => {
			if (res.code == 1) {
				that.$notify({
					title: '删除成功',
					type: 'success'
				});
				that.pageGetTeamList();
			} else {
				that.$notify.error({
					title: '删除错误',
					message: '请检查该队伍是否存在'
				});
			}
		})

	},
}

module.exports = Fn
