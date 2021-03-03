const user = { username: 'angelov12', firstName: 'Emil', lastName: 'Angelov', age: '46' };

const user1 = Object.create({}, {
    username: {
        value: 'petrov14',
        enumerable: true,
        configurable: true,
        writable: true,
    },
    firstName: {
        value: 'Emanuil',
        enumerable: true,
        configurable: true,
        writable: true,
    },
    lastName: {
        value: 'Petrov',
        enumerable: true,
        configurable: true,
        writable: true,
    },
    age: {
        value: '23',
        enumerable: true,
        configurable: true,
        writable: true,
    }

})


user.login = () => {
    console.log(`${user.username} logged in!`)
}

user1.friends = []

Object.defineProperty(user, 'friends', {
    value: [],
    writable:true,
    configurable:true,
    enumerable:true
})

let addFriend = (user1, user2) => {
    user1.friends = [...user1.friends, user2.username];
    user2.friends = [...user2.friends, user1.username];
}

addFriend(user, user1)
console.log(user.friends)
console.log(user1.friends)

