//nested function,function compostion, callback nesting,callback chaining....

//a function may return data, or error
const { log } = console;

const getUser = (resolve, reject) => {
    //biz logic
    let user = {
        id: 1,
        name: 'admin'
    };
    //user=null;
    if (user) {
        setTimeout(resolve, 1000, user);
    } else {
        setTimeout(reject, 1000, { message: 'User not found' });
    }
};

//login; login function will be only if getUser returns user data.
const login = (user, resolve, reject) => {
    //biz logic
    if (user.name === 'admin') {
        setTimeout(resolve, 1000, { message: 'Login Success' });
    } else {
        setTimeout(reject, 1000, { message: 'login failed' });
    }

}

const showpage = (status, resolve, reject) => {
    //biz logic
    if (status.message === 'Login Success') {
        setTimeout(resolve, 1000, { message: 'You are admin' });
    } else {
        setTimeout(reject, 1000, { message: 'You are guest' });
    }

}

getUser(user => {
    log('get user is called')
    //callback chaining/nesting/composion
    login(user, status => {
        log('login is called')
        showpage(status, spage => {
            log('show page  is called')
            log(spage)
        }, errorpage => {
            log(errorpage)
        });
    }, loginerror => {
        log(loginerror)
    });
}, error => {
    log(error)
});