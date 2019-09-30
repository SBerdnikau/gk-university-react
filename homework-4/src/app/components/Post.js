import React, {Component} from 'react'
import './Post.css'

export default class Post extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts: this.props.postItems,
        }
        this.myRefTitle = React.createRef();
        this.myRefBody = React.createRef();
        this.myRefAuthor = React.createRef();
        this.addPost = this.addPost.bind(this);
    }

    addPost(event) {
        event.preventDefault();
         const post = {
             title: this.myRefTitle.current.value,
             bodyPost: this.myRefBody.current.value,
             date: new Date().toLocaleString(),
             author: this.myRefAuthor.current.value
         };
         console.log(post)

        const postsNew =  [...this.state.posts, post];
        this.setState({posts: postsNew});
    }

    render(){
        const items  = this.state.posts.map(
            (item, index) => {return <li className={'postItem'} key={index}>
                        <h2 className={'postTitle'}>{item.title}</h2>
                        <p className={'postBody'}>{item.bodyPost}</p>
                        <p className={'postDate'}>Дата: {item.date}</p>
                        <p className={'postAuthor'}>Автор: {item.author}</p></li>
        });

        return(
            <div>
                <ul className={'postList'}>
                    {items}
                </ul>
                <hr/>
                <form className={'formPost'}>
                    <label>Введите заголовок статьи:
                        <input ref={this.myRefTitle} className={'formTitle'} type={'text'} placeholder={'Название'}/>
                    </label>
                    <label>Введите статью:
                        <textarea ref={this.myRefBody} className={'formBody'}  placeholder={'Статья'}/>
                    </label>
                    <label>Введите имя автора:
                        <input ref={this.myRefAuthor} className={'formAuthor'} type={'text'} placeholder={'Имя'}/>
                    </label>
                    <button className={'formBtm'} onClick={this.addPost}>Добавить статью</button>
                </form>
            </div>
        )
    }
}

