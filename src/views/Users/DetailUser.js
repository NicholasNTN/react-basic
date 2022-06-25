import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

//ROUTER PRAMETERS
class DetailUser extends React.Component {

    state = {
        user: {}
    }

    async componentDidMount() { //async: chuyen thanh ham bat dong bo
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            //dung backtick sd ${} noi chuoi
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
            console.log('>>Check res user: ', res)
        }

    }

    handleBackButton = () => {
        this.props.history.push('/user')
    }

    render() {
        let { user } = this.state;
        //check rong 
        let isEmptyObj = Object.keys(user).length === 0;
        return (
            <>
                <div>Detail Users with id: {this.props.match.params.id}</div>
                {/* //{this.props.match.params} lay tham so tren duong link url */}
                <br />
                {isEmptyObj === false &&
                    <>
                        <div>
                            <img src={user.avatar} alt="" />
                        </div>
                        <div>Name : {user.first_name} {user.last_name}</div>
                        <div>Email : {user.email}</div>
                        <div>
                            <button type="button" onClick={() => this.handleBackButton()}>Back</button>
                        </div>
                    </>
                }
            </>
        )
    }
}
//boc de lay tham so tren duong link URL
//dung "match" : de lay param:id
export default withRouter(DetailUser);