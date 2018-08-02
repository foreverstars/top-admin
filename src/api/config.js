// 配置所有请求的接口地址

const base = '/top-php'

export default {
    login: base + '/login.php',
    register: base + '/register.php',
    saveArticle: base + '/addArticle.php',
    getTypeList: base + '/typeList.php',
    getUserList: base + '/userList.php',
    getHomeList: base + '/homeList.php',
    getContent: base + '/getContent.php'
}