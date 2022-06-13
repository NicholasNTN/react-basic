import React from "react";

class MyComponent extends React.Component {

    state = {
        name: '',
        age: '23'
    }

    handleChangleName = (event) => {
        this.setState({ //thay doi state
            name: event.target.value
        })
    }

    handleClickButton = () => {
        alert(`Click`)
    }

    render() {                          //là 1 function
        return (
            <>
                <div className="fist">
                    <input value={this.state.name} type='text'
                        onChange={(event) => this.handleChangleName(event)}
                    />
                    <br />
                    WELL... My name is {this.state.name}
                    {/* or 2nt way */}
                    <br />
                    WELL... My age is {this.state['age']}

                </div>
                <div className="second">
                    <button onClick={() => { this.handleClickButton() }}>Click</button>
                    {/* jsx nên onClick = {}
                        - ()=>{} arrow fuction or ()=> */}
                </div>
            </>
        )
    }
}
export default MyComponent;