const usersCtrl = {};

usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup');
};

usersCtrl.signUp = (req, res) => {
    res.send('SignUp');
}

usersCtrl.renderSignInForm = (req, res) => {
    res.render('users/signIn')
}

usersCtrl.signIn = (req, res) => {
    res.send('Sign In')
}

usersCtrl.logOut = (req, res) => {
    res.send('LogOut')
}


module.exports = usersCtrl;