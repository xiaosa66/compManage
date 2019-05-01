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
                    property="province_id"
                    label="省份信息">
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
                    <el-input v-model="form.expert_name"></el-input>
                </el-form-item>
                <el-form-item label="专家信息">
                    <el-input v-model="form.expert_info"></el-input>
                </el-form-item>
                <el-form-item label="专家等级">
                    <el-select v-model.lazy="form.expert_class" placeholder="请选择专家等级">
                        <el-option label="省级专家" value="1"></el-option>
                        <el-option label="市级专家" value="2"></el-option>
                        <el-option label="校级专家" value="3"></el-option>
                    </el-select>
                    <el-select v-model.lazy="form.province_id" placeholder="请选择专家省份">
                        <el-option label="省级专家" value="1"></el-option>
                        <el-option label="市级专家" value="2"></el-option>
                        <el-option label="校级专家" value="3"></el-option>
                    </el-select>
                    <el-select v-model.lazy="form.identity" placeholder="请选择专家身份">
                        <el-option label="高校专家" value="campus"></el-option>
                        <el-option label="企业专家" value="company"></el-option>

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
    import {getExpertCount, postExpert, getExpertList, deleteExpert} from '@/api/getData'

    export default {
         components: {
            headTop
        },
        data() {
            return {
                tableData: [],
                multipleSelection: [],
                showAddForm: false,
                currentPage:'',
                offset:'',
                form: {
                    expert_name: '',
                    expert_class: '',
                    province_id:'',
                    identity:''
                }
            }
        },
        created() {
            this.returnExpertList();
        },
        methods: {
            toggleForm() {
                this.showAddForm = !this.showAddForm;
            },
            onSubmit(e) {
                console.log('submit!', e);
                console.log('submit!', this.form);
                let result = this.postExpert();
                if (result.code = 1 ){
                    this.toggleForm();
                    this.returnExpertList();
                }
            },
            async deleteExpert() {
                let delArr = [];
                this.multipleSelection.forEach(item => {
                    delArr.push(item.expert_id);
                })
                const result = await deleteExpert(delArr);
                console.log('deleteExpert:', result);
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
                const PostData = await getExpertList();
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
