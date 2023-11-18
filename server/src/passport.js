const passport = require('passport');
const VKontakteStrategy = require('passport-vkontakte').Strategy;

passport.use('vkontakte', new VKontakteStrategy({
        clientID: process.env.VK_APP_ID,
        clientSecret: process.env.VK_APP_SECRET,
        callbackURL: process.env.VK_REDIRECT_URI,
    },
    (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        done(null, profile);
    }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

module.exports = passport;
