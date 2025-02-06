document.addEventListener("DOMContentLoaded", function(e) {
    let myInfo = [
        {
            id: 1,
            username: 'duy55',
            password: '1'
        },
        {
            id: 2,
            username: 'duy56',
            password: '1'
        }
    ];

    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.querySelector('.username');
    const passwordInput = document.querySelector('.password');
    const rememberMe = document.getElementById('rememberMe');

    if (localStorage.getItem('rememberUser')) {
        usernameInput.value = localStorage.getItem('rememberUser');
        rememberMe.checked = true;
    }

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let username = usernameInput.value;
        let password = passwordInput.value;

        let isValidUser = myInfo.some(function (user) {
            return user.username === username && user.password === password;
        });

        if (isValidUser) {
            alert('Đăng nhập thành công!')
            if (rememberMe.checked) {
                localStorage.setItem('rememberUser', username);
            }
        }
        else {
            alert('Tài khoản hoặc mật khẩu không đúng!');
        }
    });
});