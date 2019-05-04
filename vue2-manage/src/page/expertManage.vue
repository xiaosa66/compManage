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
                    property="expert_id"
                    label="专家ID"
                    width="220">
                </el-table-column>
                <el-table-column
                    property="identity"
                    label="专家身份"
                    width="220">
                </el-table-column>
                <el-table-column
                    property="moment"
                    label="注册日期"
                    width="220">
                </el-table-column>
                <el-table-column
                    property="expert_class"
                    label="专家等级"
                    width="220">
                </el-table-column>
                <el-table-column
                    property="expert_info"
                    label="专家信息"
                    width="220">
                </el-table-column>
                <el-table-column
                    property="expert_name"
                    label="专家名称"
                    width="220">
                </el-table-column>
                <el-table-column
                    property="school_id"
                    label="所属学校">
                </el-table-column>
            </el-table>

            <div style="margin-top: 20px">
                <el-button @click="toggleForm()">添加专家</el-button>
                <el-button @click="deleteExpert()">删除选中专家</el-button>
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
                <el-form-item label="专家名称">
                    <el-input v-model.lazy="form.expert_name"></el-input>
                </el-form-item>
                <el-form-item label="专家信息">
                    <el-input v-model.lazy="form.expert_info"></el-input>
                </el-form-item>
                <el-form-item label="专家类别">
                    <el-select v-model.lazy="form.identity" placeholder="请选择专家身份">
                        <el-option label="校园专家" value="0"></el-option>
                        <el-option label="企业专家" value="1"></el-option>
                    </el-select>
                    <el-button @click="confirmdentity()">确定</el-button>
                    <el-select v-if="schoolList.length>0" v-model.lazy="form.school_id" placeholder="请选择专家所在学校">
                        <el-option v-for="item in schoolList" :label="item.school_name"
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
    import {getExpertCount, postExpert, getExpertList, getSchoolList, deleteExpert} from '@/api/getData'

    export default {
        components: {
            headTop
        },
        data() {
            return {
                tableData: [],
                multipleSelection: [],
                showAddForm: false,
                currentPage: '',
                offset: '',
                form: {
                    expert_name: '', expert_info: '',
                    school_id: '',
                    identity: ''
                },
                count: 0,
                currentPage: 0,
                schoolList: []
            }
        },
        created() {
            this.returnExpertList();
        },
        methods: {
            async toggleForm() {

                this.showAddForm = !this.showAddForm;
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
                console.log('this.form', this.form);
                await postExpert(this.form).then(res => {
                    if (res.code = 1) {
                        this.toggleForm();
                        this.returnExpertList();
                    }
                })


            },
            async confirmdentity() {
                console.log('this.form.identity ', this.form.identity == 0);
                if (this.form.identity == 0 && this.schoolList.length == 0) {
                    await getSchoolList().then(res => {
                        this.schoolList = res.data;
                    })
                }


            },
            async deleteExpert() {
                let delArr = [];
                this.multipleSelection.forEach(item => {
                    delArr.push(item.expert_id);
                })
                await deleteExpert(delArr).then(res => {
                    if (res.code == 1) {
                        this.$notify({
                            title: '删除成功',
                            type: 'success'
                        });
                        this.returnExpertList();
                    } else {
                        this.$notify.error({
                            title: '删除错误',
                            message: '请检查该专家是否存在'
                        });
                    }
                })
            },


            async deleteSchool() {
                let deleteSchoolArr = [];
                this.multipleSelection.forEach(item => {
                    deleteSchoolArr.push(item.school_id);
                })
                console.log('deleteSchool:', deleteSchoolArr);
                await deleteSchool(deleteSchoolArr).then(res => {
                    if (res.code == 1) {
                        this.$notify({
                            title: '删除成功',
                            type: 'success'
                        });
                        this.returnSchoolList();
                    } else {
                        this.$notify.error({
                            title: '删除错误',
                            message: '请检查该队伍是否存在'
                        });
                    }
                })
            },


            async postExpert() {
                return await postExpert(this.form);
                console.log('postExpert:', result);
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
            async returnExpertList() {
                await getExpertList().then(res => {
                    let data = res.data;
                    data.forEach(function (item) {
                        if (item.identity == 1) {
                            item.identity = '企业专家'
                        } else {
                            item.identity = '校园专家'
                        }
                    })
                    this.tableData = data;
                })

                ;
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
