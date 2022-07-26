import React, { Component } from 'react'

//function User({ match }) {
class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: null,
            userName: this.props.match.params.userName,
        }
    }
    componentDidMount() {
        this.getData = fetch(`https://api.github.com/users/${this.props.match.params.userName}`)
            .then((response) => response.json())
            .then((data) => {
                //console.log(data)
                this.setState({
                    userData: data,
                    userName: this.props.match.params.userName,
                })
            })
    }
    // componentWillUnmount() {
    //     clearInterval(this.getData)
    // }

    render() {
        console.log(this.props.match.params.userName)
        const { userData } = this.state
        if (!this.state.userData) {
            return null
        }
        const { location, avatar_url, name } = userData
        console.log(this.props.match.params.userName)
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
