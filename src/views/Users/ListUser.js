import React from "react";
import axios from "axios";
import "./ListUser.scss";
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {

    state = {
        listUsers: []
    }

    //sau khi chay render lan 1 no se chay len DidMouse.
    async componentDidMount() {
        //khi sd await phai them async
        //componentDidMount() {
        //cach 1: 1.lay data xong no se chay vao ham then, va no se thuc hien khi no co 1 bien data"res"
        // axios.get('https://reqres.in/api/users?page=1')
        //     .then(res => {
        //         console.log('>> Check res: ', res.data.data)
        //         /*response.data: .data chir in ra cai no can lay  
        //         Neu chi muon lay ra list user thi res.data.data*/
        //     })
        //Cach 2: ES7
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
            //res.data.data ? :neu co no se set dieu kien -> res.data.data : :neu ko co no se set -> [rong]
        })
    }

    handleViewDetailUser = (user) => {
        // console.log(">>Check user: ", this.props)
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        let { listUsers } = this.state;
        return (
            <>
                <div className="list-user-container">
                    <div className="title">
                        ___Fetch all list user___
                    </div>

                    <div className="list-user-content">
                        {/* //check dieu kien, neu ko check data rong ham map se bi loi */}
                        {listUsers && listUsers.length > 0 &&
                            listUsers.map((item, index) => {
                                return (
                                    <>
                                        <div className="child" key={item.id}
                                            onClick={() => this.handleViewDetailUser(item)}
                                        >
                                            {index + 1}- {item.first_name} {item.last_name}
                                        </div>

                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </>
        )
    }
}
export default withRouter(ListUser);