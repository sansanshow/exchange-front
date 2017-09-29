// 开发环境
const baseUrl = 'localhost:8089';
module.exports = {
    projectConfig: {
        default: {
            name: "dev",
            rootPath: "api",
            baseURL: "",
        },
    },
    // 图片验证码
    VerifyImgSrc: 'http://' + baseUrl + '/pVerifyCode.ok',
    // websocket
    WsUrl: "ws://" + baseUrl + "/websocket"
}