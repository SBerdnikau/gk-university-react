import React, {Component} from 'react';
import Post from './Post';

export default class Blog extends Component{
    render(){
    const postItems = [
        {
            title: 'Статья 1',
            bodyPost: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid ' +
                'aspernatur est, libero porro quaerat quibusdam repellat voluptas voluptates! Quidem.',
            date: new Date().toLocaleString(),
            author: 'Noname'
        },
        {
            title: 'Статья 2',
            bodyPost: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid ' +
                'aspernatur est, libero porro quaerat quibusdam repellat voluptas voluptates! Quidem.',
            date: new Date().toLocaleString(),
            author: 'Noname'
        },
        {
            title: 'Статья 3',
            bodyPost: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid ' +
                'aspernatur est, libero porro quaerat quibusdam repellat voluptas voluptates! Quidem.',
            date: new Date().toLocaleString(),
            author: 'Noname'
        },
        {
            title: 'Статья 4',
            bodyPost: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid ' +
                'aspernatur est, libero porro quaerat quibusdam repellat voluptas voluptates! Quidem.',
            date: new Date().toLocaleString(),
            author: 'Noname'
        },
        {
            title: 'Статья 5',
            bodyPost: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid ' +
                'aspernatur est, libero porro quaerat quibusdam repellat voluptas voluptates! Quidem.',
            date: new Date().toLocaleString(),
            author: 'Noname'
        }
     ];

        return(
            <Post postItems={postItems}/>
        )
    }
}

