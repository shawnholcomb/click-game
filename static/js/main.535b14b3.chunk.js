(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(2),o=a.n(n),r=(a(15),a(6)),l=a(3),i=a(4),m=a(7),u=a(5),g=a(8);a(16),a(17);var h=function(e){return s.a.createElement("nav",{className:"navbar"},s.a.createElement("a",{className:"navbar-text",href:"/"},"Clicky Game"),s.a.createElement("span",{className:"message navbar-text"},"Click an image to begin!"),s.a.createElement("span",{className:"navbar-text",score:e.score,topscore:e.topscore},s.a.createElement("p",{className:"my-auto"},"Score: ",e.score," | Top Score: ",e.topscore)))};a(18);var p=function(){return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("header",{className:"header"},s.a.createElement("h1",null,"Clicky Game!"),s.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once!"))))};a(19);var b=function(e){return s.a.createElement("div",{className:"card-container"},e.characters.map(function(t){return s.a.createElement("img",{className:"card-image",src:t.image,alt:"",key:t.key,onClick:function(){e.onClick(t.key)}})}))};a(20);var d=function(){return s.a.createElement("footer",null,s.a.createElement("div",{className:"footer-content"},s.a.createElement("p",{className:"footer-text my-auto mr-2"},"Clicky Game!"),s.a.createElement("img",{className:"react-logo",alt:"react logo",src:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"})))};function k(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),c=e[t];e[t]=e[a],e[a]=c}return e}var w=[{key:1,image:"https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/april.jpg"},{key:2,image:"https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/bebop.jpg"},{key:3,image:"https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/caseyjones.jpg"},{key:4,image:"https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/donatello.jpg"},{key:5,image:"https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/foot.jpg"},{key:6,image:"https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/krang.jpg"},{key:7,image:"https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/leonardo.jpg"},{key:8,image:"https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/michelangelo.jpg"},{key:9,image:"https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/raphael.jpg"},{key:10,image:"https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/rocksteady.jpg"},{key:11,image:"https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/shredder.jpg"},{key:12,image:"https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/splinter.jpg"}],f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={cards:w,score:0,topscore:0,selectedCards:[]},a.tallyScore=function(e){a.state.selectedCards.includes(e)?(console.log("already picked "+e,a.state.score,a.state.topscore),a.state.score>a.state.topscore&&a.setState({topscore:a.state.score}),a.setState({selectedCards:[],score:0})):(console.log("new "+e),a.setState({selectedCards:[].concat(Object(r.a)(a.state.selectedCards),[e]),score:a.state.score+1}))},a.shuffleCards=function(){a.setState({cards:k(w)})},a.onCardClick=function(e){a.tallyScore(e),a.shuffleCards()},a}return Object(g.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(h,{score:this.state.score,topscore:this.state.topscore}),s.a.createElement(p,null),s.a.createElement(b,{characters:this.state.cards,onClick:this.onCardClick}),s.a.createElement(d,null))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.535b14b3.chunk.js.map