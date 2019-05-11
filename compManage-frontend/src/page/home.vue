<template>
    <div>
        <head-top></head-top>
        <el-card class="box-card">
            <div v-for="item in posts" class="text item">
                {{item.name }} 说 {{item.title}}:
                {{item.content}}
            </div>
        </el-card>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import tendency from '../components/tendency'
    import dtime from 'time-formater'
    import {userCount,getPostList, orderCount, getUserCount, getOrderCount, adminDayCount, adminCount} from '@/api/getData'

    export default {
        data() {
            return {
                userCount: null,
                orderCount: null,
                adminCount: null,
                allUserCount: null,
                allOrderCount: null,
                allAdminCount: null,
                sevenDay: [],
                sevenDate: [[], [], []],
                posts:[]
            }
        },
        components: {
            headTop,
            tendency,
        },
        mounted() {
            this.getPosts();
            // this.initData();
            // for (let i = 6; i > -1; i--) {
            // 	const date = dtime(new Date().getTime() - 86400000*i).format('YYYY-MM-DD')
            // 	this.sevenDay.push(date)
            // }
            // this.getSevenData();

        },
        computed: {},
        methods: {
            async initData() {
                const today = dtime().format('YYYY-MM-DD')
                Promise.all([userCount(today), orderCount(today), adminDayCount(today), getUserCount(), getOrderCount(), adminCount()])
                    .then(res => {
                        this.userCount = res[0].count;
                        this.orderCount = res[1].count;
                        this.adminCount = res[2].count;
                        this.allUserCount = res[3].count;
                        this.allOrderCount = res[4].count;
                        this.allAdminCount = res[5].count;
                    }).catch(err => {
                    console.log(err)
                })
            },
            async getSevenData() {
                const apiArr = [[], [], []];
                this.sevenDay.forEach(item => {
                    apiArr[0].push(userCount(item))
                    apiArr[1].push(orderCount(item))
                    apiArr[2].push(adminDayCount(item))
                })
                const promiseArr = [...apiArr[0], ...apiArr[1], ...apiArr[2]]
                Promise.all(promiseArr).then(res => {
                    const resArr = [[], [], []];
                    res.forEach((item, index) => {
                        if (item.status == 1) {
                            resArr[Math.floor(index / 7)].push(item.count)
                        }
                    })
                    this.sevenDate = resArr;
                }).catch(err => {
                    console.log(err)
                })
            },
            // 获取新闻列表
            async getPosts(){
                const res  = await getPostList();
                this.posts = res.data;
                console.log(this.posts);
            }
        }
    }
</script>

<style lang="less">
    @import '../style/mixin';

    .text {
        font-size: 14px;
    }

    .item {
        padding: 18px 0;
    }

    .box-card {
        width: 480px;
        margin:40px;
    }

    .data_section {
        padding: 20px;
        margin-bottom: 40px;

        .section_title {
            text-align: center;
            font-size: 30px;
            margin-bottom: 10px;
        }

        .data_list {
            text-align: center;
            font-size: 14px;
            color: #666;
            border-radius: 6px;
            background: #E5E9F2;

            .data_num {
                color: #333;
                font-size: 26px;

            }

            .head {
                border-radius: 6px;
                font-size: 22px;
                padding: 4px 0;
                color: #fff;
                display: inline-block;
            }
        }

        .today_head {
            background: #FF9800;
        }

        .all_head {
            background: #20A0FF;
        }
    }

    .wan {
        .sc(16px, #333)
    }
</style>
