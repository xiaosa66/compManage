<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container" v-show="!showAddForm">
            <el-table
                ref="multipleTable"
                :data="tableData"
                highlight-current-row
                style="width: 100%" @selection-change="handleSelectionChange">

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
                    property="expert_id"
                    label="专家姓名"
                    width="220">
                </el-table-column>
                <el-table-column
                    property="school_id"
                    label="学校名称">
                </el-table-column>
            </el-table>

            <div style="margin-top: 20px">
                <el-button @click="toggleForm()">添加学校</el-button>
                <el-button @click="deleteTeam()">删除选中学校</el-button>
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
                <el-form-item label="学校区域">
                    <el-select v-model="form.school_id" placeholder="请选择学校名称">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
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

    export default {
        name: "teamManage",
        components: {
            headTop
        },
        data() {
            return {
                tableData: [],
                multipleSelection: [],
                showAddForm: false,
                form: {
                    school_id: '',
                    expert_id: '',
                    team_name: '',
                }
            }
        },
        created() {
            this.pageGetTeamList();
        },
        methods: {
            toggleForm() {
                this.showAddForm = !this.showAddForm;
            },
            onSubmit(e) {
                console.log('submit!', e);
                console.log('submit!', this.form);
            },
            async deleteTeam() {
                let deleteTeamArr = [];
                this.multipleSelection.forEach(item => {
                    deleteTeamArr.push(item.school_id);
                })
                console.log('deleteTeam:', deleteTeamArr);
                const PostData = await deleteTeam(deleteTeamArr);
                console.log(PostData);

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
