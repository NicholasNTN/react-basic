import React from "react";
import { toast } from "react-toastify";
import "./Child.scss"

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

    handleOnclickDelete = (job) => {
        toast.success('Are you sure you want to delete !')
        console.log('>>handleOnclickDelete: ', job)
        this.props.deleteAJob(job)
    }

    render() {          //là 1 function
        console.log('>>> Check props: ', this.props)
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        //console.log('> Check conditional: ', check)
        return (
            <>
                {showJobs === false ?
                    //nếu giống if, đúng nó sẽ in ra <div...
                    <div>
                        <button className="bth-show" onClick={() => this.handleShowHide()}>Show</button>
                    </div>

                    :
                    //ngược lại, in ra <div..
                    <>
                        <div className="job-lists">
                            {
                                // eslint-disable-next-line array-callback-return
                                arrJobs.map((item, index) => {
                                    if (item.Salary >= 0) {
                                        return (
                                            <div className="" key={item.id}>
                                                {/* key:giúp react biết ptu nào tđ, và cập nhật chính xác pt đó */}
                                                {index + 1}. {item.Title} - {item.Salary} $
                                                <> </>
                                                <span>
                                                    <button className="bth-delete" onClick={() => this.handleOnclickDelete(item)}>Del</button>
                                                </span>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>

                        <div>
                            <button className="bth-hide" onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}
export default ChildComponent;  