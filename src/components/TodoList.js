import React from 'react';
import style from '../containers/App.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                text: 'clean room'
            }, {
                id: 2,
                text: 'wash the dishes'
            }, {
                id: 3,
                text: 'feed my cat'
            }]
        };
    }

    render() {
        return (
            <div className={style.Todo}>
                <ul>
                    <li></li>
                </ul>
            </div>
        );
    }

};
export default TodoList;