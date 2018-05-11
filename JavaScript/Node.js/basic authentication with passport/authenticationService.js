module.exports.ensureAuthenticated = function(req, res, next) {
    if (req.isAuthenticated){
        next();
    }
    else {
        req.flash('error', 'You need to sign in!');
        res.redirect('/');
    }
}