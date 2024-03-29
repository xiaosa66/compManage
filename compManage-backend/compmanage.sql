/*
 Navicat Premium Data Transfer

 Source Server         : xiaohui
 Source Server Type    : MySQL
 Source Server Version : 80015
 Source Host           : localhost:3306
 Source Schema         : compmanage

 Target Server Type    : MySQL
 Target Server Version : 80015
 File Encoding         : 65001

 Date: 09/04/2019 23:39:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for _mysql_session_store
-- ----------------------------
DROP TABLE IF EXISTS `_mysql_session_store`;
CREATE TABLE `_mysql_session_store`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `expires` bigint(20) NULL DEFAULT NULL,
  `data` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of _mysql_session_store
-- ----------------------------
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:84hsia49f_yme9d6IJrU_u-3Q0jEcC8d', 1553595986296, '{\"user\":\"xiaosa\",\"id\":5}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:gwr8GCaTPhq-tPDowyWxAri7qWDuZhHr', 1553053272582, '{\"user\":\"xiaosa\",\"id\":5}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:iOSnARbhOOF6gH5zNkVuz8nfKNIZIa0p', 1553665029792, '{\"user\":\"xiaosa\",\"id\":5}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:Jf8puEWqpjssHByAD-D5HQcpCSRDyiT9', 1552980233459, '{\"user\":\"liu@qwe.com\",\"id\":3}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:jfgrj7cfQZ50uttRFFbqg1vb7dRMdhY6', 1553586673944, '{\"user\":\"xiaosa\",\"id\":5}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:mwRFwmU5_xLLmsjPLKCmuuJVJcXVYoqF', 1554715006685, '{\"user\":\"xiaosa\",\"id\":5}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:NjGJd_duezBNxiGmsjBIytX6e_ByhsWO', 1553774761473, '{\"user\":\"xiaosa\",\"id\":5}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:Nvyf-ggXOxATEqIx5NGshP2UdEXO_ZxK', 1553665708819, '{\"nimahai\":\"xiaosa\",\"ahahhaahh\":5}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:O8QR3wdeTIC-DUbadTkVlHz560pfQ9ui', 1552978458031, '{\"user\":\"lirui\",\"id\":2}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:QYxfoqekRO4p2oBDfLJQquFB0zK5vI_w', 1553674897427, '{\"user\":\"xiaosa\",\"id\":5}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:rUu7zhIq86HLgEe1si_CS-yfpkPm0zJE', 1553074212861, '{\"user\":\"xiaosa\",\"id\":5}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:tITtCzbLRXzEImH7FYgQKJ4l2MChz35b', 1553657668889, '{\"user\":\"xiaosa\",\"id\":5}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:vNWXK-1s5M0C43cX5ksoGo9V6xT58Eit', 1553931969643, '{\"user\":\"xiaosa\",\"id\":5}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:yJv0rcVDQnYNL15K1mDIpjYDZZiuGfSK', 1553742053069, '{\"user\":\"xiaosa\",\"id\":5}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:zdPZAp6TToW3DvSyRMxkZKeDWZ7Mezcy', 1553564962975, '{\"user\":\"xiaosa\",\"id\":5}');

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pass` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `avator` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `moment` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, '1234', '5397b6a1e317c203aef100cd57412db1', '4157gcx5f11552882619484', '2019-03-18 12:16:59');
INSERT INTO `admin` VALUES (2, 'lirui', '5397b6a1e317c203aef100cd57412db1', '1j4k5y7xflw1552892008252', '2019-03-18 14:53:28');
INSERT INTO `admin` VALUES (3, 'liu@qwe.com', '62bc4fb4be7fba2b5f00cbed19e6ccac', '6nto22a8zm1552892914818', '2019-03-18 15:08:34');
INSERT INTO `admin` VALUES (4, '潇洒', '5397b6a1e317c203aef100cd57412db1', 'umlpk5vw81552965317773.png', '2019-03-19 11:15:17');
INSERT INTO `admin` VALUES (5, 'xiaosa', '5397b6a1e317c203aef100cd57412db1', '1e3oaokpcnm1552965394470.png', '2019-03-19 11:16:34');

-- ----------------------------
-- Table structure for city
-- ----------------------------
DROP TABLE IF EXISTS `city`;
CREATE TABLE `city`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `city_index` int(11) NOT NULL,
  `province_id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 391 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of city
-- ----------------------------
INSERT INTO `city` VALUES (1, 1, 1, '北京市');
INSERT INTO `city` VALUES (2, 1, 2, '天津市');
INSERT INTO `city` VALUES (3, 1, 3, '上海市');
INSERT INTO `city` VALUES (4, 1, 4, '重庆市');
INSERT INTO `city` VALUES (5, 1, 5, '石家庄市');
INSERT INTO `city` VALUES (6, 2, 5, '唐山市');
INSERT INTO `city` VALUES (7, 3, 5, '秦皇岛市');
INSERT INTO `city` VALUES (8, 4, 5, '邯郸市');
INSERT INTO `city` VALUES (9, 5, 5, '邢台市');
INSERT INTO `city` VALUES (10, 6, 5, '保定市');
INSERT INTO `city` VALUES (11, 7, 5, '张家口市');
INSERT INTO `city` VALUES (12, 8, 5, '承德市');
INSERT INTO `city` VALUES (13, 9, 5, '沧州市');
INSERT INTO `city` VALUES (14, 10, 5, '廊坊市');
INSERT INTO `city` VALUES (15, 11, 5, '衡水市');
INSERT INTO `city` VALUES (16, 1, 6, '太原市');
INSERT INTO `city` VALUES (17, 2, 6, '大同市');
INSERT INTO `city` VALUES (18, 3, 6, '阳泉市');
INSERT INTO `city` VALUES (19, 4, 6, '长治市');
INSERT INTO `city` VALUES (20, 5, 6, '晋城市');
INSERT INTO `city` VALUES (21, 6, 6, '朔州市');
INSERT INTO `city` VALUES (22, 7, 6, '晋中市');
INSERT INTO `city` VALUES (23, 8, 6, '运城市');
INSERT INTO `city` VALUES (24, 9, 6, '忻州市');
INSERT INTO `city` VALUES (25, 10, 6, '临汾市');
INSERT INTO `city` VALUES (26, 11, 6, '吕梁市');
INSERT INTO `city` VALUES (27, 1, 7, '台北市');
INSERT INTO `city` VALUES (28, 2, 7, '高雄市');
INSERT INTO `city` VALUES (29, 3, 7, '基隆市');
INSERT INTO `city` VALUES (30, 4, 7, '台中市');
INSERT INTO `city` VALUES (31, 5, 7, '台南市');
INSERT INTO `city` VALUES (32, 6, 7, '新竹市');
INSERT INTO `city` VALUES (33, 7, 7, '嘉义市');
INSERT INTO `city` VALUES (34, 8, 7, '台北县');
INSERT INTO `city` VALUES (35, 9, 7, '宜兰县');
INSERT INTO `city` VALUES (36, 10, 7, '桃园县');
INSERT INTO `city` VALUES (37, 11, 7, '新竹县');
INSERT INTO `city` VALUES (38, 12, 7, '苗栗县');
INSERT INTO `city` VALUES (39, 13, 7, '台中县');
INSERT INTO `city` VALUES (40, 14, 7, '彰化县');
INSERT INTO `city` VALUES (41, 15, 7, '南投县');
INSERT INTO `city` VALUES (42, 16, 7, '云林县');
INSERT INTO `city` VALUES (43, 17, 7, '嘉义县');
INSERT INTO `city` VALUES (44, 18, 7, '台南县');
INSERT INTO `city` VALUES (45, 19, 7, '高雄县');
INSERT INTO `city` VALUES (46, 20, 7, '屏东县');
INSERT INTO `city` VALUES (47, 21, 7, '澎湖县');
INSERT INTO `city` VALUES (48, 22, 7, '台东县');
INSERT INTO `city` VALUES (49, 23, 7, '花莲县');
INSERT INTO `city` VALUES (50, 1, 8, '沈阳市');
INSERT INTO `city` VALUES (51, 2, 8, '大连市');
INSERT INTO `city` VALUES (52, 3, 8, '鞍山市');
INSERT INTO `city` VALUES (53, 4, 8, '抚顺市');
INSERT INTO `city` VALUES (54, 5, 8, '本溪市');
INSERT INTO `city` VALUES (55, 6, 8, '丹东市');
INSERT INTO `city` VALUES (56, 7, 8, '锦州市');
INSERT INTO `city` VALUES (57, 8, 8, '营口市');
INSERT INTO `city` VALUES (58, 9, 8, '阜新市');
INSERT INTO `city` VALUES (59, 10, 8, '辽阳市');
INSERT INTO `city` VALUES (60, 11, 8, '盘锦市');
INSERT INTO `city` VALUES (61, 12, 8, '铁岭市');
INSERT INTO `city` VALUES (62, 13, 8, '朝阳市');
INSERT INTO `city` VALUES (63, 14, 8, '葫芦岛市');
INSERT INTO `city` VALUES (64, 1, 9, '长春市');
INSERT INTO `city` VALUES (65, 2, 9, '吉林市');
INSERT INTO `city` VALUES (66, 3, 9, '四平市');
INSERT INTO `city` VALUES (67, 4, 9, '辽源市');
INSERT INTO `city` VALUES (68, 5, 9, '通化市');
INSERT INTO `city` VALUES (69, 6, 9, '白山市');
INSERT INTO `city` VALUES (70, 7, 9, '松原市');
INSERT INTO `city` VALUES (71, 8, 9, '白城市');
INSERT INTO `city` VALUES (72, 9, 9, '延边朝鲜族自治州');
INSERT INTO `city` VALUES (73, 1, 10, '哈尔滨市');
INSERT INTO `city` VALUES (74, 2, 10, '齐齐哈尔市');
INSERT INTO `city` VALUES (75, 3, 10, '鹤岗市');
INSERT INTO `city` VALUES (76, 4, 10, '双鸭山市');
INSERT INTO `city` VALUES (77, 5, 10, '鸡西市');
INSERT INTO `city` VALUES (78, 6, 10, '大庆市');
INSERT INTO `city` VALUES (79, 7, 10, '伊春市');
INSERT INTO `city` VALUES (80, 8, 10, '牡丹江市');
INSERT INTO `city` VALUES (81, 9, 10, '佳木斯市');
INSERT INTO `city` VALUES (82, 10, 10, '七台河市');
INSERT INTO `city` VALUES (83, 11, 10, '黑河市');
INSERT INTO `city` VALUES (84, 12, 10, '绥化市');
INSERT INTO `city` VALUES (85, 13, 10, '大兴安岭地区');
INSERT INTO `city` VALUES (86, 1, 11, '南京市');
INSERT INTO `city` VALUES (87, 2, 11, '无锡市');
INSERT INTO `city` VALUES (88, 3, 11, '徐州市');
INSERT INTO `city` VALUES (89, 4, 11, '常州市');
INSERT INTO `city` VALUES (90, 5, 11, '苏州市');
INSERT INTO `city` VALUES (91, 6, 11, '南通市');
INSERT INTO `city` VALUES (92, 7, 11, '连云港市');
INSERT INTO `city` VALUES (93, 8, 11, '淮安市');
INSERT INTO `city` VALUES (94, 9, 11, '盐城市');
INSERT INTO `city` VALUES (95, 10, 11, '扬州市');
INSERT INTO `city` VALUES (96, 11, 11, '镇江市');
INSERT INTO `city` VALUES (97, 12, 11, '泰州市');
INSERT INTO `city` VALUES (98, 13, 11, '宿迁市');
INSERT INTO `city` VALUES (99, 1, 12, '杭州市');
INSERT INTO `city` VALUES (100, 2, 12, '宁波市');
INSERT INTO `city` VALUES (101, 3, 12, '温州市');
INSERT INTO `city` VALUES (102, 4, 12, '嘉兴市');
INSERT INTO `city` VALUES (103, 5, 12, '湖州市');
INSERT INTO `city` VALUES (104, 6, 12, '绍兴市');
INSERT INTO `city` VALUES (105, 7, 12, '金华市');
INSERT INTO `city` VALUES (106, 8, 12, '衢州市');
INSERT INTO `city` VALUES (107, 9, 12, '舟山市');
INSERT INTO `city` VALUES (108, 10, 12, '台州市');
INSERT INTO `city` VALUES (109, 11, 12, '丽水市');
INSERT INTO `city` VALUES (110, 1, 13, '合肥市');
INSERT INTO `city` VALUES (111, 2, 13, '芜湖市');
INSERT INTO `city` VALUES (112, 3, 13, '蚌埠市');
INSERT INTO `city` VALUES (113, 4, 13, '淮南市');
INSERT INTO `city` VALUES (114, 5, 13, '马鞍山市');
INSERT INTO `city` VALUES (115, 6, 13, '淮北市');
INSERT INTO `city` VALUES (116, 7, 13, '铜陵市');
INSERT INTO `city` VALUES (117, 8, 13, '安庆市');
INSERT INTO `city` VALUES (118, 9, 13, '黄山市');
INSERT INTO `city` VALUES (119, 10, 13, '滁州市');
INSERT INTO `city` VALUES (120, 11, 13, '阜阳市');
INSERT INTO `city` VALUES (121, 12, 13, '宿州市');
INSERT INTO `city` VALUES (122, 13, 13, '巢湖市');
INSERT INTO `city` VALUES (123, 14, 13, '六安市');
INSERT INTO `city` VALUES (124, 15, 13, '亳州市');
INSERT INTO `city` VALUES (125, 16, 13, '池州市');
INSERT INTO `city` VALUES (126, 17, 13, '宣城市');
INSERT INTO `city` VALUES (127, 1, 14, '福州市');
INSERT INTO `city` VALUES (128, 2, 14, '厦门市');
INSERT INTO `city` VALUES (129, 3, 14, '莆田市');
INSERT INTO `city` VALUES (130, 4, 14, '三明市');
INSERT INTO `city` VALUES (131, 5, 14, '泉州市');
INSERT INTO `city` VALUES (132, 6, 14, '漳州市');
INSERT INTO `city` VALUES (133, 7, 14, '南平市');
INSERT INTO `city` VALUES (134, 8, 14, '龙岩市');
INSERT INTO `city` VALUES (135, 9, 14, '宁德市');
INSERT INTO `city` VALUES (136, 1, 15, '南昌市');
INSERT INTO `city` VALUES (137, 2, 15, '景德镇市');
INSERT INTO `city` VALUES (138, 3, 15, '萍乡市');
INSERT INTO `city` VALUES (139, 4, 15, '九江市');
INSERT INTO `city` VALUES (140, 5, 15, '新余市');
INSERT INTO `city` VALUES (141, 6, 15, '鹰潭市');
INSERT INTO `city` VALUES (142, 7, 15, '赣州市');
INSERT INTO `city` VALUES (143, 8, 15, '吉安市');
INSERT INTO `city` VALUES (144, 9, 15, '宜春市');
INSERT INTO `city` VALUES (145, 10, 15, '抚州市');
INSERT INTO `city` VALUES (146, 11, 15, '上饶市');
INSERT INTO `city` VALUES (147, 1, 16, '济南市');
INSERT INTO `city` VALUES (148, 2, 16, '青岛市');
INSERT INTO `city` VALUES (149, 3, 16, '淄博市');
INSERT INTO `city` VALUES (150, 4, 16, '枣庄市');
INSERT INTO `city` VALUES (151, 5, 16, '东营市');
INSERT INTO `city` VALUES (152, 6, 16, '烟台市');
INSERT INTO `city` VALUES (153, 7, 16, '潍坊市');
INSERT INTO `city` VALUES (154, 8, 16, '济宁市');
INSERT INTO `city` VALUES (155, 9, 16, '泰安市');
INSERT INTO `city` VALUES (156, 10, 16, '威海市');
INSERT INTO `city` VALUES (157, 11, 16, '日照市');
INSERT INTO `city` VALUES (158, 12, 16, '莱芜市');
INSERT INTO `city` VALUES (159, 13, 16, '临沂市');
INSERT INTO `city` VALUES (160, 14, 16, '德州市');
INSERT INTO `city` VALUES (161, 15, 16, '聊城市');
INSERT INTO `city` VALUES (162, 16, 16, '滨州市');
INSERT INTO `city` VALUES (163, 17, 16, '菏泽市');
INSERT INTO `city` VALUES (164, 1, 17, '郑州市');
INSERT INTO `city` VALUES (165, 2, 17, '开封市');
INSERT INTO `city` VALUES (166, 3, 17, '洛阳市');
INSERT INTO `city` VALUES (167, 4, 17, '平顶山市');
INSERT INTO `city` VALUES (168, 5, 17, '安阳市');
INSERT INTO `city` VALUES (169, 6, 17, '鹤壁市');
INSERT INTO `city` VALUES (170, 7, 17, '新乡市');
INSERT INTO `city` VALUES (171, 8, 17, '焦作市');
INSERT INTO `city` VALUES (172, 9, 17, '濮阳市');
INSERT INTO `city` VALUES (173, 10, 17, '许昌市');
INSERT INTO `city` VALUES (174, 11, 17, '漯河市');
INSERT INTO `city` VALUES (175, 12, 17, '三门峡市');
INSERT INTO `city` VALUES (176, 13, 17, '南阳市');
INSERT INTO `city` VALUES (177, 14, 17, '商丘市');
INSERT INTO `city` VALUES (178, 15, 17, '信阳市');
INSERT INTO `city` VALUES (179, 16, 17, '周口市');
INSERT INTO `city` VALUES (180, 17, 17, '驻马店市');
INSERT INTO `city` VALUES (181, 18, 17, '济源市');
INSERT INTO `city` VALUES (182, 1, 18, '武汉市');
INSERT INTO `city` VALUES (183, 2, 18, '黄石市');
INSERT INTO `city` VALUES (184, 3, 18, '十堰市');
INSERT INTO `city` VALUES (185, 4, 18, '荆州市');
INSERT INTO `city` VALUES (186, 5, 18, '宜昌市');
INSERT INTO `city` VALUES (187, 6, 18, '襄樊市');
INSERT INTO `city` VALUES (188, 7, 18, '鄂州市');
INSERT INTO `city` VALUES (189, 8, 18, '荆门市');
INSERT INTO `city` VALUES (190, 9, 18, '孝感市');
INSERT INTO `city` VALUES (191, 10, 18, '黄冈市');
INSERT INTO `city` VALUES (192, 11, 18, '咸宁市');
INSERT INTO `city` VALUES (193, 12, 18, '随州市');
INSERT INTO `city` VALUES (194, 13, 18, '仙桃市');
INSERT INTO `city` VALUES (195, 14, 18, '天门市');
INSERT INTO `city` VALUES (196, 15, 18, '潜江市');
INSERT INTO `city` VALUES (197, 16, 18, '神农架林区');
INSERT INTO `city` VALUES (198, 17, 18, '恩施土家族苗族自治州');
INSERT INTO `city` VALUES (199, 1, 19, '长沙市');
INSERT INTO `city` VALUES (200, 2, 19, '株洲市');
INSERT INTO `city` VALUES (201, 3, 19, '湘潭市');
INSERT INTO `city` VALUES (202, 4, 19, '衡阳市');
INSERT INTO `city` VALUES (203, 5, 19, '邵阳市');
INSERT INTO `city` VALUES (204, 6, 19, '岳阳市');
INSERT INTO `city` VALUES (205, 7, 19, '常德市');
INSERT INTO `city` VALUES (206, 8, 19, '张家界市');
INSERT INTO `city` VALUES (207, 9, 19, '益阳市');
INSERT INTO `city` VALUES (208, 10, 19, '郴州市');
INSERT INTO `city` VALUES (209, 11, 19, '永州市');
INSERT INTO `city` VALUES (210, 12, 19, '怀化市');
INSERT INTO `city` VALUES (211, 13, 19, '娄底市');
INSERT INTO `city` VALUES (212, 14, 19, '湘西土家族苗族自治州');
INSERT INTO `city` VALUES (213, 1, 20, '广州市');
INSERT INTO `city` VALUES (214, 2, 20, '深圳市');
INSERT INTO `city` VALUES (215, 3, 20, '珠海市');
INSERT INTO `city` VALUES (216, 4, 20, '汕头市');
INSERT INTO `city` VALUES (217, 5, 20, '韶关市');
INSERT INTO `city` VALUES (218, 6, 20, '佛山市');
INSERT INTO `city` VALUES (219, 7, 20, '江门市');
INSERT INTO `city` VALUES (220, 8, 20, '湛江市');
INSERT INTO `city` VALUES (221, 9, 20, '茂名市');
INSERT INTO `city` VALUES (222, 10, 20, '肇庆市');
INSERT INTO `city` VALUES (223, 11, 20, '惠州市');
INSERT INTO `city` VALUES (224, 12, 20, '梅州市');
INSERT INTO `city` VALUES (225, 13, 20, '汕尾市');
INSERT INTO `city` VALUES (226, 14, 20, '河源市');
INSERT INTO `city` VALUES (227, 15, 20, '阳江市');
INSERT INTO `city` VALUES (228, 16, 20, '清远市');
INSERT INTO `city` VALUES (229, 17, 20, '东莞市');
INSERT INTO `city` VALUES (230, 18, 20, '中山市');
INSERT INTO `city` VALUES (231, 19, 20, '潮州市');
INSERT INTO `city` VALUES (232, 20, 20, '揭阳市');
INSERT INTO `city` VALUES (233, 21, 20, '云浮市');
INSERT INTO `city` VALUES (234, 1, 21, '兰州市');
INSERT INTO `city` VALUES (235, 2, 21, '金昌市');
INSERT INTO `city` VALUES (236, 3, 21, '白银市');
INSERT INTO `city` VALUES (237, 4, 21, '天水市');
INSERT INTO `city` VALUES (238, 5, 21, '嘉峪关市');
INSERT INTO `city` VALUES (239, 6, 21, '武威市');
INSERT INTO `city` VALUES (240, 7, 21, '张掖市');
INSERT INTO `city` VALUES (241, 8, 21, '平凉市');
INSERT INTO `city` VALUES (242, 9, 21, '酒泉市');
INSERT INTO `city` VALUES (243, 10, 21, '庆阳市');
INSERT INTO `city` VALUES (244, 11, 21, '定西市');
INSERT INTO `city` VALUES (245, 12, 21, '陇南市');
INSERT INTO `city` VALUES (246, 13, 21, '临夏回族自治州');
INSERT INTO `city` VALUES (247, 14, 21, '甘南藏族自治州');
INSERT INTO `city` VALUES (248, 1, 22, '成都市');
INSERT INTO `city` VALUES (249, 2, 22, '自贡市');
INSERT INTO `city` VALUES (250, 3, 22, '攀枝花市');
INSERT INTO `city` VALUES (251, 4, 22, '泸州市');
INSERT INTO `city` VALUES (252, 5, 22, '德阳市');
INSERT INTO `city` VALUES (253, 6, 22, '绵阳市');
INSERT INTO `city` VALUES (254, 7, 22, '广元市');
INSERT INTO `city` VALUES (255, 8, 22, '遂宁市');
INSERT INTO `city` VALUES (256, 9, 22, '内江市');
INSERT INTO `city` VALUES (257, 10, 22, '乐山市');
INSERT INTO `city` VALUES (258, 11, 22, '南充市');
INSERT INTO `city` VALUES (259, 12, 22, '眉山市');
INSERT INTO `city` VALUES (260, 13, 22, '宜宾市');
INSERT INTO `city` VALUES (261, 14, 22, '广安市');
INSERT INTO `city` VALUES (262, 15, 22, '达州市');
INSERT INTO `city` VALUES (263, 16, 22, '雅安市');
INSERT INTO `city` VALUES (264, 17, 22, '巴中市');
INSERT INTO `city` VALUES (265, 18, 22, '资阳市');
INSERT INTO `city` VALUES (266, 19, 22, '阿坝藏族羌族自治州');
INSERT INTO `city` VALUES (267, 20, 22, '甘孜藏族自治州');
INSERT INTO `city` VALUES (268, 21, 22, '凉山彝族自治州');
INSERT INTO `city` VALUES (269, 1, 23, '贵阳市');
INSERT INTO `city` VALUES (270, 2, 23, '六盘水市');
INSERT INTO `city` VALUES (271, 3, 23, '遵义市');
INSERT INTO `city` VALUES (272, 4, 23, '安顺市');
INSERT INTO `city` VALUES (273, 5, 23, '铜仁地区');
INSERT INTO `city` VALUES (274, 6, 23, '毕节地区');
INSERT INTO `city` VALUES (275, 7, 23, '黔西南布依族苗族自治州');
INSERT INTO `city` VALUES (276, 8, 23, '黔东南苗族侗族自治州');
INSERT INTO `city` VALUES (277, 9, 23, '黔南布依族苗族自治州');
INSERT INTO `city` VALUES (278, 1, 24, '海口市');
INSERT INTO `city` VALUES (279, 2, 24, '三亚市');
INSERT INTO `city` VALUES (280, 3, 24, '五指山市');
INSERT INTO `city` VALUES (281, 4, 24, '琼海市');
INSERT INTO `city` VALUES (282, 5, 24, '儋州市');
INSERT INTO `city` VALUES (283, 6, 24, '文昌市');
INSERT INTO `city` VALUES (284, 7, 24, '万宁市');
INSERT INTO `city` VALUES (285, 8, 24, '东方市');
INSERT INTO `city` VALUES (286, 9, 24, '澄迈县');
INSERT INTO `city` VALUES (287, 10, 24, '定安县');
INSERT INTO `city` VALUES (288, 11, 24, '屯昌县');
INSERT INTO `city` VALUES (289, 12, 24, '临高县');
INSERT INTO `city` VALUES (290, 13, 24, '白沙黎族自治县');
INSERT INTO `city` VALUES (291, 14, 24, '昌江黎族自治县');
INSERT INTO `city` VALUES (292, 15, 24, '乐东黎族自治县');
INSERT INTO `city` VALUES (293, 16, 24, '陵水黎族自治县');
INSERT INTO `city` VALUES (294, 17, 24, '保亭黎族苗族自治县');
INSERT INTO `city` VALUES (295, 18, 24, '琼中黎族苗族自治县');
INSERT INTO `city` VALUES (296, 1, 25, '昆明市');
INSERT INTO `city` VALUES (297, 2, 25, '曲靖市');
INSERT INTO `city` VALUES (298, 3, 25, '玉溪市');
INSERT INTO `city` VALUES (299, 4, 25, '保山市');
INSERT INTO `city` VALUES (300, 5, 25, '昭通市');
INSERT INTO `city` VALUES (301, 6, 25, '丽江市');
INSERT INTO `city` VALUES (302, 7, 25, '思茅市');
INSERT INTO `city` VALUES (303, 8, 25, '临沧市');
INSERT INTO `city` VALUES (304, 9, 25, '文山壮族苗族自治州');
INSERT INTO `city` VALUES (305, 10, 25, '红河哈尼族彝族自治州');
INSERT INTO `city` VALUES (306, 11, 25, '西双版纳傣族自治州');
INSERT INTO `city` VALUES (307, 12, 25, '楚雄彝族自治州');
INSERT INTO `city` VALUES (308, 13, 25, '大理白族自治州');
INSERT INTO `city` VALUES (309, 14, 25, '德宏傣族景颇族自治州');
INSERT INTO `city` VALUES (310, 15, 25, '怒江傈傈族自治州');
INSERT INTO `city` VALUES (311, 16, 25, '迪庆藏族自治州');
INSERT INTO `city` VALUES (312, 1, 26, '西宁市');
INSERT INTO `city` VALUES (313, 2, 26, '海东地区');
INSERT INTO `city` VALUES (314, 3, 26, '海北藏族自治州');
INSERT INTO `city` VALUES (315, 4, 26, '黄南藏族自治州');
INSERT INTO `city` VALUES (316, 5, 26, '海南藏族自治州');
INSERT INTO `city` VALUES (317, 6, 26, '果洛藏族自治州');
INSERT INTO `city` VALUES (318, 7, 26, '玉树藏族自治州');
INSERT INTO `city` VALUES (319, 8, 26, '海西蒙古族藏族自治州');
INSERT INTO `city` VALUES (320, 1, 27, '西安市');
INSERT INTO `city` VALUES (321, 2, 27, '铜川市');
INSERT INTO `city` VALUES (322, 3, 27, '宝鸡市');
INSERT INTO `city` VALUES (323, 4, 27, '咸阳市');
INSERT INTO `city` VALUES (324, 5, 27, '渭南市');
INSERT INTO `city` VALUES (325, 6, 27, '延安市');
INSERT INTO `city` VALUES (326, 7, 27, '汉中市');
INSERT INTO `city` VALUES (327, 8, 27, '榆林市');
INSERT INTO `city` VALUES (328, 9, 27, '安康市');
INSERT INTO `city` VALUES (329, 10, 27, '商洛市');
INSERT INTO `city` VALUES (330, 1, 28, '南宁市');
INSERT INTO `city` VALUES (331, 2, 28, '柳州市');
INSERT INTO `city` VALUES (332, 3, 28, '桂林市');
INSERT INTO `city` VALUES (333, 4, 28, '梧州市');
INSERT INTO `city` VALUES (334, 5, 28, '北海市');
INSERT INTO `city` VALUES (335, 6, 28, '防城港市');
INSERT INTO `city` VALUES (336, 7, 28, '钦州市');
INSERT INTO `city` VALUES (337, 8, 28, '贵港市');
INSERT INTO `city` VALUES (338, 9, 28, '玉林市');
INSERT INTO `city` VALUES (339, 10, 28, '百色市');
INSERT INTO `city` VALUES (340, 11, 28, '贺州市');
INSERT INTO `city` VALUES (341, 12, 28, '河池市');
INSERT INTO `city` VALUES (342, 13, 28, '来宾市');
INSERT INTO `city` VALUES (343, 14, 28, '崇左市');
INSERT INTO `city` VALUES (344, 1, 29, '拉萨市');
INSERT INTO `city` VALUES (345, 2, 29, '那曲地区');
INSERT INTO `city` VALUES (346, 3, 29, '昌都地区');
INSERT INTO `city` VALUES (347, 4, 29, '山南地区');
INSERT INTO `city` VALUES (348, 5, 29, '日喀则地区');
INSERT INTO `city` VALUES (349, 6, 29, '阿里地区');
INSERT INTO `city` VALUES (350, 7, 29, '林芝地区');
INSERT INTO `city` VALUES (351, 1, 30, '银川市');
INSERT INTO `city` VALUES (352, 2, 30, '石嘴山市');
INSERT INTO `city` VALUES (353, 3, 30, '吴忠市');
INSERT INTO `city` VALUES (354, 4, 30, '固原市');
INSERT INTO `city` VALUES (355, 5, 30, '中卫市');
INSERT INTO `city` VALUES (356, 1, 31, '乌鲁木齐市');
INSERT INTO `city` VALUES (357, 2, 31, '克拉玛依市');
INSERT INTO `city` VALUES (358, 3, 31, '石河子市　');
INSERT INTO `city` VALUES (359, 4, 31, '阿拉尔市');
INSERT INTO `city` VALUES (360, 5, 31, '图木舒克市');
INSERT INTO `city` VALUES (361, 6, 31, '五家渠市');
INSERT INTO `city` VALUES (362, 7, 31, '吐鲁番市');
INSERT INTO `city` VALUES (363, 8, 31, '阿克苏市');
INSERT INTO `city` VALUES (364, 9, 31, '喀什市');
INSERT INTO `city` VALUES (365, 10, 31, '哈密市');
INSERT INTO `city` VALUES (366, 11, 31, '和田市');
INSERT INTO `city` VALUES (367, 12, 31, '阿图什市');
INSERT INTO `city` VALUES (368, 13, 31, '库尔勒市');
INSERT INTO `city` VALUES (369, 14, 31, '昌吉市　');
INSERT INTO `city` VALUES (370, 15, 31, '阜康市');
INSERT INTO `city` VALUES (371, 16, 31, '米泉市');
INSERT INTO `city` VALUES (372, 17, 31, '博乐市');
INSERT INTO `city` VALUES (373, 18, 31, '伊宁市');
INSERT INTO `city` VALUES (374, 19, 31, '奎屯市');
INSERT INTO `city` VALUES (375, 20, 31, '塔城市');
INSERT INTO `city` VALUES (376, 21, 31, '乌苏市');
INSERT INTO `city` VALUES (377, 22, 31, '阿勒泰市');
INSERT INTO `city` VALUES (378, 1, 32, '呼和浩特市');
INSERT INTO `city` VALUES (379, 2, 32, '包头市');
INSERT INTO `city` VALUES (380, 3, 32, '乌海市');
INSERT INTO `city` VALUES (381, 4, 32, '赤峰市');
INSERT INTO `city` VALUES (382, 5, 32, '通辽市');
INSERT INTO `city` VALUES (383, 6, 32, '鄂尔多斯市');
INSERT INTO `city` VALUES (384, 7, 32, '呼伦贝尔市');
INSERT INTO `city` VALUES (385, 8, 32, '巴彦淖尔市');
INSERT INTO `city` VALUES (386, 9, 32, '乌兰察布市');
INSERT INTO `city` VALUES (387, 10, 32, '锡林郭勒盟');
INSERT INTO `city` VALUES (388, 11, 32, '兴安盟');
INSERT INTO `city` VALUES (389, 12, 32, '阿拉善盟');
INSERT INTO `city` VALUES (390, 1, 33, '澳门特别行政区');
INSERT INTO `city` VALUES (391, 1, 34, '香港特别行政区');

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` tinytext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `moment` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `postid` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `avator` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for expert
-- ----------------------------
DROP TABLE IF EXISTS `expert`;
CREATE TABLE `expert`  (
  `expert_id` int(20) NOT NULL AUTO_INCREMENT,
  `expert_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `expert_class` tinyint(4) NULL DEFAULT NULL,
  `expert_info` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `province_id` int(20) NULL DEFAULT NULL,
  `expert_pass` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `moment` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `actived` tinyint(1) UNSIGNED NULL DEFAULT 0,
  PRIMARY KEY (`expert_id`) USING BTREE,
  INDEX `expert_id`(`expert_id`) USING BTREE,
  INDEX `expert_id_2`(`expert_id`) USING BTREE,
  INDEX `province_id`(`province_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of expert
-- ----------------------------
INSERT INTO `expert` VALUES (1, 'xiaosa', 1, 'qwer', 1, '9c4df88ed624123d26cb27f1dfddda75', '2019-03-23 22:57:15', NULL);
INSERT INTO `expert` VALUES (2, 'xiaosa1', 1, 'qwer', 1, '9c4df88ed624123d26cb27f1dfddda75', '2019-03-23 23:04:24', NULL);

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message`  (
  `message_title` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `message_id` int(11) NOT NULL AUTO_INCREMENT,
  `message_content` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `message_auther_id` int(11) NULL DEFAULT NULL,
  `moment` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`message_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` tinytext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` tinytext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `md` tinytext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `uid` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `moment` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `comments` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `pv` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `avator` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of posts
-- ----------------------------
INSERT INTO `posts` VALUES (1, 'liu@qwe.com', 'HAHAHAAHAH', '<p>HADHSFALSFHAS;FAS</p>\n', 'HADHSFALSFHAS;FAS', '3', '2019-03-18 15:17:58', '0', '0', '6nto22a8zm1552892914818');
INSERT INTO `posts` VALUES (2, '潇洒', '123', '<h3>文本编辑</h3>', NULL, 'NjGJd_duezBNxiGmsjBIytX6e_ByhsWO', '2019-03-27 22:49:31', '0', '0', NULL);
INSERT INTO `posts` VALUES (3, '刘潇洒', '小组管理是啥意思', '<h3>小组管理是啥意思小组管理是啥意思小组管理是啥意思小组管理是啥意思小组管理是啥意思小组管理是啥意思</h3>', NULL, 'mwRFwmU5_xLLmsjPLKCmuuJVJcXVYoqF', '2019-04-07 17:30:13', '0', '0', NULL);

-- ----------------------------
-- Table structure for province
-- ----------------------------
DROP TABLE IF EXISTS `province`;
CREATE TABLE `province`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 34 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of province
-- ----------------------------
INSERT INTO `province` VALUES (1, '北京市');
INSERT INTO `province` VALUES (2, '天津市');
INSERT INTO `province` VALUES (3, '上海市');
INSERT INTO `province` VALUES (4, '重庆市');
INSERT INTO `province` VALUES (5, '河北省');
INSERT INTO `province` VALUES (6, '山西省');
INSERT INTO `province` VALUES (7, '台湾省');
INSERT INTO `province` VALUES (8, '辽宁省');
INSERT INTO `province` VALUES (9, '吉林省');
INSERT INTO `province` VALUES (10, '黑龙江省');
INSERT INTO `province` VALUES (11, '江苏省');
INSERT INTO `province` VALUES (12, '浙江省');
INSERT INTO `province` VALUES (13, '安徽省');
INSERT INTO `province` VALUES (14, '福建省');
INSERT INTO `province` VALUES (15, '江西省');
INSERT INTO `province` VALUES (16, '山东省');
INSERT INTO `province` VALUES (17, '河南省');
INSERT INTO `province` VALUES (18, '湖北省');
INSERT INTO `province` VALUES (19, '湖南省');
INSERT INTO `province` VALUES (20, '广东省');
INSERT INTO `province` VALUES (21, '甘肃省');
INSERT INTO `province` VALUES (22, '四川省');
INSERT INTO `province` VALUES (23, '贵州省');
INSERT INTO `province` VALUES (24, '海南省');
INSERT INTO `province` VALUES (25, '云南省');
INSERT INTO `province` VALUES (26, '青海省');
INSERT INTO `province` VALUES (27, '陕西省');
INSERT INTO `province` VALUES (28, '广西壮族自治区');
INSERT INTO `province` VALUES (29, '西藏自治区');
INSERT INTO `province` VALUES (30, '宁夏回族自治区');
INSERT INTO `province` VALUES (31, '新疆维吾尔自治区');
INSERT INTO `province` VALUES (32, '内蒙古自治区');
INSERT INTO `province` VALUES (33, '澳门特别行政区');
INSERT INTO `province` VALUES (34, '香港特别行政区');

-- ----------------------------
-- Table structure for school
-- ----------------------------
DROP TABLE IF EXISTS `school`;
CREATE TABLE `school`  (
  `school_id` int(255) NOT NULL AUTO_INCREMENT,
  `school_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `city_id` int(255) NULL DEFAULT NULL,
  `moment` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`school_id`) USING BTREE,
  INDEX `school_ibfk_1`(`city_id`) USING BTREE,
  INDEX `school_id`(`school_id`) USING BTREE,
  INDEX `school_id_2`(`school_id`) USING BTREE,
  INDEX `school_id_3`(`school_id`) USING BTREE,
  INDEX `school_id_4`(`school_id`) USING BTREE,
  INDEX `school_id_5`(`school_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of school
-- ----------------------------
INSERT INTO `school` VALUES (9, '中华女子学院123', 1, '2019-03-25 18:11:16');
INSERT INTO `school` VALUES (11, '中华女子学院12312', 1, '2019-03-25 18:14:29');
INSERT INTO `school` VALUES (14, '天津大学', 2, '2019-03-26 17:18:51');

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student`  (
  `student_id` int(11) NOT NULL AUTO_INCREMENT,
  `student_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `team_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`student_id`) USING BTREE,
  INDEX `team_id`(`team_id`) USING BTREE,
  CONSTRAINT `student_ibfk_1` FOREIGN KEY (`team_id`) REFERENCES `team` (`team_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for team
-- ----------------------------
DROP TABLE IF EXISTS `team`;
CREATE TABLE `team`  (
  `team_id` int(11) NOT NULL AUTO_INCREMENT,
  `team_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `expert_id` int(255) NULL DEFAULT NULL,
  `school_id` int(255) NOT NULL,
  `moment` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`team_id`) USING BTREE,
  INDEX `school_id`(`school_id`) USING BTREE,
  INDEX `expert_id`(`expert_id`) USING BTREE,
  CONSTRAINT `team_ibfk_1` FOREIGN KEY (`school_id`) REFERENCES `school` (`school_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `team_ibfk_2` FOREIGN KEY (`expert_id`) REFERENCES `expert` (`expert_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of team
-- ----------------------------
INSERT INTO `team` VALUES (3, '超级牛逼1', NULL, 9, '2019-03-27 19:53:19');
INSERT INTO `team` VALUES (4, '超级牛逼12', NULL, 9, '2019-03-27 19:53:22');
INSERT INTO `team` VALUES (5, '超级牛逼12werq', NULL, 14, '2019-03-27 19:53:31');

SET FOREIGN_KEY_CHECKS = 1;
