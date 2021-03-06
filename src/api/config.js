// 配置所有请求的接口地址

const base = '/api'

export default {
    login: base + '/login',
    register: base + '/register',
    getUserInfo: base + '/getUserinfo',
    updatePersonal: base + '/updatePersonal',
    uploadPhoto: base + '/uploadPhoto',
    saveArticle: base + '/addArticle',
    getTypeList: base + '/typeList',
    getUserList: base + '/userList',
    getHomeList: base + '/homeList',
    getContent: base + '/getContent',
    getComment: base + '/getComment',
    commentArticle: base + '/commentArticle',
    getBlogTypes: base + '/getBlogTypes'
}