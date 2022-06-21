//Bước 1: chia component "input - add"
import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {

    /*bước 4: để làm được, ta phải đặt state cho nó */
    state = {
        title: ''
    }

    /*-------------------
    bước 5.2:"khi thay đổi state ta phải lưu lại state của nó" -> thêm sự kiện onchange
    - handleChangleTitle = 1 arrow f "()=>"
    - input đầu vào là event html cta có*/
    handleChangleTitle = (event) => {
        // this.setState chính = title của cta
        this.setState({
            title: event.target.value
        })
    }
    /*mỗi 1 lần sử dụng onChange cta sẽ lấy đc biến state của component này
    hay mỗi 1 lần ta gõ 1 kí tự thì nó sẽ gọi đến hàm handleChangleTitle và tt gọi đến hàm this.setState.
    ngay lập tức hàm state = { title: ''} nó set lại.
    ---------------------*/

    /*Bước 6: thêm sự kiên click*/
    handleAddTodo = () => {
        /* khi nhập vào input ngay lập tức nó gọi lên th cha để thêm vào listTodo 
        - Điều kiện: check input if(undefide/null/empty) nó sẽ hiện tb lỗi*/

        if (!this.state.title) {
            toast.error("Missing title!")
            //nếu đk if(undefide/null/empty) đúng nó sẽ dùng lại
            return;
        }

        /*- let todo chính = 1 obj*/
        let todo = {
            id: Math.floor(Math.random() * 100),
            title: this.state.title
        }
        this.props.addNewTodo(todo);
        // Mỗi 1 lần nhập xong nó sẽ clear text đã nhập
        this.setState({
            title: ''
        })
    }


    render() {
        /*bước 5.1: đặt truyền vào  title*/
        let { title } = this.state;
        return (
            <div className="add-todo">
                {/* giá trị "value" của input chính bằng title truyền vào */}
                <input type="text" value={title}
                    /* viết f để nó thay đổi giá trị sd arrow f
                    - event: là event của html, ta chỉ việc truyền vào thôi*/
                    onChange={(event) => this.handleChangleTitle(event)}
                />
                <button type="button" className="button-add"
                    onClick={() => this.handleAddTodo()}
                >Add</button>

            </div>
        )
    }

}
export default AddTodo;