
const { log } = console;

const getUser = () => {
    //biz logic
    let user = {
        id: 1,
        name: 'admin'
    };
    //user = null;
    return new Promise((resolve, reject) => {
        if (user) {
            setTimeout(resolve, 1000, user);
        } else {
            setTimeout(reject, 1000, { message: 'User not found' });
        }
    });

};

//main function
async function startApp() {
    //v1 using then and catch ...finally
    getUser()
        .then(response => log(response))
        .catch(err => log(err))
        .finally(() => log('done!!!'));
    //v2 using await keyword 
    try {
        //await replaces then
        const user = await getUser();
        log(user);
    }
    catch (err) {
        log(err)
    }
    finally {
        log('done')
    }

}
startApp();
