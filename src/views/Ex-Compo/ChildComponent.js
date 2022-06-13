import React from "react";

// const ChildComponent = (props) =>{
//     let {arrJobs} = props;
//     return(
//         ...
//     )
//     function component
// }

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    render() {          //là 1 function
        console.log('>>> Check props: ', this.props)
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        //let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        //so sánh gtri showJobs với true (có thể so sánh với gtri > < ...)
        // "?": so sánh đk này showJobs === true ?
        //so sánh showJobs === true nếu là đúng thì nó lấy ptu đầu tiên 'showJobs = true'
        //nếu pt sai thì nó sẽ lấy pt thứ 2 sau dấu ":"
        //console.log('> Check conditional: ', check)
        return (
            <>
                {showJobs === false ?
                    //nếu giống if, đúng nó sẽ in ra <div...
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>

                    :
                    //ngược lại, in ra <div..
                    <>
                        <div className="job-lists">
                            {arrJobs.map((item, index) => {
                                if (item.Salary >= 1000) {
                                    return (
                                        <div key={item.id}>
                                            {/* key:giúp react biết ptu nào tđ, và cập nhật chính xác pt đó */}
                                            {item.Title} - {item.Salary} $
                                        </div>
                                    )
                                }
                            })}
                        </div>

                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}
export default ChildComponent;  