(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},50:function(e,t,n){e.exports=n(95)},59:function(e,t,n){},87:function(e,t){},92:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(39),c=n.n(r),i=n(18),s=n(97),l=n(98),m=n(9),d=n(15),u=n(16),E=n(48),p=n(42),h=n(49),O=n(6),v=n(43),w=n.n(v),f=(n(59),n(14)),b=n(17),R={SHOW_PRELOADER:"".concat("COMMON",":SHOW_PRELOADER"),HIDE_PRELOADER:"".concat("COMMON",":HIDE_PRELOADER")},P={isShowPreloader:!1},S={showPreloader:function(){return{type:R.SHOW_PRELOADER}},hidePreloader:function(){return{type:R.HIDE_PRELOADER}},callApi:function(){return Object(f.a)({},b.RSAA,{endpoint:"",method:"GET",types:["REQUEST","SUCCESS","FAILURE"]})}},j=n(44),A=n.n(j)()("http://localhost:3000"),D={socket:new(function(){function e(){Object(d.a)(this,e)}return Object(u.a)(e,[{key:"start",value:function(){return A.emit("subscribeToTimer",1e3),new Promise(function(e,t){A.on("timer",function(t){return e(t)})})}}]),e}())},N=function(e){function t(){return Object(d.a)(this,t),Object(E.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.props.showPreloader(),this.setState({timestamp:0}),D.socket.start().then(function(t){return e.setState({timestamp:t})}).catch(function(e){return console.error(e)})}},{key:"componentDidMount",value:function(){this.props.hidePreloader()}},{key:"render",value:function(){var e=this.props.isShowPreloader;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("img",{src:w.a,className:"App-logo",alt:"logo"}),"Header")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-3"},"Sidebar",o.a.createElement("div",null,"Timestamp: ",this.state.timestamp)),o.a.createElement("div",{className:"col-md-9"},e?o.a.createElement("div",null,"Loading..."):o.a.createElement("div",null,"Content"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4"},"Footer 1"),o.a.createElement("div",{className:"col-md-4"},"Footer 2"),o.a.createElement("div",{className:"col-md-4"},"Footer 3")))}}]),t}(a.Component),g=Object(i.b)(function(e){return{isShowPreloader:e.common.isShowPreloader}},function(e){return Object(O.bindActionCreators)(Object(m.a)({},S),e)})(N),y=n(45),k=n(46),L=Object(O.combineReducers)({common:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P;switch((arguments.length>1?arguments[1]:void 0).type){case R.SHOW_PRELOADER:return Object(m.a)({},e,{isShowPreloader:!0});case R.HIDE_PRELOADER:return Object(m.a)({},e,{isShowPreloader:!1});default:return e}}}),H=Object(O.createStore)(L,Object(k.composeWithDevTools)(Object(O.applyMiddleware)(y.a,b.apiMiddleware)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(90),n(92);c.a.render(o.a.createElement(i.a,{store:H},o.a.createElement(s.a,null,o.a.createElement(l.a,{path:"/",component:g}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,2,1]]]);
//# sourceMappingURL=main.3ed724b9.chunk.js.map