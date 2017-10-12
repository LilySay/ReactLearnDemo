var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentIndexBody from './components/indexBody';
import ComponentFooter from './components/footer';

class Index extends React.Component {

  componentWillMount() {//生命周期的钩子（判断页面将要加载的函数逻辑可以写在这个钩子里）
    //定义你的逻辑即可
    console.log("页面将要加载：Index - componentWillMount");
  }

  componentDidMount() {//生命周期的钩子（判断页面已经加载完毕的函数逻辑可以写在这个钩子里）
    console.log("页面加载完毕：Index - componentDidMount");
  }

  render() {
    var componentHeader = <ComponentHeader />;//可以用变量将组件存起来

    /* 演示作用：(可以用在用户登录或未登录的情况下显示不同模块)

      if(用户已登录-->这里指状态){
        var componentHeader = <ComponentLoginedHeader/>
      }else{
        var componentHeader = <ComponentHeader/>
      }
    
    */

    return (
      <div>
        {/*<ComponentHeader/>*/}
        {componentHeader}       {/*用参数的方式调用组件*/}
        <ComponentIndexBody userId={123456} username={"nick"}/>
        <ComponentFooter />
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('example')
)