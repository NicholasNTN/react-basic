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
            //c2
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    //deleteAJob là 1 function
    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        // (item :lọc all phananf tử trong mảng => item.id !== job.id : trả ra ptu co id khác với job trả lên)
        this.setState({
            arrJobs: currentJobs
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
                    deleteAJob={this.deleteAJob}
                />
            </>
        )
    }
}
export default LearnComponent;