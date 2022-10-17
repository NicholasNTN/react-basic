import React from "react";
import "./Home.scss"
import Color from "../HOC/Color";
import { withRouter } from "react-router";
//import backGroup from '../../assets/images/z35.jpg';
import { connect } from 'react-redux'

class Home extends React.Component {
    //componentDidMount giup delays - nó có 1 độ trễ 
    componentDidMount() {
        setTimeout(() => {
            //this.props.history.push('/Todo')
        }, 3000); //hàm sẽ đc chạy sau khoản tg 3s
        //them số đầu tiên là func ta muốn nó thực thi, ts 2 là t/g
    }

    handleDeleteUser = (user) => {
        console.log('>>> check user delete:', user)
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = (user) => {
        console.log('>>> check user create:', user)
        this.props.addUserRedux(user);
    }

    render() {
        console.log(">>Check props: ", this.props)
        let listUser = this.props.dataRedux;
        return (
            <>
                <header>
                    <div className="overlay">
                        <h1>Simply App</h1>
                        <br />
                        <button classname='bth-overlay'>READ MORE</button>
                    </div>
                    {/* <div>
                        <img src={backGroup} alt="" />
                    </div> */}
                    <div>
                        {listUser && listUser.length > 0 &&
                            listUser.map((item, index) => {
                                return (
                                    <div className="user">
                                        {index + 1} - {item.name}
                                        &nbsp; <span onClick={() => this.handleDeleteUser(item)}>x</span>
                                    </div>
                                )
                            })}
                        <button onClick={() => this.handleCreateUser()}> Add new </button>
                    </div>
                </header>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToRedux = (dispatch) => {
    //ham cua redux
    //payload la dau vao cua deleteUserRedux
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER'}),
    }
}
// export default withRouter(Home);
//HOC
export default connect(mapStateToProps, mapDispatchToRedux)(Color(Home));