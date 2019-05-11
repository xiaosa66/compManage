<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container" v-show="!showAddForm">
            <el-table
                ref="multipleTable"
                :data="tableData"
                highlight-current-row
                style="width: 100%"
                @selection-change="handleSelectionChange"
                @row-click="openDetails"
            >

                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column
                    type="index"
                    width="100">
                </el-table-column>
                <el-table-column
                    property="team_id"
                    label="队伍ID"
                    width="220">
                </el-table-column>
                <el-table-column
                    property="moment"
                    label="注册日期"
                    width="220">
                </el-table-column>
                <el-table-column
                    property="team_name"
                    label="队伍名称"
                    width="220">
                </el-table-column>
                <el-table-column
                    property="school_id"
                    label="学校id">
                </el-table-column>
            </el-table>

            <div style="margin-top: 20px">
                <el-button @click="toggleForm()">添加队伍</el-button>
                <el-button @click="deleteTeam()">删除选中队伍</el-button>
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
        <div class="add_form" v-show="showAddForm">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="队伍名称">
                    <el-input v-model="form.team_name"></el-input>
                </el-form-item>
                <el-form-item label="学校名称">
                    <el-select v-model="form.school_id" placeholder="请选择队伍所在学校">
                        <el-option v-for="(item,index) in schoolList" :label="item.school_name"
                                   :value="item.school_id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button @click="toggleForm">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import {getTeamList, deleteTeam} from '@/api/getData'
    import {postTeam, getSchoolList} from "../api/getData";

    export default {
        name: "teamManage",
        components: {
            headTop
        },
        data() {
            return {
                currentPage: 0,
                count: 20,
                tableData: [],
                multipleSelection: [],
                showAddForm: false,
                schoolList: [],
                form: {
                    school_id: '',
                    team_name: '',
                }
            }
        },
        created() {
            this.pageGetTeamList();
        },
        methods: {
            async toggleForm() {
                if (this.schoolList.length == 0) {
                    await getSchoolList().then(res => {
                        this.schoolList = res.data;
                    })
                }
                this.showAddForm = !this.showAddForm;

            },
            openDetails(row) {
                // this.$router.go({
                //     path: '/memberManage',
                //     params: {
                //         team_id: row.team_id
                //     }
                // })
                this.$router.push({ path: '/memberManage', query: { team_id: row.team_id}})

            },
            async onSubmit() {
                const page = this;
                let isFull = true;
                let form = this.form;
                for (let i in form) {
                    if (form[i] == null || form[i] == '') {
                        isFull = false;
                    }
                }
                if (!isFull) {
                    page.$alert('请填写所有选项', '提示', {
                        confirmButtonText: '确定',
                    });
                    return;
                }
                // todo ajax 增加队伍
                await postTeam(this.form).then(res => {
                    if (res.code = 1) {
                        this.showAddForm = false;
                        this.pageGetTeamList();
                    }
                })

            },
            async deleteTeam() {
                let deleteTeamArr = [];
                this.multipleSelection.forEach(item => {
                    deleteTeamArr.push(item.team_id);
                })
                await deleteTeam(deleteTeamArr).then(res => {
                    if (res.code == 1) {
                        this.$notify({
                            title: '删除成功',
                            type: 'success'
                        });
                        this.pageGetTeamList();
                    } else {
                        this.$notify.error({
                            title: '删除错误',
                            message: '请检查该队伍是否存在'
                        });
                    }
                })

            },

            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1) * this.limit;
                this.getUsers()
            },
            async pageGetTeamList() {
                const PostData = await getTeamList();
                this.tableData = PostData.data;
            }
        },
    }
</script>

<style scoped>

    .add_form {
        position: absolute;
        background: white;
        -moz-box-shadow: 2px 2px 5px #333333;
        -webkit-box-shadow: 2px 2px 5px #333333;
        box-shadow: 2px 2px 5px #333333;
        border-radius: 10px;
        padding: 8px;
        top: 10%;
        left: 20%;
        min-width: 70%;
        height: 80%;
        z-index: 99;
    }
</style>
