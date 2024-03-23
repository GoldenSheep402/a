!(function() {
    // 首先进行注销操作
    fetch('http://127.0.0.1/logout', {
        method: 'GET', // 假设注销是通过GET请求完成的
        credentials: 'include' // 确保Cookie被发送，以允许服务器识别和销毁当前的会话
    }).then(() => {
        // 注销成功，继续登录操作

        // 访问登录页面以获取初始Cookie
        fetch('http://127.0.0.1/login', {
            method: 'GET',
            credentials: 'include' // 确保Cookie被发送和接收
        }).then(() => {
            // 使用获取到的Cookie提交登录表单
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
    });
    
    alert("hello");
})();
