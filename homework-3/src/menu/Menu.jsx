import React , {Component} from 'react';
import './Menu.css';

class Menu extends Component{
    render(){
        const items = this.props.menuItems.map(
            (item, index) => { return <li className={'menuItem'} key={index}>
                <a href={item.href} className={'menuLink'}>{item.title}</a></li>
            });

        return(
            <div>
                <h2 className={'titleMenu'}>{this.props.menuTitle}</h2>
                <ul className={'menuList'}>
                    {items}
                </ul>
            </div>
        );
    }
}

export default Menu;



