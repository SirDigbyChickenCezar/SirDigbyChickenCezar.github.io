(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+66b":function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),I=t("VsWU"),i=t.n(I);a.a=function(e){var a=e.variables,t=function(e,a){return l.a.createElement(l.a.Fragment,null,l.a.createElement("code",null,e,": ",a),"\n")},n=[];if(a)for(var I=0,o=Object.entries(a);I<o.length;I++){var c=o[I],g=c[0],r=c[1];n.push(t(g,r))}return l.a.createElement("div",{className:i.a.container},l.a.createElement("div",{className:i.a.codeBox},l.a.createElement("pre",null,l.a.createElement("span",null,"State variables:"),"\n","\n",n.map((function(e,a){return n[a]})))))}},"5W7g":function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),I=t("Y3iX"),i=t.n(I);a.a=function(e){var a=e.children;return l.a.createElement("div",{className:i.a.buttonContainer},a)}},"5Wrh":function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),I=t("Pvz/"),i=t.n(I);a.a=function(e){var a=e.id,t=e.onClick,n=e.label;return l.a.createElement("button",{className:i.a.flexButton,onClick:t,id:a},n)}},"7oih":function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),I=t("Wbzz"),i=t("Cj5n"),o=t.n(i),c=t("hGi/"),g=t("kzbP"),r=t.n(g),m=t("nnH0"),C=t.n(m),u=function(e){return Object(c.a)(e),l.a.createElement("div",null,l.a.createElement("div",{className:C.a.logoBox},l.a.createElement("img",{src:r.a,className:C.a.logoImage})))},d=function(e){var a=e.title;return n.createElement("div",null,n.createElement("title",null,a),n.createElement(I.a,{className:o.a.headingStyles,to:"/"},n.createElement(u,null),a),!1)},N=t("G86H"),s=t.n(N);t("WvRm"),a.a=function(e){var a=e.children,t=e.title;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:s.a.main},l.a.createElement("div",{className:s.a.header},l.a.createElement(d,{title:"sandroid.dev"})),l.a.createElement("div",{className:s.a.content},l.a.createElement("div",{className:s.a.dividerUpper}),t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,t)," ",l.a.createElement("div",{className:s.a.divider})),l.a.createElement("div",{className:"fadeIn"},a))))}},Cj5n:function(e,a,t){e.exports={subtitleText:"Title-module--subtitleText--3jFUU",squareB:"Title-module--squareB--1Ox5x",squareW:"Title-module--squareW--3laYP",headingStyles:"Title-module--headingStyles--1RN0_"}},ESCu:function(e,a,t){},G86H:function(e,a,t){e.exports={main:"Layout-module--main--3NgEk",header:"Layout-module--header--3zaAq",content:"Layout-module--content--nwbxQ",divider:"Layout-module--divider--3g3SL",dividerUpper:"Layout-module--dividerUpper--3NEoI",date:"Layout-module--date--v4T4_"}},NpJU:function(e,a,t){"use strict";t.r(a);var n=t("KQm4"),l=t("hGi/"),I=t("q1tI"),i=t.n(I),o=t("7oih"),c=t("+66b"),g=t("5W7g"),r=t("5Wrh"),m=(t("ESCu"),function(e){for(var a=document.getElementsByClassName("flexBox"),t=e,n=function(e){var n,l=null!=t&&t.length?t:"hsl("+(n=function(e,a){return Math.floor(Math.random()*(a-e+1))+e})(0,360)+","+n(42,98)+"%,"+n(40,90)+"%)";setTimeout((function(){a[e].style.backgroundColor=l}),100*e-e*e*20)},l=0;l<a.length;l++)n(l)});a.default=function(e){Object(l.a)(e);var a=Object(I.useState)(!1),t=a[0],C=a[1],u=Object(I.useState)(0),d=u[0],N=u[1],s=function(e){console.log("Clearing interval "+e),clearInterval(e),C(!1),m("#ffffff")},A=function(e){var a=function(e){document.getElementsByClassName("flexBox");if(e){var a=window.setInterval((function(){var e=void 0;Math.random()>.7&&(e="#ffffff"),m(e)}),200+100*Math.random());return console.log("Setting interval "+a),a}console.log("party already happenin")}(!t);return N(a),t&&s(d),C(!e)};return i.a.createElement(o.a,null,i.a.createElement(c.a,{variables:{isPartyMode:JSON.stringify(t),lastInterval:JSON.stringify(d)}}),i.a.createElement(g.a,null,i.a.createElement(r.a,{onClick:function(){return A(t)},id:"partyButton",label:"Party Mode"}),i.a.createElement(r.a,{onClick:function(){return(e=d)&&s(e),void m();var e},id:"generateColors",label:"Colour the boxes"}),i.a.createElement(r.a,{onClick:function(){return s(d)},id:"resetColors",label:"Reset\r colors"})),i.a.createElement("p",null,i.a.createElement("span",null,"A lovely flex container and a centered flexbox: ")),i.a.createElement("div",{className:"flexContainer justifyCenter"},i.a.createElement("div",{className:"flexBox"})),i.a.createElement("p",null,i.a.createElement("span",null,"Flex container with three flexboxes with even spacing: ")),i.a.createElement("div",{className:"flexContainer justifySpaceEvenly"},i.a.createElement("div",{className:"flexBox"}),i.a.createElement("div",{className:"flexBox"}),i.a.createElement("div",{className:"flexBox"})),i.a.createElement("p",null,i.a.createElement("span",null,"Stupid amount of boxes: ")),i.a.createElement("div",{className:"flexContainer justifySpaceEvenly"},Object(n.a)(Array(50)).map((function(e,a){return i.a.createElement("div",{className:"flexBox"})}))),i.a.createElement("div",{className:"spacer"}),i.a.createElement("p",null,i.a.createElement("span",null,"Stupid amount of boxes in an AUTO grid: ")),i.a.createElement("div",{className:"gridContainer justifySpaceEvenly"},Object(n.a)(Array(200)).map((function(e,a){return i.a.createElement("div",{className:"flexBox small"})}))))}},"Pvz/":function(e,a,t){e.exports={flexButton:"Button-module--flexButton--35QpC"}},VsWU:function(e,a,t){e.exports={container:"StateVariables-module--container--2sbRO",codeBox:"StateVariables-module--codeBox--2y7Nm"}},WvRm:function(e,a,t){},Y3iX:function(e,a,t){e.exports={buttonContainer:"ButtonContainer-module--buttonContainer--20YhE"}},"hGi/":function(e,a,t){"use strict";function n(e){if(null==e)throw new TypeError("Cannot destructure undefined")}t.d(a,"a",(function(){return n}))},kzbP:function(e,a){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnDQogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iDQogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIg0KICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIg0KICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCINCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIg0KICAgd2lkdGg9IjI0Ig0KICAgaGVpZ2h0PSIyNCINCiAgIHZpZXdCb3g9IjAgMCAyNCAyNCINCiAgIHZlcnNpb249IjEuMSINCiAgIGlkPSJzdmc4NDUiDQogICBzb2RpcG9kaTpkb2NuYW1lPSJsb2dvLnN2ZyINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMC4xICgzYmMyZTgxM2Y1LCAyMDIwLTA5LTA3KSI+DQogIDxtZXRhZGF0YQ0KICAgICBpZD0ibWV0YWRhdGE4NTEiPg0KICAgIDxyZGY6UkRGPg0KICAgICAgPGNjOldvcmsNCiAgICAgICAgIHJkZjphYm91dD0iIj4NCiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+DQogICAgICAgIDxkYzp0eXBlDQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+DQogICAgICA8L2NjOldvcms+DQogICAgPC9yZGY6UkRGPg0KICA8L21ldGFkYXRhPg0KICA8ZGVmcw0KICAgICBpZD0iZGVmczg0OSIgLz4NCiAgPHNvZGlwb2RpOm5hbWVkdmlldw0KICAgICBwYWdlY29sb3I9IiNmZmZmZmYiDQogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2Ig0KICAgICBib3JkZXJvcGFjaXR5PSIxIg0KICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIg0KICAgICBncmlkdG9sZXJhbmNlPSIxMCINCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIg0KICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCINCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiINCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3Ig0KICAgICBpZD0ibmFtZWR2aWV3ODQ3Ig0KICAgICBzaG93Z3JpZD0iZmFsc2UiDQogICAgIGlua3NjYXBlOnpvb209IjExLjMxMzcwOSINCiAgICAgaW5rc2NhcGU6Y3g9Ii0xNi4zNzE1MDQiDQogICAgIGlua3NjYXBlOmN5PSItMy4xMzAxOTMxIg0KICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiDQogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCINCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSINCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnODQ1IiAvPg0KICA8cmVjdA0KICAgICBzdHlsZT0iZmlsbDojZDQ1NTAwO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjc1NTkwNiINCiAgICAgaWQ9InJlY3Q4NzUiDQogICAgIHdpZHRoPSI2LjcxMTU2NjQiDQogICAgIGhlaWdodD0iOS4xNzEzMDI4Ig0KICAgICB4PSI4LjY0NDIxNjUiDQogICAgIHk9IjYuNDMwMDI1NiIgLz4NCiAgPHJlY3QNCiAgICAgc3R5bGU9ImZpbGw6I2Q0NTUwMDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC43NTU5MDYiDQogICAgIGlkPSJyZWN0ODc5Ig0KICAgICB3aWR0aD0iMi40OTQ4NzU0Ig0KICAgICBoZWlnaHQ9IjYuODUyMTIyOCINCiAgICAgeD0iOC42NDg3ODI3Ig0KICAgICB5PSIxNS4yNjkzNTYiIC8+DQogIDxyZWN0DQogICAgIHN0eWxlPSJmaWxsOiNkNDU1MDA7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNzU1OTA2Ig0KICAgICBpZD0icmVjdDg3OS0yIg0KICAgICB3aWR0aD0iMi40OTQ4NzU0Ig0KICAgICBoZWlnaHQ9IjYuODUyMTIyOCINCiAgICAgeD0iMTIuODY1NDc1Ig0KICAgICB5PSIxNS4yNjkzNTYiIC8+DQogIDxyZWN0DQogICAgIHN0eWxlPSJmaWxsOiNkNDU1MDA7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNzU1OTA2Ig0KICAgICBpZD0icmVjdDg3OS0yLTAiDQogICAgIHdpZHRoPSIyLjQ5NDg3NTQiDQogICAgIGhlaWdodD0iNi44NTIxMjI4Ig0KICAgICB4PSItOC45NDkxOTk3Ig0KICAgICB5PSIxNS4xNjg2OTEiDQogICAgIHRyYW5zZm9ybT0icm90YXRlKC05MC4wOTE3NSkiIC8+DQogIDxyZWN0DQogICAgIHN0eWxlPSJmaWxsOiNkNDU1MDA7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNzU1OTA2Ig0KICAgICBpZD0icmVjdDg3OS0yLTAtMiINCiAgICAgd2lkdGg9IjIuNDk0ODc1NCINCiAgICAgaGVpZ2h0PSI2Ljg1MjEyMjgiDQogICAgIHg9Ii04Ljg5MzgyOTMiDQogICAgIHk9IjEuODQ3OTU1MiINCiAgICAgdHJhbnNmb3JtPSJyb3RhdGUoLTg5LjgyMDg5NCkiIC8+DQogIDxjaXJjbGUNCiAgICAgc3R5bGU9ImZpbGw6I2Q0NTUwMDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC43NTU5MDYiDQogICAgIGlkPSJwYXRoOTI2Ig0KICAgICBjeD0iMTIiDQogICAgIGN5PSIzLjE1ODAzOTYiDQogICAgIHI9IjIuMjYxMDg1MyIgLz4NCjwvc3ZnPg0K"},nnH0:function(e,a,t){e.exports={logoBox:"Logo-module--logoBox--3ANLM",logoImage:"Logo-module--logoImage--2QBij"}}}]);
//# sourceMappingURL=component---src-pages-experiments-css-tests-js-aec205c8643f6fa6e76f.js.map