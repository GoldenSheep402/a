!(function() {
    // 步骤1: 访问登录页面以获取初始Cookie
    fetch('http://127.0.0.1/login', {
        method: 'GET',
        credentials: 'include' // 确保Cookie被发送和接收
    }).then(() => {
        // 步骤2: 使用获取到的Cookie提交登录表单
        const data = {
            username: 'test5',
            password: '12345678',
        };

        fetch('http://127.0.0.1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `username=${encodeURIComponent(data.username)}&password=${encodeURIComponent(data.password)}`,
            credentials: 'include' // 确保Cookie在这个请求中也被发送
        })
        .then(response => response.text())
        .then(result => {
            console.log('Login result:', result);
            // 在这里处理登录成功后的逻辑
        })
        .catch(error => {
            console.error('Login failed:', error);
        });
    });
     alert("hello");
})();
