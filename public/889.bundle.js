(self.webpackChunksaltydogui=self.webpackChunksaltydogui||[]).push([[889],{6053:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(7294),o=n(5697),i=n.n(o);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(p,e);var t,n,o,i,u,s=(i=p,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(i);if(u){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=s.call(this,e)).state={hasError:!1},t}return t=p,o=[{key:"getDerivedStateFromError",value:function(e){return console.log(e),{hasError:!0}}}],(n=[{key:"componentDidCatch",value:function(e,t){console.error("err: ",e,"error info: ",t)}},{key:"render",value:function(){var e=this.state.hasError,t=this.props.children;return e?r.createElement("div",null,r.createElement("img",{src:"/images/error.svg",alt:"error",title:"error"}),r.createElement("h1",null,":( Something went wrong.",r.createElement("br",null),"Please Reload the Page")):t}}])&&c(t.prototype,n),o&&c(t,o),p}(r.Component);s.propTypes={children:i().element.isRequired};const p=s},5889:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var r=n(7294),o=n(3379),i=n.n(o),u=n(2574);i()(u.Z,{insert:"head",singleton:!1});const c=u.Z.locals||{};var a=n(6053);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=r.lazy((function(){return n.e(425).then(n.bind(n,425))})),h=r.lazy((function(){return n.e(562).then(n.bind(n,2562))}));const g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(l,e);var t,n,o,i,u=(o=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(o);if(i){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),d(b(t=u.call(this)),"logOutHandler",(function(){(0,useAuth().setAuthTokens)()})),d(b(t),"menuClickHandler",(function(e){t.setState({open:!0,value:e})})),t.state={open:!1,value:"Overview"},t}return t=l,(n=[{key:"render",value:function(){return r.createElement("div",{className:c.DashBoard},r.createElement("div",{className:c.Menu_Div},r.createElement(a.Z,null,r.createElement(r.Suspense,{fallback:r.createElement("div",null,"Loading...")},r.createElement(m,{displayItem:this.menuClickHandler})))),r.createElement("div",{className:c.Main_Div},r.createElement(a.Z,null,r.createElement(r.Suspense,{fallback:r.createElement("div",null,"Loading...")},r.createElement(h,{displayItem:this.state.value})))))}}])&&f(t.prototype,n),l}(r.Component)},2574:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"._1QbbcQpjkbR5ruH_BsvfQd {\n  display: grid;\n  grid-template-areas:\n    'menu main';\n  grid-template-columns: 300px 75%;\n}\n\n._2cSKqx8WOWB9dfMkTKO3ti {\n  background: #282e33;\n  grid-area: menu;\n}\n\n._3-N2HkbXTSRZFc-FJ2M3bb {\n  background-color: #606468;\n  grid-area: main; \n  width: 80vw;\n  height: auto;\n  min-height: 1400px;\n}\n/* \nbackground-image: linear-gradient(to left, #00BFFF, #8A2BE2); <=== blue to purple \n\nbackground-image: linear-gradient(to left, #ff0066, #FF4500); <=== pink to red\n\nbackground-image: linear-gradient(to top right, \t#00CED1, #00FF7F); <=== green to turq\n\nbackground-image: linear-gradient(to bottom left,#FF69B4, #9932CC); <== pink to purple\n\n*/",""]),o.locals={DashBoard:"_1QbbcQpjkbR5ruH_BsvfQd",Menu_Div:"_2cSKqx8WOWB9dfMkTKO3ti",Main_Div:"_3-N2HkbXTSRZFc-FJ2M3bb"};const i=o}}]);