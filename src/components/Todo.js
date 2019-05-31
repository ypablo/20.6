import React from 'react';
import style from '../containers/App.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    };

    render() {
        return (
            <div className={style.Todo}>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        );
    }

};
export default Todo;