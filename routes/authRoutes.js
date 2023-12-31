const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate(
        'google', {
          scope: ['profile', 'email'] // access user profile information such as name and email address
        })
    );
      
    // Auth with Google
    app.get('/auth/google/callback', passport.authenticate('google')); 

    app.get('/api/logout', (req, res) => {
      req.logout();
      res.send(req.user)
    })

    // Testing authentication 
    app.get('/api/current_user', (req, res) => {
      res.send(req.user);
    })
}
