import React from "react";
import { toast } from "react-toastify";

class AddComponent extends React.Component {

    state = {
        Title: '',
        Salary: ''
    }

    handleChangleTitleJob = (event) => {
        this.setState({
            Title: event.target.value
        })
    }

    handleChangleSalary = (event) => {
        this.setState({
            Salary: event.target.value
        })
    }

    handSubmit = (event) => {
        event.preventDefault() //ko tai lai website or (ngan chan hanh dong cua submit)

        //nếu ko nhập vào Title hay Salary thì sẽ hiện tbao lỗi
        if (!this.state.Title || !this.state.Salary) {
            toast.error('Missing required params !')
            //đồng thời nó sẽ return ko chạy đống code đằng sau
            return;
        }

        //alert('Submited successfully')

        console.log(`>>>Check input data: `, this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            Title: this.state.Title,
            Salary: this.state.Salary
        })

        this.setState({
            Title: "",
            Salary: ""
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job's Title:</label><br />

                <input
                    type="text"
                    value={this.state.Title}
                    onChange={(event) => this.handleChangleTitleJob(event)}
                /><br />

                <label htmlFor="lname">Salary:</label><br />

                <input
                    type="text" value={this.state.Salary}
                    onChange={(event) => this.handleChangleSalary(event)}
                />
                <br /><br />

                <input type="submit" value="Submit"
                    onClick={(event) => this.handSubmit(event)}
                />
            </form>
        );
    }
}

export default AddComponent;