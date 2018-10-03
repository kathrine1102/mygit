
post('/url', {title: '深入浅出Node.js'}, function(data){
    console.log('收到响应');
});
console.log('发送Ajax结束');