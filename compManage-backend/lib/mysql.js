var mysql = require('mysql');
var config = require('../config/default.js')

var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE
});

let query = function (sql, values) {

    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {

                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })

}


let admin =
    `create table if not exists admin(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL,
     pass VARCHAR(100) NOT NULL,
     avator VARCHAR(100) NOT NULL,
     moment VARCHAR(100) NOT NULL,
     PRIMARY KEY ( id )
    );`

let posts =
    `create table if not exists posts(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL,
     title TEXT(0) NOT NULL,
     content TEXT(0) NOT NULL,
     md TEXT(0) NOT NULL,
     uid VARCHAR(40) NOT NULL,
     moment VARCHAR(100) NOT NULL,
     comments VARCHAR(200) NOT NULL DEFAULT '0',
     pv VARCHAR(40) NOT NULL DEFAULT '0',
     avator VARCHAR(100) NOT NULL,
     PRIMARY KEY ( id )
    );`

let comment =
    `create table if not exists comment(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL,
     content TEXT(0) NOT NULL,
     moment VARCHAR(40) NOT NULL,
     postid VARCHAR(40) NOT NULL,
     avator VARCHAR(100) NOT NULL,
     PRIMARY KEY ( id )
    );`

let createTable = function (sql) {
    return query(sql, [])
}

// 建表
createTable(admin)
createTable(posts)
createTable(comment)


/********************************      管理员相关    ****************************************/

// 判断管理员是否已经注册
exports.findDataCountByName = (name) => {
    let _sql = `select count(*) as count from admin where name="${name}";`
    return query(_sql)
}
// 激活/禁用管理员
let toggleAdminStatus = function (arr,status) {
    console.log('arr',arr)
    let _sql = `update admin SET active = ${status} where id IN (${arr});`
    console.log('toggleAdminStatustoggleAdminStatustoggleAdminStatustoggleAdminStatustoggleAdminStatus',_sql)

    return query(_sql)
}
// 删除管理员
let delAdmin = function (arr) {
    let _sql = `delete from admin where id IN (${arr});`
    return query(_sql)
}
// 检查是否是超级管理员
let checkIsSuper = function (id) {
    let _sql = `select isSuper from admin where id = ${id};`
    return query(_sql)
}
// 通过名字查找管理员
let findDataByName = function (name) {
    let _sql = `select * from admin where name="${name}";`
    return query(_sql)
}
// 通过文章的名字查找管理员
let findDataByAdmin = function (name) {
    let _sql = `select * from posts where name="${name}";`
    return query(_sql)
}
// 注册管理员
let insertData = function (value) {
    let _sql = "insert into admin set name=?,pass=?,avator=?,moment=?,active=?;"
    return query(_sql, value)
}
// 删除管理员
let deleteAdminData = function (name) {
    let _sql = `delete from admin where name="${name}";`
    return query(_sql)
}
// 查找管理员
let findAdminData = function (name) {
    let _sql = `select * from admin where name="${name}";`
    return query(_sql)
}
// 查询所有管理员
let findAllAdmin = function () {
    let _sql = `select * from admin;`
    return query(_sql)
}
// 查询所有管理员数量
let findAllAdminCount = function () {
    let _sql = `select count(*) as count from admin;`
    return query(_sql)
}
/********************************      专家相关    ****************************************/
// 新建专家
let insertExpert = function (value) {
    let _sql = "insert into expert set expert_name=? , expert_info=? , school_id = ?, identity =?, moment=?;"
    return query(_sql, value)
}
// 通过名字查找专家
let findExpertByName = function (name) {
    let _sql = `select * from expert where name="${name}";`
    return query(_sql)
}
// 通过名字查找专家数量
let findExpertCountByName = (name) => {
    let _sql = `select count(*) as count from expert where expert_name="${name}";`
    return query(_sql)
}
// 返回专家列表
let returnExpertList = () => {
    let _sql = `SELECT * FROM expert;`
    return query(_sql)
}
// 删除专家
let deleteExpert = function (ID) {
    let _sql = `delete from expert where expert_id IN (${ID});`
    return query(_sql)
}
/********************************      学校相关    ****************************************/
// 创建学校
let createSchool = function (value) {
    let _sql = "insert into school set school_name=?, city_id=?, moment=?;"
    return query(_sql, value)
}

// 返回学校列表
let returnSchoolList = () => {
    let _sql = `SELECT school.*, city.name as city_name FROM school,city
  WHERE (school.city_id = city.ID);`
    return query(_sql)
}
// 查询所有学校数量
let returnSchoolCount = function () {
    let _sql = `select count(*) as count from school;`
    return query(_sql)
}
// 判断学校是否已经注册
let schoolExist = (name) => {
    let _sql = `select count(*) as count from school where school_name="${name}";`
    return query(_sql)
}
// 删除学校
let deleteSchool = function (ID) {
    let _sql = `delete from school where school_id IN (${ID});`
    return query(_sql)
}
/********************************      队伍相关    ****************************************/
// 查询所有队伍数量
let returnTeamCount = function () {
    let _sql = `select count(*) as count from team;`
    return query(_sql)
}
// 根据队伍 ID 查询队伍信息
let queryTeam = function (id) {
    let _sql = `select * from team where team_id = ${id};`
    return query(_sql)
}
// 创建队伍
let createTeam = function (value) {
    let _sql = "insert into team set team_name=?, school_id=?, moment=?;"
    return query(_sql, value)
}
// 返回队伍列表
let returnTeamList = () => {
    let _sql = `SELECT * FROM team;`
    return query(_sql)
}
// 删除学校
let deleteTeam = function (ID) {
    let _sql = `delete from team where team_id IN (${ID});`
    return query(_sql)
}
// 删除队伍成员
let deleteTeamMember = function (ID) {
    let _sql = `delete from student where student_id IN (${ID});`
    return query(_sql)
}

let selectTeamMember = function (teamId) {
    let _sql = `select * from student where team_id = ${teamId}`
    return query(_sql);
};
let insertTeamMember = function (value) {
    let _sql = "insert into student set team_id=?, student_school_id=?, student_name=?, student_sex=?;"
    return query(_sql,value);
};
/********************************      新闻(posts)相关    ****************************************/
// 发表文章
let insertPost = function (value) {
    let _sql = "insert into posts set name=?,title=?,content=?,uid=?,moment=?;"
    return query(_sql, value)
}

// 查询所有文章
let findAllPost = function () {
    let _sql = ` select * FROM posts;`
    return query(_sql)
}
/********************************     城市相关    ****************************************/
// 根据城市 ID 返回城市名称
let queryCityName = (ID) => {
    let _sql = `SELECT name FROM city WHERE id = "${ID}";`
    return query(_sql)
}
// 返回省份
let returnProvinceList = () => {
    let _sql = `SELECT * FROM province;`
    return query(_sql)
}
// 根据省份id 返回市列表
let returnCityList = (province_id) => {
    let _sql = `SELECT * FROM city WHERE province_id = "${province_id}";`
    return query(_sql)
}
// 判断队伍是否已经注册
let teamExist = (name) => {
    let _sql = `select count(*) as count from team where team_name="${name}";`
    return query(_sql)
}
//
let findUserData = (name) => {
    let _sql = `select * from expert where expert_name="${name}";`
    return query(_sql)
}
/********************************      分配相关    ****************************************/
let selectTeamByRand = function () {
    let _sql = `SELECT * from team order by rand()`
    return query(_sql);
};
let selectExpByRand = function () {
    let _sql = `SELECT * from expert order by rand()`
    return query(_sql);
};
let insertAllocate = function (comp_id, team_id) {
    let _sql = `insert into allocated_team set comp_id=${comp_id} , team_id=${team_id};`
    return query(_sql);
};
let getAllocate = function () {
    let _sql = `SELECT * from allocated_team`
    return query(_sql);
};
let feeler = function (tableName) {
    let _sql = `select count(*) a from ${tableName};`
    return query(_sql);
};
let updateAllocate = function (item, index) {
    let _sql = `update allocated_team set  team1_id=${item.team1.team_id} , team2_id=${item.team2.team_id} where comp_id=${index};`
    return query(_sql);
};
// 清空表且不可撤销 谨慎使用!!!
let truncate = function (tableName) {
    let _sql = `Truncate Table ${tableName};`
    return query(_sql);
};
let selectAlloTeamWithSchool = function () {
    let _sql = `SELECT allocated_team.* , team.school_id from allocated_team,team where ;`
    return query(_sql);
};
let insertAlloExp = function (comp_id,expert_id) {
    let _sql = `insert into allocated_expert set comp_id=${comp_id} , expert_id=${expert_id};`
    return query(_sql);
};
let selectAll = function (tableName) {
    let _sql = `select * from ${tableName}`
    return query(_sql);
};



module.exports = {
    query,
    toggleAdminStatus,
    delAdmin,
    truncate,
    feeler,
    selectAll,
    createTable,
    checkIsSuper,
    findAllPost,
    insertPost,
    queryTeam,
    insertData,
    schoolExist,
    queryCityName,
    createSchool,
    insertExpert,
    returnCityList,
    returnSchoolList,
    returnExpertList,
    returnSchoolCount,
    returnTeamList,
    returnProvinceList,
    teamExist,
    createTeam,
    deleteSchool,
    deleteTeam,
    deleteExpert,
    findExpertByName,
    findExpertCountByName,
    deleteAdminData,
    findAdminData,
    findDataByName,
    findUserData,
    returnTeamCount,
    findDataByAdmin,
    findAllAdmin,
    findAllAdminCount,
    selectTeamByRand,
    selectExpByRand,
    insertAllocate,
    getAllocate,
    updateAllocate,
    insertAlloExp,
    selectAlloTeamWithSchool,
    insertTeamMember,selectTeamMember,
    deleteTeamMember
}
