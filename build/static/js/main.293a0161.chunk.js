(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1107:function(e,t,a){},1135:function(e,t){},1138:function(e,t,a){},1142:function(e,t,a){},1146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(40),o=a.n(i),s=a(18),c=a(1148),l=a(1149),m=a(3),h=a(15),p=a(16),u=a(50),d=a(43),E=a(51),y=a(7),f=a(44),O=a(45),b=a.n(O),v=(a(1107),a(14)),g=a(17),w={SHOW_PRELOADER:"".concat("COMMON",":SHOW_PRELOADER"),HIDE_PRELOADER:"".concat("COMMON",":HIDE_PRELOADER"),SET_PLAYER:"".concat("COMMON",":SET_PLAYER"),SET_POINTS:"".concat("COMMON",":SET_POINTS"),SET_TEAMS:"".concat("COMMON",":SET_TEAMS"),SET_GAME_OVER:"".concat("COMMON",":SET_GAME_OVER")},S={isShowPreloader:!1,player:{},points:0,teams:[],isGameOver:!1},T={showPreloader:function(){return{type:w.SHOW_PRELOADER}},hidePreloader:function(){return{type:w.HIDE_PRELOADER}},setPlayer:function(e){return{type:w.SET_PLAYER,player:e}},setPoints:function(e){return{type:w.SET_POINTS,points:e}},setTeams:function(e){return{type:w.SET_TEAMS,teams:e}},setGameOver:function(e){return{type:w.SET_GAME_OVER,isGameOver:e}},callApi:function(){return Object(v.a)({},g.RSAA,{endpoint:"",method:"GET",types:["REQUEST","SUCCESS","FAILURE"]})}},k=a(46),P=a.n(k)()("http://local.online:3000"),R={socket:new(function(){function e(){Object(h.a)(this,e)}return Object(p.a)(e,[{key:"start",value:function(){return P.emit("subscribeToTimer",1e3),new Promise(function(e,t){P.on("timer",function(t){return e(t)})})}},{key:"getSocket",value:function(){return P}}]),e}())},x=(a(1138),function(e){return r.a.createElement("div",{className:"game-over"},"Game Over",r.a.createElement("hr",null),r.a.createElement("span",{className:"btn btn-outline-primary",onClick:function(){return e.click()}},"Restart game"))}),A={up:!1,down:!1,left:!1,right:!1},N={up:!1,down:!1,left:!1,right:!1},_=R.socket.getSocket(),M=function(e){function t(){return Object(h.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){this.props.showPreloader(),this.setState({timestamp:0,player:{},points:0}),this.interval=void 0,this.game=void 0,this.ctx=void 0,this.width=0,this.height=0,this.player=void 0,this.playerTmp=void 0}},{key:"componentDidMount",value:function(){var e=this;this.props.hidePreloader();var t=this.props,a=t.setPlayer,n=t.setPoints,r=t.setTeams,i=t.setGameOver;document.addEventListener("keydown",function(e){switch(e.code){case"KeyA":N.left=!0;break;case"KeyW":N.up=!0;break;case"KeyD":N.right=!0;break;case"KeyS":N.down=!0}A.left===N.left&&A.up===N.up&&A.right===N.right&&A.down===N.down||(A=Object(m.a)({},N),_.emit("movement",Object(m.a)({},A,{player:o})))}),document.addEventListener("keyup",function(e){switch(e.code){case"KeyA":N.left=!1;break;case"KeyW":N.up=!1;break;case"KeyD":N.right=!1;break;case"KeyS":N.down=!1}A.left===N.left&&A.up===N.up&&A.right===N.right&&A.down===N.down||(A=Object(m.a)({},N),_.emit("movement",Object(m.a)({},A,{player:o})))});var o=JSON.parse(localStorage.getItem("player"))||{id:this.getId(),name:f.name.firstName(),type:"user",team:Number(Math.random()>.5)};a(o),_.emit("new player",o),this.width=window.innerWidth,this.height=window.innerHeight,this.game=document.getElementById("game");var s=window.devicePixelRatio;this.ctx=this.game.getContext("2d"),this.game.style.width=this.width+"px",this.game.style.height=this.height+"px",this.game.width=this.width*s,this.game.height=this.height*s,this.ctx.scale(s,s),_.on("new player confirm",function(t){t.id===e.props.player.id&&(localStorage.setItem("player",JSON.stringify(t)),a(t),n(t.points))}),_.on("state",function(t){t&&t.room&&t.field&&(r(t.room.teams),e.draw(t.players,t.field,t.bases))}),_.on("game over",function(e){e&&(r(e.teams),i(!0))})}},{key:"getId",value:function(){return btoa((new Date).getTime().toString()).replace(/=/g,"")}},{key:"draw",value:function(e,t,a){this.ctx.clearRect(0,0,this.width,this.height),this.ctx.strokeStyle="#FF0000",this.ctx.strokeRect(t.x,t.y,t.width,t.height);for(var n=0;n<a.length;n++)this.ctx.fillStyle=1===a[n].team?"darkred":"darkblue",this.ctx.beginPath(),this.ctx.arc(a[n].x,a[n].y,a[n].r,0,2*Math.PI),this.ctx.fill(),this.ctx.font="10px Arial",this.ctx.fillText(a[n].name.substr(0,10)+": "+a[n].life,a[n].x-20,1===a[n].team?a[n].y+34:a[n].y-24);for(var r=0;r<e.length;r++)this.playerTmp=e[r],this.playerTmp.isAlive&&(this.ctx.fillStyle="bot"===this.playerTmp.type?1===this.playerTmp.team?"darkred":"darkblue":1===this.playerTmp.team?"red":"blue",this.ctx.beginPath(),this.ctx.arc(this.playerTmp.x,this.playerTmp.y,this.playerTmp.r,0,2*Math.PI),this.ctx.fill(),this.ctx.font="10px Arial",this.ctx.fillText(this.playerTmp.name.substr(0,10)+": "+this.playerTmp.life,this.playerTmp.x-12,this.playerTmp.y-12))}},{key:"clearRoom",value:function(){_.emit("clear room","some room")}},{key:"startGame",value:function(){_.emit("start game",{roomName:"some room",player:this.props.player})}},{key:"restartGame",value:function(){this.clearRoom(),this.startGame(),this.props.setGameOver(!1)}},{key:"render",value:function(){var e=this,t=this.props,a=t.isShowPreloader,n=t.player,i=t.points,o=t.teams,s=t.isGameOver;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"}),r.a.createElement("div",null,"Score: ",i),r.a.createElement("div",null,"Timestamp: ",this.state.timestamp),r.a.createElement("span",{className:"btn btn-outline-primary",onClick:function(){return e.clearRoom()}},"Clear room"),r.a.createElement("span",{className:"btn btn-outline-primary",onClick:function(){return e.startGame()}},"Start game"),a?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",null,"Content"),r.a.createElement("canvas",{id:"game"}),r.a.createElement("div",{className:"leaderboard row"},o&&o.map(function(e,t){return r.a.createElement("div",{key:"team-"+t,className:"col"},r.a.createElement("table",{className:"table table-sm text-light "+(1===t?"bg-danger":"bg-primary")},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"3"},e.name))),r.a.createElement("tbody",null,e.members.map(function(e,a){return r.a.createElement("tr",{key:"member-"+t+"-"+a,className:n.id===e.id?"table-active":""},r.a.createElement("td",{width:"40"},e.isAlive?r.a.createElement("span",null,"\xa0"):r.a.createElement("span",{className:"icon-skeletor"})),r.a.createElement("td",{className:"member-name"},e.name),r.a.createElement("td",{className:"member-points"},e.points))}))))})),s?r.a.createElement(x,{click:function(){return e.restartGame()}}):null)))}}]),t}(n.Component),j=Object(s.b)(function(e){return{isShowPreloader:e.common.isShowPreloader,player:e.common.player,points:e.common.points,teams:e.common.teams,isGameOver:e.common.isGameOver}},function(e){return Object(y.bindActionCreators)(Object(m.a)({},T),e)})(M),G=a(47),D=a(48),I=Object(y.combineReducers)({common:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.SHOW_PRELOADER:return Object(m.a)({},e,{isShowPreloader:!0});case w.HIDE_PRELOADER:return Object(m.a)({},e,{isShowPreloader:!1});case w.SET_PLAYER:return Object(m.a)({},e,{player:t.player});case w.SET_POINTS:return Object(m.a)({},e,{points:t.points});case w.SET_TEAMS:return Object(m.a)({},e,{teams:t.teams});case w.SET_GAME_OVER:return Object(m.a)({},e,{isGameOver:t.isGameOver});default:return e}}}),C=Object(y.createStore)(I,Object(D.composeWithDevTools)(Object(y.applyMiddleware)(G.a,g.apiMiddleware)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(1140),a(1142);o.a.render(r.a.createElement(s.a,{store:C},r.a.createElement(c.a,null,r.a.createElement(l.a,{path:"/",component:j}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},45:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},52:function(e,t,a){e.exports=a(1146)}},[[52,2,1]]]);
//# sourceMappingURL=main.293a0161.chunk.js.map