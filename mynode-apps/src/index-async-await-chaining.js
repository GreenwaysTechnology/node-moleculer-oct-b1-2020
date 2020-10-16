const { log } = console;

const getUser = () => {
    //biz logic
    let user = {
        id: 1,
        name: 'admin'
    };
    //user=null;
    return new Promise((resolve, reject) => {
        if (user) {
            setTimeout(resolve, 1000, user);
        } else {
            setTimeout(reject, 1000, { message: 'User not found' });
        }
    });

};
const login = (user) => {
    //biz logic
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, { message: 'Login Success' });
        } else {
            setTimeout(reject, 1000, { message: 'login failed' });
        }
    });

}

const showpage = (status) => {
    //biz logic
    return new Promise((resolve, reject) => {
        if (status.message === 'Login Success') {
            setTimeout(resolve, 1000, { message: 'You are admin' });
        } else {
            setTimeout(reject, 1000, { message: 'You are guest' });
        }
    });

};

async function startApp() {
    //v1
    getUser()
        .then(user => login(user))
        .then(status => showpage(status))
        .then(page => log(page))
        .catch(err => {
            log(err);
        });
    //v2
    try {
        const user = await getUser();
        const status = await login(user);
        const page = await showpage(status);
        log(`${user.name} ${status.message} ${page.message}`);

    } catch (err) {
        log(err)
    }
    finally {
        ///
    }

}
startApp();