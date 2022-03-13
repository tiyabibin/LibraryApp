var express=require("express");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var User = require('../model/Userdata');

const loginRouter=express.Router();
// loginRouter.use(require("express-session")({
//     secret: "Rusty is a dog",
//     resave: false,
//     saveUninitialized: false
// }));
 
// loginRouter.use(passport.initialize());
// loginRouter.use(passport.session());
 
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
function router(nav){
// Showing secret page
loginRouter.get("/secret", isLoggedIn, function (req, res) {
    res.render("secret");
});

//Showing login form
loginRouter.get("/", function (req, res) {   
            res.render('login',{
              nav,
              title:'LogIn'             
          })     
});
 
//Handling user login
loginRouter.post("/", passport.authenticate("local", {
    successRedirect: "books",
    failureRedirect: "login"
}), function (req, res) {
});
 
//Handling user logout
loginRouter.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});
 
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}
return loginRouter;
}
module.exports=router;    
console.log("server listening at login");