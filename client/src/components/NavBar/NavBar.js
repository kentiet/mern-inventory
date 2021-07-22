import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


class NavBar extends Component {
    constructor(props) { 
        super(props)

        this.state = { 
            activeItem: 'home',
        }
    }


    handleItemClick = ({ name }) => this.setState({ activeItem: name })

    handleLogOut = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        localStorage.removeItem('expires');

        window.location.replace('/')
    }

    

    render() {
        const { activeItem } = this.state
        if(this.props.isAuth === null || "") { 
            return (
                <Menu pointing secondary>
                    <NavLink to="/login">
                        <Menu.Item
                            name='Login'
                            active={activeItem === 'Login'}
                            onClick={this.handleItemClick}
                        />
                    </NavLink>
                </Menu> 
            )
        } else { 
        return (
                <Menu pointing secondary>
                    <NavLink to="/">
                        <Menu.Item
                            name='home'
                            active={activeItem === 'home'}
                            onClick={this.handleItemClick}
                        />
                    </NavLink>
                    <NavLink to="/assets">
                        <Menu.Item
                            name='asset'
                            active={activeItem === 'asset'}
                            onClick={this.handleItemClick}
                        />
                    </NavLink>
                    <NavLink to="/items">
                        <Menu.Item
                        name='consumable'
                        active={activeItem === 'consumable'}
                        onClick={this.handleItemClick}
                        />
                    </NavLink>
                    <NavLink to="/transactions">
                        <Menu.Item
                        name='transactions'
                        active={activeItem === 'transactions'}
                        onClick={this.handleItemClick}
                        />
                    </NavLink>
                    
                    <Menu.Menu position='right'>
                        <NavLink to="/">
                            <Menu.Item
                                name='logout'
                                active={activeItem === 'logout'}
                                onClick={this.handleLogOut}
                            />
                        </NavLink>
                    </Menu.Menu>
                    
                </Menu>
            )
        }
    }

}

export default NavBar;