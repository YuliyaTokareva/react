import React, { Component } from 'react'

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: null,
            userName: this.props.match.params.userName,
        }
    }
    fetchUserInfo() {
        console.log('do fetch')
        fetch(`https://api.github.com/users/${this.props.match.params.userName}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    userData: data,
                    userName: this.props.match.params.userName,
                })
            })
    }
    componentDidMount() {
        this.getData = this.fetchUserInfo()
        console.log('do did')
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.userName !== prevProps.match.params.userName) {
            this.fetchUserInfo()
            console.log('do uppdate')
        }
        //console.log(`${this.props.match.params.userName}  ${prevProps.match.params.userName}`)
    }

    render() {
        // console.log(this.props.match.params.userName)
        const { userData } = this.state
        if (!this.state.userData) {
            return null
        }
        const { location, avatar_url, name } = userData
        console.log('do')
        return (
            <div className="user">
                <img alt="User Avatar" src={avatar_url} className="user__avatar" />
                <div className="user__info">
                    <span className="user__name">{name}</span>
                    <span className="user__location">{location}</span>
                </div>
            </div>
        )
    }
}

export default User
// <div className="product">{match.params.productId}</div>
