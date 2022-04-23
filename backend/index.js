const express = require('express'),
    app = express(),
    passport = require('passport'),
    port = process.env.PORT || 80,
    cors = require('cors')
    cookie = require('cookie')

const bcrypt = require('bcrypt')

const db = require('./database.js')
let users = db.users
let bookingDeluxe = db.bookingDeluxe
let bookingPrime = db.bookingPrime

require('./passport.js')

const router = require('express').Router(),
    jwt = require('jsonwebtoken')


app.use(cors({ origin: 'http://localhost:3000' }))    

app.use('/api', router)
router.use(express.json())
router.use(express.urlencoded({ extended: false }))

router.post('/login', (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        console.log('Login: ', req.body, user, err, info)
        if (err) return next(err)
        if (user) {
            let expi = (req.body.checktoken == 'on') ? '7d' : '1d'
            const token = jwt.sign(user, db.SECRET, {
                expiresIn: expi
            })
            // req.cookie.token = token
            res.setHeader(
                "Set-Cookie",
                cookie.serialize("token", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== "development",
                    maxAge: 60 * 60,
                    sameSite: "strict",
                    path: "/",
                })
            );
            res.statusCode = 200
            return res.json({ user, token })
        } else
            return res.status(422).json(info)
    })(req, res, next)
})

router.get('/logout', (req, res) => {
    res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", '', {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: -1,
            sameSite: "strict",
            path: "/",
        })
    );
    res.statusCode = 200
    return res.json({ message: 'Logout successful' })
})
 
/* GET user profile. */
router.get('/profile',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => { 
        res.send( req.user)
    });

router.post('/register',
    async (req, res) => {
        try {
            const SALT_ROUND = 10
            const { username, email, age} = req.body
            if (db.checkExistingUser(username) !== db.NOT_FOUND)
                return res.json({ status: "Duplicated user" })

            let id = (users.users.length) ? users.users[users.users.length - 1].id + 1 : 1
            const password = await bcrypt.hash(req.body.password, SALT_ROUND)// build password
            users.users.push({ id, username, password, email, age})
            res.json({ message: "Register success" })
        } catch(err) {
            res.json({ message: "Cannot register" })
            console.log(err)
        }
    })

router.get('/alluser', (req, res) => res.json(db.users.users))

router.get('/', (req, res, next) => {
    res.send('Respond without authentication');
});

/* -----------------------------------------------------------Booking Deluxe-------------------------------------------------------- */
router.route('/bookingDeluxe')
    .get((req, res) => res.send(bookingDeluxe))
    .post((req, res) => {
        let allnewuserbook1 = {}
        allnewuserbook1.id = (bookingDeluxe.list.length) ? bookingDeluxe.list[bookingDeluxe.list.length - 1].id + 1 : 1
        allnewuserbook1.name = req.body.name
        allnewuserbook1.surname = req.body.surname
        allnewuserbook1.email = req.body.email
        allnewuserbook1.tel = req.body.tel
        allnewuserbook1.date = req.body.date
        allnewuserbook1.checkin = req.body.checkin
        allnewuserbook1.checkout = req.body.checkout
        bookingDeluxe = {"list": [...bookingDeluxe.list, allnewuserbook1]}

        res.send(comment)
    })

router.route('/bookingDeluxe/:booking_id')
    .get((req, res) => {
        const bookingId = req.params.booking_id
        const id = bookingDeluxe.list.findIndex(item => +item.id === +bookingId)
        if (id >= 0){
            res.send()
        }
    })

// Error Handler
app.use((err, req, res, next) => {
    let statusCode = err.status || 500
    res.status(statusCode);
    res.json({
        error: {
            status: statusCode,
            message: err.message,
        }
    });
});

// Start Server
app.listen(port, () => console.log(`Server is running on port ${port}`))

