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

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
// app.use(cors({ origin: 'http://localhost:3000' }))
app.use(cors(corsOptions));


app.use('/api', router)
router.use(express.json())
router.use(express.urlencoded({ extended: false }))

router.post('/login', (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        console.log('Login: ', req.body, user, err, info)
        if (err) return next(err)
        if (user) {
            let exp = (req.body.checktoken == 'on') ? '7d' : '1d'
            const token = jwt.sign(user, db.SECRET, {
                expiresIn: exp
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

router.get('/foo',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
        return res.send({ message: 'Foo' })

    });

/* GET user profile. */
router.get('/profile',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
        res.send(req.user)
    });

router.post('/register',
    async (req, res) => {
        try {
            const SALT_ROUND = 10
            const { username, email, password } = req.body
            if (!username || !email || !password)
                return res.json({ message: "Cannot register with empty string" })
            if (db.checkExistingUser(username) !== db.NOT_FOUND)
                return res.json({ message: "Duplicated user" })

            let id = (users.users.length) ? users.users[users.users.length - 1].id + 1 : 1
            hash = await bcrypt.hash(password, SALT_ROUND)
            users.users.push({ id, username, password: hash, email })
            res.status(200).json({ message: "Register success" })
        } catch {
            res.status(422).json({ message: "Cannot register" })
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
        allnewuserbook1.date = req.body.date
        allnewuserbook1.checkin = req.body.checkin
        allnewuserbook1.checkout = req.body.checkout
        bookingDeluxe = { "list": [...bookingDeluxe.list, allnewuserbook1] }

        res.send(bookingDeluxe)
    })

router.route('/bookingDeluxe/:booking_id')
    .get((req, res) => {
        const bookingId = req.params.booking_id
        const id = bookingDeluxe.list.findIndex(item => +item.id === +bookingId)
        if (id >= 0) {
            res.send(bookingDeluxe.list[id])
        }
        else {
            res.send({ Status: "Can't found !!" })
        }
    })
    .put((req, res) => {
        const bookingId = req.params.booking_id
        const id = bookingDeluxe.list.findIndex(item => +item.id === +bookingId)
        if (id >= 0) {
            bookingDeluxe.list[id].name = req.body.name
            bookingDeluxe.list[id].surname = req.body.surname
            bookingDeluxe.list[id].date = req.body.date
            bookingDeluxe.list[id].checkin = req.body.checkin
            bookingDeluxe.list[id].checkout = req.body.checkout
        }
        else {
            res.send({ Status: "Can't found" })
        }
    })
    .delete((req, res) => {
        const bookingId = req.params.booking_id
        const id = bookingDeluxe.list.findIndex(item => +item.id === +bookingId)
        if (id >= 0) {
            bookingDeluxe.list = bookingDeluxe.list.filter(item => +item.id !== +bookingId)
            res.send(bookingDeluxe)
        }
        else {
            res.send({ Status: "Can't found !!" })
        }
    })

/* -----------------------------------------------------------Booking Prime-------------------------------------------------------- */
router.route('/bookingPrime')
    .get((req, res) => res.send(bookingPrime))
    .post((req, res) => {
        let allnewuserbook2 = {}
        allnewuserbook2.id = (bookingDeluxe.list.length) ? bookingDeluxe.list[bookingDeluxe.list.length - 1].id + 1 : 1
        allnewuserbook2.name = req.body.name
        allnewuserbook2.surname = req.body.surname
        allnewuserbook2.date = req.body.date
        allnewuserbook2.checkin = req.body.checkin
        allnewuserbook2.checkout = req.body.checkout
        bookingPrime = { "list": [...bookingPrime.list, allnewuserbook2] }

        res.send(bookingPrime)
    })

router.route('/bookingPrime/:booking_id')
    .get((req, res) => {
        const bookingId = req.params.booking_id
        const id = bookingPrime.list.findIndex(item => +item.id === +bookingId)
        if (id >= 0) {
            res.send(bookingPrime.list[id])
        }
        else {
            res.send({ Status: "Can't found !!" })
        }
    })
    .put((req, res) => {
        const bookingId = req.params.booking_id
        const id = bookingPrime.list.findIndex(item => +item.id === +bookingId)
        if (id >= 0) {
            bookingPrime.list[id].name = req.body.name
            bookingPrime.list[id].surname = req.body.surname
            bookingPrime.list[id].date = req.body.date
            bookingPrime.list[id].checkin = req.body.checkin
            bookingPrime.list[id].checkout = req.body.checkout
        }
        else {
            res.send({ Status: "Can't found" })
        }
    })
    .delete((req, res) => {
        const bookingId = req.params.booking_id
        const id = bookingPrime.list.findIndex(item => +item.id === +bookingId)
        if (id >= 0) {
            bookingPrime.list = bookingPrime.list.filter(item => +item.id !== +bookingId)
            res.send(bookingPrime)
        }
        else {
            res.send({ Status: "Can't found !!" })
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

