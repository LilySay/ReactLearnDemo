import React from 'react';

export default class ComponentFooter extends React.Component {

    componentWillMount() {//生命周期的钩子（判断页面将要加载的函数逻辑可以写在这个钩子里）
        //定义你的逻辑即可
        console.log("页面将要加载：ComponentFooter - componentWillMount");
      }
    
      componentDidMount() {//生命周期的钩子（判断页面已经加载完毕的函数逻辑可以写在这个钩子里）
        console.log("页面加载完毕：ComponentFooter - componentDidMount");
      }

    render() {
        return (
            <footer>
                <h1>这里是页脚，一般放置版权的一些信息。</h1>
            </footer>
        )

    }
}