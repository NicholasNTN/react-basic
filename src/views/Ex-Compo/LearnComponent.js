import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class LearnComponent extends React.Component {

    state = {

        //tạo 1 mảng arrays
        arrJobs: [
            { id: 'job1', Title: 'Developer', Salary: '1000' },
            { id: 'job2', Title: 'Tester', Salary: '950' },
            { id: 'job3', Title: 'Project managers', Salary: '1100' }
        ]
    }

    //add new function - '(job') là tham số đầu vào nên truyền vào cái gì sẽ in cái đó ra
    addNewJob = (job) => {
        console.log('>Check job from perent:', job)
        //code thuần
        //let currentJobs = this.state.arrJobs
        //currentJobs.push(job)
        //short more
        this.setState({
            //1.arrJobs: currentJobs
            //2.arrJobs: this.state.arrJobs.push(job)
            //c2
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                // bởi vì function addNewJob có tham số đầu vào là (job) nên cta ko cần dùng '{this.addNewJob()}'
                />

                <ChildComponent
                    //tạo props
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}
export default LearnComponent;