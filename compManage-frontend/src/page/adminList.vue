<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div v-if="isSuper" class="table_container">
            <el-table
                :data="tableData"
                style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column
                    prop="id"
                    label="id"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="active"
                    label="已激活"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="isSuper"
                    label="超级管理员"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="pass"
                    label="密码"
                    width="220">
                </el-table-column>
                <el-table-column
                    prop="moment"
                    label="申请时间"
                    width="180">
                </el-table-column>

            </el-table>
            <div style="margin-top: 20px">
                <el-button @click="activeAdmin()">激活管理员</el-button>
                <el-button @click="disableAdmin()">禁用管理员</el-button>
                <el-button type="danger" @click="deleteAdmin()">删除管理员</el-button>
            </div>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="20"
                    layout="total, prev, pager, next"
                    :total="count">
                </el-pagination>
            </div>
        </div>
        <div v-else class="table_container">
            功能未开放
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import {adminList, getAdminInfo, adminCount, activeAdmin, disableAdmin, deleteAdmin} from '@/api/getData'

    export default {
        data() {
            return {
                isSuper: false,
                today: new Date(),
                tableData: [],
                currentRow: null,
                multipleSelection: [],
                offset: 0,
                limit: 20,
                count: 0,
                currentPage: 1,
            }
        },
        components: {
            headTop,
        },
        created() {
            if (this.checkIsSuper()) {
                this.initData();
            }

        },
        methods: {
            handleSelectionChange(val) {
                this.multipleSelection = val;
                console.log(' this.multipleSelection', this.multipleSelection);
            },
            // 激活专家
            async activeAdmin() {
                let opArr = [];
                this.multipleSelection.forEach(item => {
                    opArr.push(item.id);
                })
                await activeAdmin({opArr}).then(res => {
                    if (res.code == 1) {
                        this.$notify({
                            title: '激活成功',
                            type: 'success'
                        });
                        this.getAdmin();
                    } else {
                        this.$notify.error({
                            title: '激活失败',
                        });
                    }
                })
            },
            // 见擦汗是否为超级管理员
            async checkIsSuper() {
                try {
                    const res = await getAdminInfo()
                    if (res.status == 1) {
                        if (res.data.isSuper) {
                            this.isSuper = res.data.isSuper;
                            return true;
                        }
                        return;

                    } else {
                        throw new Error(res.type)
                    }
                } catch (err) {
                }
            },
            // 禁用专家
            async disableAdmin() {
                let opArr = [];
                this.multipleSelection.forEach(item => {
                    opArr.push(item.id);
                })
                await disableAdmin({opArr}).then(res => {
                    if (res.code == 1) {
                        this.$notify({
                            title: '禁用成功',
                            type: 'success'
                        });
                        this.getAdmin();
                    } else {
                        this.$notify.error({
                            title: '禁用失败',
                        });
                    }
                })
            },
            //删除专家
            async deleteAdmin() {
                let opArr = [];
                this.multipleSelection.forEach(item => {
                    opArr.push(item.id);
                })
                await deleteAdmin({opArr}).then(res => {
                    if (res.code == 1) {
                        this.$notify({
                            title: '删除成功',
                            type: 'success'
                        });
                        this.getAdmin();
                    } else {
                        this.$notify.error({
                            title: '删除错误',
                        });
                    }
                })
            },
            async initData() {
                try {
                    const countData = await adminCount();
                    if (countData.status == 1) {
                        this.count = countData.count;
                    } else {
                        throw new Error('获取数据失败');
                    }
                    this.getAdmin();
                } catch (err) {
                    console.log('获取数据失败', err);
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1) * this.limit;
                this.getAdmin()
            },
            async getAdmin() {
                try {
                    const res = await adminList({offset: this.offset, limit: this.limit});
                    if (res.status == 1) {
                        this.tableData = res.data;
                        // res.data.forEach(item => {
                        // 	const tableItem = {
                        // 		create_time: item.create_time,
                        //         user_name: item.user_name,
                        //         admin: item.admin,
                        //         city: item.city,
                        // 	}
                        // 	this.tableData.push(tableItem)
                        // })
                    } else {
                        throw new Error(res.message)
                    }
                } catch (err) {
                    console.log('获取数据失败', err);
                }
            }
        },
    }
</script>

<style lang="less">
    @import '../style/mixin';

    .table_container {
        margin: 30px;
    }
</style>


