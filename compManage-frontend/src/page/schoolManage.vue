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
                    property="school_id"
                    label="学校ID"
                    width="220">
                </el-table-column>
                <el-table-column
                    property="moment"
                    label="注册日期"
                    width="220">
                </el-table-column>
                <el-table-column
                    property="school_name"
                    label="学校名称"
                    width="220">
                </el-table-column>
                <el-table-column
                    property="city_name"
                    label="注册地址">
                </el-table-column>
            </el-table>

            <div style="margin-top: 20px">
                <el-button @click="toggleForm()">添加学校</el-button>
                <el-button type="danger"  @click="deleteSchool()">删除选中学校</el-button>
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
                <el-form-item label="学校名称">
                    <el-input v-model="form.school_name"></el-input>
                </el-form-item>
                <el-form-item label="注册城市">
                    <el-select v-model="form.province_id" placeholder="请选择学校区域">
                        <el-option v-for="(item,index) in provinceList" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                    <el-button @click="queryCityList(form.province_id)">确定</el-button>
                    <el-select v-if="cityList.length>0" v-model="form.city_id" placeholder="请选择学校城市">
                        <el-option v-for="(item,index) in cityList" :label="item.name" :value="item.id"></el-option>
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
    import {getSchoolList, deleteSchool, getCityList, getProvinceList, postSchool} from '@/api/getData'

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
                    school_name: '',
                    province_id: '',
                    city_id: ''
                },
                provinceList: [],
                cityList: [],
                count: 0,
                currentPage: 0
            }
        },
        created() {
            this.returnSchoolList();
        },

        methods: {
            async toggleForm() {
                if (this.provinceList.length == 0) {
                    await getProvinceList().then(res => {
                        this.provinceList = res.data;
                    })
                }
                this.showAddForm = !this.showAddForm;
            },
            async queryCityList(province_id) {
                let postData = {province_id};
                await getCityList(postData).then(res => {
                    this.cityList = res.data;
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
                await postSchool(this.form).then(res => {
                    if (res.code = 1) {
                        this.showAddForm = false;
                        this.$notify({
                            title: '增加成功',
                            type: 'success'
                        });
                        this.returnSchoolList();
                    }else{
                        this.$notify.error({
                            title: '增加失败 ',
                        });
                    }
                })

            },
            async deleteSchool() {
                let deleteSchoolArr = [];
                this.multipleSelection.forEach(item => {
                    deleteSchoolArr.push(item.school_id);
                })
                await deleteSchool(deleteSchoolArr).then(res=>{
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
            async returnSchoolList() {
                const PostData = await getSchoolList();
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
