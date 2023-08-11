const router = require('express').Router()
const {User} = require('../../model/index')

// end point with /api/users

// create a new user
router.post('/signup', async (req, res)=>{
    try{
        // checks if the body is valid
        if(req.body.email && req.body.password && req.body.username){
            // construct a new user
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
                req.session.log

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

// user log out

module.exports = router