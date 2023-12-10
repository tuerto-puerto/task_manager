const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const formBox = document.querySelector('.form-box');
const body = document.body;

signInBtn.addEventListener('click', function(){
    formBox.classList.remove('active');
    body.classList.remove('active');
});

signUpBtn.addEventListener('click', function(){
    formBox.classList.add('active');
    body.classList.add('active');
});
loginBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const loginUsername = document.querySelector('.form_signin .form__input').value;
    const loginPassword = document.querySelector('.form_signin .form__input[type="password"]').value;
    const registeredUsers = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = registeredUsers.find(user => user.username === loginUsername && user.password === loginPassword);


});

signupBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const signupUsername = document.getElementById('signupUsername').value;
    const signupPassword = document.getElementById('signupPassword').value;
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const isUsernameTaken = existingUsers.some(user => user.username === signupUsername);
});
const API_URL = 'https://6574b9adb2fbb8f6509c96da.mockapi.io/v1/users';

async function loginUser(username, password) {
    try {
        const response = await fetch(API_URL);
        const users = await response.json();
        const existingUser = users.find(user => user.username === username && user.password === password);

        if (existingUser) {
            window.location.href = '2_page.html';
        } else {
            Swal.fire('Error', 'Invalid login credentials. Please try again.', 'error');
        }
    } catch (error) {
        console.error('Error fetching users:', error);
        Swal.fire('Error', 'An error occurred. Please try again later.', 'error');
    }
}

async function registerUser(username, password) {
    try {
        const response = await fetch(API_URL);
        let existingUsers = await response.json();
        const isUsernameTaken = existingUsers.some(user => user.username === username);

        if (isUsernameTaken) {
            Swal.fire('Error', 'The username is already taken. Please choose another one.', 'error');
        } else {
            const newUser = { username, password };
            const registerResponse = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (registerResponse.ok) {
                Swal.fire('Success', 'You have successfully registered!', 'success');
            } else {
                Swal.fire('Error', 'An error occurred. Please try again later.', 'error');
            }
        }
    } catch (error) {
        console.error('Error fetching or registering users:', error);
        Swal.fire('Error', 'An error occurred. Please try again later.', 'error');
    }
}

loginBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const loginUsername = document.querySelector('.form_signin .form__input').value;
    const loginPassword = document.querySelector('.form_signin .form__input[type="password"]').value;

    loginUser(loginUsername, loginPassword);
});

signupBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const signupUsername = document.getElementById('signupUsername').value;
    const signupPassword = document.getElementById('signupPassword').value;

    registerUser(signupUsername, signupPassword);
});
