const router = require('express').Router()
const {User} = require('../../model/index')
const bcrypt = require('bcrypt')

// end point with /api/users

// create a new user
router.post('/signup', async (req, res)=>{
    try{
        // checks if the body is valid
        if(req.body.email && req.body.password && req.body.username){
            // check that username is unique, starting by pulling username info
            let users = await User.findAll({
                attributes: ['username', 'email']
            })
            // extract names from sequelize response
            let userNames = users.map((user) => {
                let userRow = user.get({ plain: true});
                return userRow.username;
            })

            //compare to submitted username
            if (userNames.includes(req.body.username)) {
                res.status(400).json({message: 'Username already exists'})
                return;
            }

            let userEmails = users.map((user) => {
                let userRow = user.get({ plain: true});
                return userRow.email;
            })
            if (userEmails.includes(req.body.email)) {
                res.status(400).json({message: 'Email already in use'})
                return;
            }

            // If username check passed, construct a new user
            const newUser = await User.create({
                email: req.body.email,
                username: req.body.username,
                password: req.body.password
            })

            // set up a session status for logged in
            req.session.save(()=>{
                // keeping track of user id
                req.session.userId = newUser.id

                // keeping track of login status
                req.session.loggedIn = true

                res.status(200).json({message: "Created a new user successfully", newUser})
            })

        }else {
            res.status(404).json({message: "Invalid body passed"})
        }

    }catch(err){
        res.status(500).json({message: "Error while making a new user", err})
    }
})

// user logs in
router.post('/login', async (req, res) => {
    try{
        
        // checks if the body is valid
        if(req.body.email && req.body.password){
            // checks if the user email is valid
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            })

            // if user does not exist by the email
            if(!user){
                
                res.status(404).json({message: "Incorrect Email or Password"})
                return
            }

            // checks if their password matches
            const isValid = await bcrypt.compare(req.body.password, user.password)
            console.log(user.password)

            // if password does not match
            if(!isValid){
                
                res.status(404).json({message: "Incorrect Email or Password"})
                return
            }

            // set up a session status for logged in once the password matches
            req.session.save(()=>{
                // keeping track of user id
                req.session.userId = user.id

                // keeping track of login status
                req.session.loggedIn = true

                res.status(200).json({message: "Logged in successfully", user})
            })
        }else {
            res.status(404).json({message: 'Incorrect Email or Password'})
            return
        }

    }catch(error){
        res.status(500).json({message: "Error while logging in", error})
    }
})

// user log out
router.post('/logout', async (req, res)=> {
    // destroys the session
    try{
        req.session.destroy(()=>{
            res.status(204).end()
        })
    }catch(error){
        res.status(500).json({message: "internal server error", error})
    }
})

module.exports = router