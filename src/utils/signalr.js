import * as signalR from "@aspnet/signalr";
var connection;
export function start(userId, companyId) {
    connection = new signalR.HubConnectionBuilder()
        .withUrl("https://192.168.2.41:44355/message?userId=" + userId + "&companyId=" + companyId, {
            skipNegotiation: true,
            transport: signalR.HttpTransportType.WebSockets,
        })
        .configureLogging(signalR.LogLevel.Information)
        .build();

    connection.on("messageReceived", (message) => {
        console.log(message);
        console.log("收到全局消息：" + message);
    });
    connection.on("companyMessageReceived", (message) => {
        console.log(message);
        console.log("收到公司消息：" + message);
    });
    connection.on("userMessageReceived", (message) => {
        console.log(message);
        console.log("收到单独消息：" + message);
    });

    connection.start();
}
export function close() {
    connection.stop();
}