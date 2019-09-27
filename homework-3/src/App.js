import React, {Component} from 'react';
import ReactDom from "react-dom";
import Login from './login/Login';
import Menu from './menu/Menu';
import './login/Login.css';
import './style.css';

class App extends Component{
    render(){

        const menuItems = [
            {href:'/', title:'Главная'},
            {href:'/about', title:'О нас'},
            {href:'/services', title:'Сервисы'},
            {href:'/contacts', title:'Контакты'},
        ];

        return(
            <div>
                <h1>Hello React</h1>
                <Login/>
                <Menu menuTitle={"Меню"} menuItems={menuItems}/>
            </div>
        );
    }
}

ReactDom.render(
    <App/>,
    document.querySelector('#root')
);


 