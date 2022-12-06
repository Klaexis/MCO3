exports.checkAuth = function(req, res, next){
    if(req.session.username){ //If there is session go to /Home
        res.redirect('/Home');
    }
    else{ //If there is no session
        return next(); //Jump out of the callback
    }
};

exports.isAuth = function(req, res, next){
    if(req.session.username){ //If there is session
        return next(); //Jump out of the callback
    }
    else{ //If there is no session go back to login page
        res.redirect('/');
    }
};
