import React from "react";
import "./ListTodo.scss";


class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making videos' },
            { id: 'todo3', title: 'Fixing bugs' },
            { id: 'todo4', title: 'Suck!!' },
        ]
    }

    render() {
        //lay listTodo ra
        //let { listTodos } = this.state;
        //let listTodos = this.state.listTodos;
        return (
            <div className="list-todo-container">
                <div className="add-todo">
                    <input type="text" />
                    <button type="button">Add</button>
                </div>
                <div className="list-todo-content">
                    <div className="todo-content">
                        <span>this's content app todos</span>
                        <> </>
                        <button>
                            add
                        </button>
                        <button>Del</button>
                    </div>
                    <div className="todo-content">
                        <span>this's content app todos</span>
                        <> </>
                        <button>
                            add
                        </button>
                        <button>Del</button>
                    </div>
                    <div className="todo-content">
                        <span>this's content app todos</span>
                        <> </>
                        <button>
                            add
                        </button>
                        <button>Del</button>
                    </div>
                </div>

            </div>
        )
    }
}
export default ListTodo;