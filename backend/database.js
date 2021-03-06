const bcrypt = require('bcrypt')

let users = {
    users: [
        { id: 1, username: 'aleeyeen', password: '$2b$10$0AsMSQaUB0AlLnKzgeUOfOE.hWUodtuR4NOU954XLVy2gy3lBWsdO', email: 'aleeyeen@gmail.com', checktoken : 'on'},
        { id: 2, username: 'harista', password: '$2b$10$1Bu4tImM/Ms9rtU.8/n/COWpzUAGFB6YlsO5xZqFih1JUxafyFFXa', email: 'harista@gmail.com', checktoken: 'on'},
    ]
}

let bookingDeluxe ={
    list: [
        { id: 1, name: 'Aleeyeen', surname: 'Mad-E',  date: '2022-04-19', checkin: '15:30 ', checkout: '17:30 '},
        { id: 2, name: 'Harista', surname: 'Wansoo',   date: '2022-04-24', checkin: '10:30 ', checkout: '12:30 '}
    ]
}

let bookingPrime ={
    list:[
        { id: 1, name: 'Aleeyeen', surname: 'Mad-E',  date: '2022-04-15', checkin: '15:30 ', checkout: '17:30'},
        { id: 2, name: 'Harista', surname: 'Wansoo',   date: '2022-04-14', checkin: '10:30 ', checkout: '12:30'}
    ]
} 

const SECRET = 'your_jwt_secret'
const NOT_FOUND = -1

exports.users = users
exports.bookingDeluxe = bookingDeluxe
exports.bookingPrime = bookingPrime

exports.SECRET = SECRET
exports.NOT_FOUND = NOT_FOUND

exports.setUsers = function(_users) { 
  users = _users;
}

exports.setbookingDeluxe = function(_bookingDeluxe){
    bookingDeluxe = _bookingDeluxe
}

exports.setbookingPrime = function(_bookingPrime){
    bookingPrime = _bookingPrime
}

// === validate username/password ===
exports.isValidUser = async (username, password) => { 
    const index = users.users.findIndex(item => item.username === username) 
    return await bcrypt.compare(password, users.users[index].password) // compare password
}

// return -1 if user is not existing
exports.checkExistingUser = (username) => {
    return users.users.findIndex(item => item.username === username)
}