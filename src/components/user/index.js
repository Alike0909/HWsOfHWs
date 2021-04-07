import React from 'react'

function User() {

    const users = [
        { name: 'Kolya', surname: 'Yanskiy', age: 20 },
        { name: 'Zhanna', surname: 'Kanskaya', age: 24 },
        { name: 'Bolat', surname: 'Zhangeldinov', age: 54 },
    ]
    
    const userItems = users.map((item, i) => <div> {item.name} {item.surname} в возрасте {item.age} лет</div>)

    return (
        <>
            {userItems}
        </>
    )
}

export default User