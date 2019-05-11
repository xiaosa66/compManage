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
                    property="student_id"
                    label="成员 ID"
                    width="220">
                </el-table-column>
                <el-table-column
                    property="moment"
                    label="注册日期"
                    width="220">
                </el-table-column>
                <el-table-column
                    property="student_name"
                    label="成员姓名"
                    width="220">
                </el-table-column>
                <el-table-column
                    property="student_school_id"
                    label="成员学号">
                </el-table-column>
                <el-table-column
                    property="student_sex"
                    label="成员性别">
                </el-table-column>
            </el-table>

            <div style="margin-top: 20px">
                <el-button @click="toggleForm()">添加成员</el-button>
                <el-button @click="deleteMember()">删除选中成员</el-button>
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
                <el-form-item label="成员姓名">
                    <el-input v-model="form.student_name"></el-input>
                </el-form-item>
                <el-form-item label="成员学号">
                    <el-input v-model="form.student_school_id"></el-input>
                </el-form-item>
                <el-form-item label="成员性别">
                    <el-select v-model="form.student_sex" placeholder="请选择成员性别">
                        <el-option  label="男" value="男"></el-option>
                        <el-option  label="女" value="女"></el-option>
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
    import {getTeamMember,postTeamMember,delTeamMember} from '@/api/getData'

    export default {
        name: "schoolManage",
        components: {
            headTop
        },
        data() {
            return {
                tableData: [],
                multipleSelection: [],
                showAddForm: false,
                form: {
                    team_id:'',
                    student_school_id: '',
                    student_name: '',
                    student_sex: ''
                },
                provinceList: [],
                cityList: [],
                count: 0,
                currentPage: 0
            }
        },
        created() {
            const team_id = this.$route.query.team_id;
            this.form.team_id = team_id;
            this.queryMemberList(team_id);
        },
        methods: {
            async toggleForm() {
                this.showAddForm = !this.showAddForm;
            },
            async queryMemberList(team_id) {
                console.log('queryMemberList');
                let postData = {team_id};
                await getTeamMember(postData).then(res => {
                    this.tableData = res.data;
                })
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
                await postTeamMember(this.form).then(res => {
                    if (res.code = 1) {
                        this.showAddForm = false;
                        this.$notify({
                            title: '增加成功',
                            type: 'success'
                        });
                    }else{
                        this.$notify.error({
                            title: '增加失败 ',
                        });
                    }
                })

            },
            async deleteMember() {
                let deleteSchoolArr = [];
                this.multipleSelection.forEach(item => {
                    deleteSchoolArr.push(item.student_id);
                })
                await delTeamMember(deleteSchoolArr).then(res=>{
                    if (res.code == 1) {
                        this.$notify({
                            title: '删除成功',
                            type: 'success'
                        });
                        this.returnSchoolList();
                    } else {
                        this.$notify.error({
                            title: '删除错误',
                            message: '请检查该ID是否存在'
                        });
                    }                })
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
