//引入模块
const http=require('http');
// 创建服务
const server = http.createServer(function(req, res) {
  // 获取访问本服务器的客户端ip
  console.log(req.connection.remoteAddress);
  // 向客户端发送内容，并结束本次响应
  res.end('hello world');
});
// 启动服务
server.listen(8081, function() {
  console.log('success');
});