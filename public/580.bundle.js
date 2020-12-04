(self.webpackChunksaltydogui=self.webpackChunksaltydogui||[]).push([[580],{2580:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>g});var r=t(7294),a=t(5697),i=t.n(a),o=t(6829),u=t(1335),s=t(9299),l=t(8664),d=t(3379),c=t.n(d),f=t(4557);c()(f.Z,{insert:"head",singleton:!1});const m=f.Z.locals||{};function v(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var t=[],r=!0,a=!1,i=void 0;try{for(var o,u=n[Symbol.iterator]();!(r=(o=u.next()).done)&&(t.push(o.value),!e||t.length!==e);r=!0);}catch(n){a=!0,i=n}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return t}}(n,e)||function(n,e){if(n){if("string"==typeof n)return p(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?p(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var y=function(n){var e=n.id,t=n.type,a=n.unitOfMeasure,i=v((0,r.useState)(),2),d=(i[0],i[1]),c=v([(0,o.useQuery)(u.Pj,{variables:{id:e},pollInterval:5e3}),(0,o.useQuery)(u.Cd,{variables:{id:t},onCompleted:function(n){return d(n)}})],2),f=c[0],p=f.loading,y=f.data,g=c[1],_=g.loading,b=g.data;if(p||_)return r.createElement(s.Z,null);var $=y.sensor.values,h=r.createElement(l.Z,null,r.createElement("div",{className:m.Sensor_Type},t,":"),r.createElement("div",{className:m.Sensor_Data},$[0].reading,a)),A=r.createElement(l.Z,null,r.createElement("div",{className:m.Sensor_Type},t,":"),r.createElement("div",{className:m.Sensor_Alarm},$[0].reading,a));return $[0].reading>b.alert.maxsetvalue||$[0].reading<b.alert.minsetvalue?A:h};y.propTypes={type:i().string.isRequired};const g=y},1335:(n,e,t)=>{"use strict";t.d(e,{Cd:()=>y,Pj:()=>g,Wk:()=>_,__:()=>b,mi:()=>$,Cr:()=>h});var r=t(4119),a=t.n(r);function i(){var n=p(["\n  mutation updateAlert($input: UpdateAlertInput!) {\n    alert: updateAlert(input: $input) {\n      sensor_id\n      settingsid\n      maxsetvalue\n      minsetvalue\n    }\n  }\n"]);return i=function(){return n},n}function o(){var n=p(["\n  mutation CreateAlert($input: CreateAlertInput!) {\n    alert: createAlert(input: $input) {\n      sensor_id\n      settingsid\n      maxsetvalue\n      minsetvalue\n    }\n  }\n"]);return o=function(){return n},n}function u(){var n=p(["{\n  alerts {\n    sensor_id\n    settingsid\n    maxsetvalue\n    minsetvalue\n    dateset\n  }\n}\n"]);return u=function(){return n},n}function s(){var n=p(["{\n    sensors {\n      correlateid\n      sensorname\n      sensor_id\n    }\n}\n"]);return s=function(){return n},n}function l(){var n=p(["\n  query exportDataQuery($id: ID!, $start: Float, $end: Float) {\n  sensor(correlateid: $id, start: $start, end: $end){\n   correlateid\n   sensor_id\n   sensorname\n   location\n   exportValues {\n     reading_id\n     correlateid\n     reading\n     time\n     date\n   }\n  }\n}\n"]);return l=function(){return n},n}function d(){var n=p(["\n  query monthQuery($id: ID!) {\n  sensor(correlateid: $id){\n   correlateid\n   sensor_id\n   sensorname\n   location\n   monthOfValues {\n     reading_id\n     correlateid\n     reading\n     time\n     date\n   }\n  }\n}\n"]);return d=function(){return n},n}function c(){var n=p(["\n  query weekQuery($id: ID!) {\n  sensor(correlateid: $id){\n   correlateid\n   sensor_id\n   sensorname\n   location\n   weekOfValues {\n     reading_id\n     correlateid\n     reading\n     time\n     date\n   }\n  }\n}\n"]);return c=function(){return n},n}function f(){var n=p(["\n  query sensorQuery($id: ID!) {\n  sensor(correlateid: $id){\n   correlateid\n   sensor_id\n   sensorname\n   location\n   values {\n     reading_id\n     correlateid\n     reading\n     time\n     date\n   }\n  }\n}\n"]);return f=function(){return n},n}function m(){var n=p(["\n query alertQuery($id: ID!) {\n  alert(sensor_id: $id){\n    sensor_id\n    settingsid\n    maxsetvalue\n    minsetvalue\n    dateset\n  }\n }\n"]);return m=function(){return n},n}function v(){var n=p(["\n query valueQuery($id: ID!) {\n  value(reading_id: $id){\n   reading\n   reading_id\n   correlateid\n   date\n   time\n  }\n }\n"]);return v=function(){return n},n}function p(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}t(1745),a()(v());var y=a()(m()),g=a()(f()),_=a()(c()),b=a()(d()),$=a()(l()),h=(a()(s()),a()(u()),a()(o()),a()(i()))},4557:(n,e,t)=>{"use strict";t.d(e,{Z:()=>i});var r=t(3645),a=t.n(r)()((function(n){return n[1]}));a.push([n.id,".Vzt0h5IHwqdBgslMuZCc1 {\n  font-family: futura-pt-bold;\n  font-size: 3vw;\n  margin-top: auto;\n}\n\n._1peK6rkbMttTyRM_Lfu4u {\n  font-family: futura-pt-bold;\n  font-size: 3vw;\n  margin-top: auto;\n  padding-left: 5px;\n}\n\n.tHVvUO3aa86AEB4TDPXGo {\n  color:#e7298a;\n  font-family: futura-pt-bold;\n  font-size: 3vw;\n  margin-top: auto;\n  padding-left: 5px;\n}",""]),a.locals={Sensor_Type:"Vzt0h5IHwqdBgslMuZCc1",Sensor_Data:"_1peK6rkbMttTyRM_Lfu4u",Sensor_Alarm:"tHVvUO3aa86AEB4TDPXGo"};const i=a}}]);