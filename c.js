!(async function(){
  const url = 'http://localhost/login'; // 登录接口的URL
  const data = {
    username: 'testtesttest',
    password: '12345678', // 在实际应用中，应当避免以明文形式发送密码
  };

  try {
    const response = await fetch(url, {
      method: 'POST', // 发送POST请求
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      // 将JavaScript对象转换为适合在POST请求中发送的表单数据
      body: Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&')
    });

    if (response.ok) {
      console.log('Registration/Login successful');
      // 这里可以根据响应进一步处理，例如重定向到主页
    } else {
      console.error('Registration/Login failed with status:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
})();
