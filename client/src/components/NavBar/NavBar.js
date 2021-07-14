import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


class NavBar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
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
                <NavLink to="/consumables">
                    <Menu.Item
                    name='consumable'
                    active={activeItem === 'consumable'}
                    onClick={this.handleItemClick}
                    />
                </NavLink>
                
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        )
    }

}

export default NavBar;