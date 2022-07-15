import React, { Component } from "react";

class User extends Component {
    state = {
        user: null,
    };
    componentDidMount() {
        this.fetchUser(this.props.userId);
    }
    fetchUser = (userId) => {
        fetch(`https://api.github.com/users/${userId}`)
            .then((respons) => respons.json())
            .then((data) => {
                this.setState({
                    user: data,
                });
            });
    };

    render() {
        const { user } = this.state;
        if (!user) {
            return null;
        }
        const { avatar_url, name, location } = user;
        return (
            <>
                <div className='user'>
                    {/* <!-- avatar_url --> */}
                    <img
                        alt='User Avatar'
                        src={avatar_url}
                        className='user__avatar'
                    />
                    <div className='user__info'>
                        {/* <!-- name --> */}
                        <span className='user__name'>{name}</span>
                        {/* <!-- location --> */}
                        <span className='user__location'>{location}</span>
                    </div>
                </div>
            </>
        );
    }
}

export default User;

///Первое прохождение
//////нажали на кнопку Show
// ----constructor,
// ----render(),
// ----componentDidMount;

//Второе прохождение
/////После нажатия кнопки 'Update'
// ----shouldComponentUpdate();
// ----render();
// ----componentDidUpdate()

// После нажатия кнопки 'Hide'
// ----componentWillUnmount()
