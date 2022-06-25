//tự viết props với hoc
//dùng kiểu func component vì fc nó nhận props

import React from "react";

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//truyền vào  component, wrapperCompo - bọc 1 compo bên ngoài nó
const Color = (WrappedComponent) => {
    const colorRandom = getRandomColor();
    /*props: nhận đầu vào ntn thì phải nhả đầu ra như vậy,
    + vd: khi dùng home component
        - đầu vào (WrappedComponent) là home compo
        - props: chính là props của home compo, nó có props ntn thì phải truyền sang y như vậy 
    */
    return (props) => (
        <div style={{ color: colorRandom }}>
            <WrappedComponent {...props} />
        </div>
    )
}
export default Color;
