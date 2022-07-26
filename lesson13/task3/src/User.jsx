import React from 'react'

const fetchUser = async (suserId) => {
    try {
        const responce = await fetch(`https://api.github.com/users/${suserId}`)
        if (!responce.ok) {
            return null
        }
        const userData = await responce.json()

        return userData
    } catch (err) {
        throw new Error('Failed to get user data')
    }
}

console.log(fetchUser('github'))

function User({ match }) {
    const info = async () => {
        const res = await fetchUser('github')
        return res
    }

    console.log(info())
    return (
        <div className="user">
            {/* <img alt="User Avatar" src={info} className="user__avatar" /> */}
            <div className="user__info">
                <span className="user__name">GitHub</span>
                <span className="user__location">San Francisco,CA</span>
            </div>
        </div>
    )
}

export default User
// <div className="product">{match.params.productId}</div>
