import React from "react";
import AddTodo from "./AddTodo";
import './ListTodo.scss';
//3:toast
import { toast } from 'react-toastify';


class ListTodo extends React.Component {

    state = {
        time: "",
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making videos' },
            { id: 'todo3', title: 'Fixing bugs' },
            { id: 'todo4', title: 'Suck!!' },
        ],
        //1.1: add obj edittodo
        editTodo: {

        }
    }

    /*----------------
    ********bước 2: tạo 1 function chuẩn bị cho input - add********
    cách 1
    addNewTodo = (todo) => {
        let currentListTodo = this.state.listTodos;
        currentListTodo.push(todo);

        this.setState({
            listTodos: currentListTodo
        })
    }*/
    //cach 2 
    addNewTodo = (todo) => {
        console.log("..todo:", todo)
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        // 4:Toast - succ/err/info/...
        toast.success("Wow so eazy")
    }
    //------------- */
    /*----------------*/
    //delete - loc todo vaf del nos
    handleDeleteTodo = (todo) => {
        console.log("..todo:", todo)
        // currentTodos noi lua tru tat ca todo
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        //filter: "bo loc" / loc id, neu id bi xoa khac voi cac id con lai no sex del vaf tra ra id con lai
        this.setState({
            listTodos: currentTodos
        })
        toast.success("Delete Succeed")

    }
    /*----------------*/

    /*----------------*/
    //1.2.edit
    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //----save--------
        //editTodo.id === todo.id menu trong state chinhs = menu vừa nhấn vào.
        if (isEmptyObj === false && editTodo.id === todo.id) {

            let listTodosCopy = [...listTodos];

            //Find index of specific object using findIndex method.    
            let objIndex = listTodosCopy.findIndex((obj => obj.id === todo.id));

            //Update object's name property.
            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                // luu thanh cong no se tro ve trang thai ban dau
                editTodo: {}
            })

            toast.success("Update todo succeed")

            return;
        }
        console.log("..todo:", todo)
        this.setState({
            editTodo: todo
            //edittodo chinh bang todo.
        })
    }

    //3.edit
    handleOnChangleEdit = (event) => {
        //editTodo là 1 obj nên sd {... để copy lại}, [...nếu là array]
        //đối với this ta ki nên modify từ state
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        //copy lai edittodo
        this.setState({
            editTodo: editTodoCopy
        })
    }
    /*----------------*/

    render() {
        //lay listTodo ra
        //let listTodos = this.state.listTodos;
        let { listTodos, editTodo } = this.state;
        //1.3.edit - hoac let { editTodo } = this.state;

        /*1.4.edit - kiem tra dk co rong hay khong (empty) */
        let isEmptyObj = Object.keys(editTodo).length === 0;
        /*Neu length = 0 thi nó trả ra isEmptyObj = true và ngược lại */


        return (
            <div className="list-todo-container">

                <AddTodo
                    //bước 3: truyền f xuống cho compo con
                    addNewTodo={this.addNewTodo}
                />

                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <>
                                    <div className="todo-content" key={item.id}>
                                        {/*2.edit - câu điều kiện*/}
                                        {isEmptyObj === true ?
                                            <span> {index + 1}. {item.title} </span>
                                            //nếu isE = true nó sẽ in ra ... và ngược lại
                                            :
                                            <>
                                                {/* check edit co bang item khong neu bang no sẽ in ra ... ngược lại */}
                                                {editTodo.id === item.id ?
                                                    // ? or &&
                                                    <span>
                                                        {index + 1} - <input style={{ background: 0 }} value={editTodo.title}
                                                            //them su kien sua text
                                                            onChange={(event) => this.handleOnChangleEdit(event)}
                                                        />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1}. {item.title}
                                                    </span>
                                                }
                                            </>
                                        }
                                        <> </>
                                        <button className="button-edit"
                                            onClick={() => this.handleEditTodo(item)}
                                        >
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                                "Save" : "Edit"}
                                        </button>
                                        <button className="button-delete"
                                            onClick={() => this.handleDeleteTodo(item)}
                                        // item chinhs = todo
                                        >Del</button>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>

            </div >
        )
    }
}
export default ListTodo;