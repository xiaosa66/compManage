<template>
    <!-- 组的管理    小组内两支队伍进行比赛 -->

    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <el-table v-show="tableData&&tableData.length"
                      ref="multipleTable"
                      :data="tableData"
                      highlight-current-row
                      style="width: 100%" @selection-change="handleSelectionChange" @cell-click="cellClick">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column
                    type="index"
                    width="100">
                </el-table-column>
                <el-table-column
                    property="team1_id"
                    label="队伍 1 ID"
                    width="220">
                </el-table-column>
                <el-table-column
                    property="team2_id"
                    label="队伍 2 ID"
                    width="220">
                </el-table-column>
                <el-table-column
                    property="team1_name"
                    label="队伍 1 名称"
                    width="220">
                </el-table-column>
                <el-table-column
                    property="team2_name"
                    label="队伍 2 名称"
                    width="220">
                </el-table-column>
                <el-table-column
                    property="experts"
                    label="学校专家"
                    width="220">
                </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
                <el-button @click="handleAllocateRival()">为队伍随机分配小组</el-button>
                <el-button @click="handleAllocateExpert()">为小组随机分配专家</el-button>
            </div>
        </div>
        <div class="extra_form" v-if="showExtraForm">
            <el-button type="danger" @click="handleCloseExtraForm()">关闭</el-button>
            <div v-for="item in extraForm">{{item}}</div>
        </div>
    </div>

</template>

<script>
    import headTop from '../components/headTop'
    import {allocateRival, allocateExpert, autoGetRival} from '@/api/getData'

    export default {
        name: "schoolManage",
        components: {
            headTop
        },
        data() {
            return {
                tableData: [],
                multipleSelection: [],
                showExtraForm: false,
                extraForm: {}
            }
        },
        created() {
            const page = this;
            page.getData();
        },
        methods: {
            async getData() {
                const page = this;
                await autoGetRival().then(res => {
                    page.tableData = res.data;
                })
            },
            async handleAllocateRival() {
                if(this.tableData.length>0){
                    this.$confirm('此操作将永久删除该已分组的信息进行重新分组, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.continueAllocateRival();
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });
                    });
                    return;
                }else {
                    this.continueAllocateRival();
                }

            },
            async continueAllocateRival(){
                await allocateRival(this.form).then(res=>{
                    this.tableData = res.data;
                    this.$message({
                        type: 'success',
                        message: '重建成功!'
                    });
                })
            },
            async handleAllocateExpert() {
                const page = this;
                let postData = this.tableData;
                if (postData.length == 0) {
                    this.$message({
                        type: 'info',
                        message: '请先分配队伍'
                    });
                }
                const res = await allocateExpert(postData);
                console.log('handleAllocateExpert', res);
                if (res.code === 0) {
                    this.$message({
                        type: 'info',
                        message: res.msg
                    });
                } else {
                    let data = res.data;
                    console.log('data', data);
                    let dataLen = data.length;
                    console.log('this.tableData', this.tableData);
                    this.tableData.forEach(function (item) {
                        page.$set(item, 'experts', []);
                        for (let i = 0; i < dataLen; i++) {
                            if (item.comp_id == data[i].comp_id) {
                                item.experts.push(data[i].expert_id)
                            }
                        }
                    })
                }
                console.log('this.tableData', this.tableData)
            },
            cellClick(row) {
                console.log('row', row.comp_id);
                this.extraForm = this.tableData[row.comp_id].experts;
                this.showExtraForm = true;
            },
            handleCloseExtraForm() {
                this.showExtraForm = false;
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

    .extra_form {
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
