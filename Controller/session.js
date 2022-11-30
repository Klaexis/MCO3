exports.checkAuth = function(req, res, next){
    if(req.session.username){
        res.redirect('/Home');
    }
    else{
        return next();
    }
};

exports.isAuth = function(req, res, next){
    if(req.session.username){
        return next();
    }
    else{
        res.redirect('/');
    }
};
