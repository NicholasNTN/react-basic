import React from "react";
import "./Home.scss"
//import Color from "../HOC/Color";
import { withRouter } from "react-router";
import backGroup from '../../assets/images/z35.jpg';

class Home extends React.Component {
    //componentDidMount giup delays - nó có 1 độ trễ 
    componentDidMount() {
        setTimeout(() => {
            //this.props.history.push('/Todo')
        }, 3000); //hàm sẽ đc chạy sau khoản tg 3s
        //them số đầu tiên là func ta muốn nó thực thi, ts 2 là t/g
    }

    render() {
        console.log(">>Check props: ", this.props)
        return (
            <>
                <header>
                    <div className="overlay">
                        <h1>Simply App</h1>
                        <br />
                        <button>READ MORE</button>
                    </div>
                    {/* <div>
                        <img src={backGroup} alt="" />
                    </div> */}
                </header>
            </>
        )
    }
}
export default withRouter(Home);