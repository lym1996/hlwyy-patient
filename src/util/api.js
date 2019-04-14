import axios from 'axios'
import {Message} from 'element-ui'
import { baseURL, objBase, modelBase} from './config'

const errorMsg = '服务器内部错误'
const errorMsg401 = '登陆超时,请重新登录'
const errorFn = err => {
    console.log(err.response.status)
    let status = err.response.status
    if(status == 500) {
        Message.error(errorMsg)
    }
    if(status == 401){
        Message.error(errorMsg401)
    }
    return err
}
const codeerror = d => {
    if (d.data != null && d.data.code == 401) {
        Message.error(d.data.msg)
    }
    return d
}

const post = (_url, obj) => axios.post(_url, obj, objBase).then(codeerror).catch(errorFn)//query参数
const post2 = (_url, body) => axios.post(_url, body, modelBase).then(codeerror).catch(errorFn)//body体
const get = (obj) => axios.get(obj, objBase).then(codeerror).catch(errorFn)
const postfile =  (_url, obj) => axios.post(_url, obj,{ baseURL: baseURL,headers:{'Content-Type':'multipart/form-data'}}).then(codeerror).catch(errorFn)

//需要的接口写下面
const registrate = (param) => post2('/user/registration',param)
const huoqu = (param) => post('/article/folder/save',param)
const list = (token) => get('/article/listArticleFolder?token='+token)

//获取图形验证码
const getImgUrl = (param) => post('/user/getPictureCode',param)
//验证图形验证码
const verifyPictureCode = (param) => post('/user/verifyPictureCode',param)
//获取短信验证码
const getMsgCode = (param) => post('/user/getMessageCode',param)
//注册
const registration = (param) => post('/user/registration',param)
//登录
const login = (param) => post('/user/login',param)
//退出
const logout = (param) => post('/user/logout',param)
//忘记密码
const reSetPassword = (param) => post('/user/reinputPasswoed',param)
//修改密码
const changePwd = (param) => post('/user/changePassword',param)
//所有科室
const getDept = (hospitalId) => get('/section/getByHosId?hospitalId='+hospitalId)
//获取所有就诊人
const getPatient = (token,type) => get('/patient/get?token='+token+'&type='+type)
//添加就诊人
const addPatient = (param) => post('/patient/add',param)
//修改就诊人
const editPatient = (param) => post('/patient/update',param)
//删除就诊人
const deletePatient = (param) => post('/patient/delete',param)
//获取本周排班信息
const getWeekSchdule = (departmentId,type) => get('/scheduling/getWeak?sectionId='+departmentId+'&type='+type)
//获取具体日期上下午排班
const getDaySchdule = (departmentId,timeType,date) => get('/scheduling/getByDate?sectionId='+departmentId+'&timeType='+timeType+'&date='+date)
//更新排班
const updateSchdule = (param) => post('/scheduling/updateScheduling',param)
//获取医生信息
const getDoc = (doctorId) => get('/doctor/get?doctorId='+doctorId)
//暴露接口
export default {
    baseURL,
    getImgUrl,
    getMsgCode,
    login,
    logout,
    changePwd,
    verifyPictureCode,
    reSetPassword,
    registration,
    getDept,
    getWeekSchdule,
    getDaySchdule,
    updateSchdule,
    getPatient,
    editPatient,
    addPatient,
    deletePatient,
    getDoc
}