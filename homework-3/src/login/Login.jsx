import React, {Component} from 'react';
import './Login.css';



 class Login extends Component {
     render() {
         return (
             <div className={'loginPanel'}>
                 <input className={'loginInput'} type={'text'} placeholder={'Введите логин'}/>
                 <input className={'loginPsw'} type="password" placeholder={'Введите пароль'}/>
                 <input className={'loginBtn'} type="button" value={'Ввод'}/>
             </div>
         );
     }
 }

 export  default  Login;
