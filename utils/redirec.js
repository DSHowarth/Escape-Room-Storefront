// redirects the user to profile page if the user is logged in
const redirToProf = function(req, res, next){
    if(req.session.loggedIn){
        // redirects the user
        res.redirect('/profile')
        return;
    }
    next()
}

module.exports = redirToProf