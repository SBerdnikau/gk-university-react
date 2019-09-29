import React, {Component} from 'react';
import ReactDom from "react-dom";
import './style.css';
import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';
import './app/components/WelcomeModal.css'

class App extends Component{
    render(){
        return(
            <div>
                {/*<WelcomeModal/>*/}
                <Blog/>
            </div>
        );
    }
}

ReactDom.render(
    <App/>,
    document.querySelector('#root')
);


 