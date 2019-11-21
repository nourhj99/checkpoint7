import React from 'react';
export default class DidMount extends React.Component{

    componentDidMount() {
        setTimeout(function (){ alert("Hello messages"); }, 2000);
    }

    componentWillUnmount(){
        alert("Goodbye");
    }
    render() {
       return <div></div>

    }
}