import React from 'react';
// import ReactDOM from 'react-dom';//用不到，可以暂时注释

export default class ComponentHeader extends React.Component{

    componentWillMount() {//生命周期的钩子（判断页面将要加载的函数逻辑可以写在这个钩子里）
        //定义你的逻辑即可
        console.log("页面将要加载：ComponentHeader - componentWillMount");
      }
    
      componentDidMount() {//生命周期的钩子（判断页面已经加载完毕的函数逻辑可以写在这个钩子里）
        console.log("页面加载完毕：ComponentHeader - componentDidMount");
      }

    render(){
        return(
            <header>
                <h1>这里是头部</h1>
            </header>
        )
    }
}
