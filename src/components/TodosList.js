import React from "react";
import Todoitem from "./TodoItem";
class TodosList extends React.Component {

    render() {
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <Todoitem key={todo.id}
                    todo={todo}
                    handleChangeProps={this.props.handleChangeProps}
                    deleteTodoProps={this.props.deleteTodoProps}
                        
                    />
                ))}
            </ul>
        );
    }
}
export default TodosList