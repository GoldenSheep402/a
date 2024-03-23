!(function() {
    fetch('http://120.26.103.53/test', {
        method: 'GET' // 使用GET方法访问
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Request failed with status ' + response.status);
        }
        return response.text(); // 获取响应文本
    })
    .then(data => {
        console.log(data); // 打印响应数据
    })
    .catch(error => {
        console.error('Error:', error); // 打印错误信息
    });
})();
