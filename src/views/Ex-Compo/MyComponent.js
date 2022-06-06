import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Nicho',
        age: '23'
    }

    render() {                          //là 1 function
        return (
            <>
                <div className="fist">
                    WELL... My name is {this.state.name}
                    {/* or 2nt way */}
                    WELL... My name is {this.state['name']}

                </div>
                <div className="second">
                    My age is {this.state.age}
                </div>
            </>
        )
    }
}
export default MyComponent;