// 线上环境
const baseUrl = '192.168.0.116:9080';
module.exports = {
    projectConfig: {
        default: {
            name: "prod",
            rootPath: "",
            baseURL: 'http://' + baseUrl,
        },
    },
    // 图片验证码
    VerifyImg: 'http://' + baseUrl + '/pVerifyCode.ok',
    // websocket
    WsUrl: "ws://" + baseUrl + "/websocket"
}