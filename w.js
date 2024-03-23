!(function() {
    // 第一步：注销当前用户
    fetch('http://127.0.0.1/logout', {
        method: 'GET',
        credentials: 'include'
    }).then(response => {
        // 不管注销是否成功，都继续尝试登录
        console.log('Attempted to logout.');
        // 第二步：登录并尝试注册新用户
        return fetch('http://127.0.0.1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // 包括其他头信息
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
                'Accept-Encoding': 'gzip, deflate',
                'Referer': 'http://127.0.0.1/login',
                'Origin': 'http://127.0.0.1',
                'Connection': 'close',
                'Upgrade-Insecure-Requests': '1',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:124.0) Gecko/20100101 Firefox/124.0'
            },
            credentials: 'include',
            body: 'username=qwerty&password=qwerty'
        });
    }).then(response => {
        if (!response.ok) {
            throw new Error('Login failed');
        }
        return response.text();
    }).then(result => {
        console.log('Login successful', result);
    }).catch(error => {
        console.error('An error occurred:', error);
    });
})();
