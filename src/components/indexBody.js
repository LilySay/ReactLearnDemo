import React from 'react';

export default class ComponentIndexBody extends React.Component{
    constructor(){
        super();//调用基类的所有的初始化方法
        this.state = {//初始化赋值(state的作用只属于当前的类，不污染其他模块)
            username : "Parry",
            age : 20
        };
    }

    render(){
        setTimeout(()=>{
            //更改 state 的时候
            this.setState({
                username : "IMOOC",
                age : 30
            });
        },4000);

        return(
            <div>
                <h2>页面的主体内容</h2>
                <p>
                    {this.state.username} 
                    {this.state.age} 
                    {this.props.userId}
                    {this.props.username}
                </p>
            </div>
        )
    }
}