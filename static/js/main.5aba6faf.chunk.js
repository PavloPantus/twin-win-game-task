(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(t,e,a){t.exports=a(14)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),i=a(3),o=a.n(i),s=a(1),u=(a(11),a(5)),b=(a(12),a(13),a(4)),p=a.n(b),r=function(t){var e=t.setAnimationCountHandler,a=t.animationMove,n=t.animationStopSlot,i=t.slides,o=t.winLineTop,s=t.winLineMiddle,u=t.winLineBottom;return c.a.createElement("div",{className:"container"},o&&c.a.createElement("div",{className:"winLineTop"}),s&&c.a.createElement("div",{className:"winLineMiddle"}),u&&c.a.createElement("div",{className:"winLineBottom"}),c.a.createElement("div",{onAnimationIteration:function(){e()},className:p()(["slot",{"animation-move":a,"animation-stop":n}])},i.map(function(t){return c.a.createElement("img",{key:t.key,src:t.path,alt:""})})))},j=function(t){var e=t.setResults,a=Object(n.useMemo)(function(){for(var t=[],e=1;e<=13;e+=1)t.push({path:"images/game-images/(".concat(e,").jpg"),key:e.toString()+Math.random()*Math.random()});for(var a=0;a<3;a+=1)t.push({path:t[a].path,key:Math.random()*Math.random()});return t},[]),i=function(){for(var t=[],e=Object(u.a)(a.slice(0,13)),n=function(a){var n,c,i=e.indexOf(e[(n=0,c=e.length-1,Math.floor(Math.random()*(c-n+1))+n)]);t.push(e[i]),e=e.filter(function(t,e){return e!==i})},c=0;c<13;c+=1)n();for(var i=0;i<3;i+=1)t.push({path:t[i].path,key:Math.random()*Math.random()});return t},o=Object(n.useState)(i()),b=Object(s.a)(o,2),p=b[0],j=b[1],O=Object(n.useState)(!1),m=Object(s.a)(O,2),h=m[0],l=m[1],f=Object(n.useState)(0),S=Object(s.a)(f,2),d=S[0],v=S[1],w=Object(n.useState)(!1),E=Object(s.a)(w,2),L=E[0],M=E[1],g=Object(n.useState)(!1),T=Object(s.a)(g,2),y=T[0],N=T[1],k=Object(n.useState)(!1),A=Object(s.a)(k,2),B=A[0],_=A[1],C=Object(n.useState)(!1),H=Object(s.a)(C,2),x=H[0],I=H[1],J=Object(n.useState)(i()),P=Object(s.a)(J,2),R=P[0],Y=P[1],q=Object(n.useState)(!1),z=Object(s.a)(q,2),D=z[0],F=z[1],G=Object(n.useState)(0),K=Object(s.a)(G,2),Q=K[0],U=K[1],V=Object(n.useState)(!1),W=Object(s.a)(V,2),X=W[0],Z=W[1],$=Object(n.useState)(!1),tt=Object(s.a)($,2),et=tt[0],at=tt[1],nt=Object(n.useState)(!1),ct=Object(s.a)(nt,2),it=ct[0],ot=ct[1],st=Object(n.useState)(!1),ut=Object(s.a)(st,2),bt=ut[0],pt=ut[1],rt=Object(n.useState)(i()),jt=Object(s.a)(rt,2),Ot=jt[0],mt=jt[1],ht=Object(n.useState)(!1),lt=Object(s.a)(ht,2),ft=lt[0],St=lt[1],dt=Object(n.useState)(0),vt=Object(s.a)(dt,2),wt=vt[0],Et=vt[1],Lt=Object(n.useState)(!1),Mt=Object(s.a)(Lt,2),gt=Mt[0],Tt=Mt[1],yt=Object(n.useState)(!1),Nt=Object(s.a)(yt,2),kt=Nt[0],At=Nt[1],Bt=Object(n.useState)(!1),_t=Object(s.a)(Bt,2),Ct=_t[0],Ht=_t[1],xt=Object(n.useState)(!1),It=Object(s.a)(xt,2),Jt=It[0],Pt=It[1],Rt=Object(n.useState)(i()),Yt=Object(s.a)(Rt,2),qt=Yt[0],zt=Yt[1],Dt=Object(n.useState)(!1),Ft=Object(s.a)(Dt,2),Gt=Ft[0],Kt=Ft[1],Qt=Object(n.useState)(0),Ut=Object(s.a)(Qt,2),Vt=Ut[0],Wt=Ut[1],Xt=Object(n.useState)(!1),Zt=Object(s.a)(Xt,2),$t=Zt[0],te=Zt[1],ee=Object(n.useState)(!1),ae=Object(s.a)(ee,2),ne=ae[0],ce=ae[1],ie=Object(n.useState)(!1),oe=Object(s.a)(ie,2),se=oe[0],ue=oe[1],be=Object(n.useState)(!1),pe=Object(s.a)(be,2),re=pe[0],je=pe[1],Oe=Object(n.useState)(i()),me=Object(s.a)(Oe,2),he=me[0],le=me[1],fe=Object(n.useState)(!1),Se=Object(s.a)(fe,2),de=Se[0],ve=Se[1],we=Object(n.useState)(0),Ee=Object(s.a)(we,2),Le=Ee[0],Me=Ee[1],ge=Object(n.useState)(!1),Te=Object(s.a)(ge,2),ye=Te[0],Ne=Te[1],ke=Object(n.useState)(!1),Ae=Object(s.a)(ke,2),Be=Ae[0],_e=Ae[1],Ce=Object(n.useState)(!1),He=Object(s.a)(Ce,2),xe=He[0],Ie=He[1],Je=Object(n.useState)(!1),Pe=Object(s.a)(Je,2),Re=Pe[0],Ye=Pe[1],qe=Object(n.useState)(!1),ze=Object(s.a)(qe,2),De=ze[0],Fe=ze[1],Ge=Object(n.useState)(!1),Ke=Object(s.a)(Ge,2),Qe=Ke[0],Ue=Ke[1];return Object(n.useEffect)(function(){d>0&&(v(0),l(!1),M(!0))},[d]),Object(n.useEffect)(function(){Q>0&&(U(0),F(!1),Z(!0))},[Q]),Object(n.useEffect)(function(){wt>0&&(Et(0),St(!1),Tt(!0))},[wt]),Object(n.useEffect)(function(){Vt>0&&(Wt(0),Kt(!1),te(!0))},[Vt]),Object(n.useEffect)(function(){Le>0&&(Me(0),ve(!1),Ne(!0))},[Le]),Object(n.useEffect)(function(){De&&(Ue(!1),N(!1),_(!1),I(!1),at(!1),ot(!1),pt(!1),At(!1),Ht(!1),Pt(!1),ce(!1),ue(!1),je(!1),_e(!1),Ie(!1),Ye(!1),M(!1),j(i()),l(!0),setTimeout(function(){Z(!1),Y(i()),F(!0)},100),setTimeout(function(){Tt(!1),mt(i()),St(!0)},200),setTimeout(function(){te(!1),zt(i()),Kt(!0)},300),setTimeout(function(){Ne(!1),le(i()),ve(!0),setTimeout(function(){Ue(!0),Fe(!1)},4e3)},400))},[De]),Object(n.useEffect)(function(){Qe&&(p[0].path===R[0].path&&N(!0),p[1].path===R[1].path&&_(!0),p[2].path===R[2].path&&I(!0),R[0].path!==Ot[0].path&&p[0].path!==R[0].path||at(!0),R[1].path!==Ot[1].path&&p[1].path!==R[1].path||ot(!0),R[2].path!==Ot[2].path&&p[2].path!==R[2].path||pt(!0),R[0].path!==Ot[0].path&&Ot[0].path!==qt[0].path||At(!0),R[1].path!==Ot[1].path&&Ot[1].path!==qt[1].path||Ht(!0),R[2].path!==Ot[2].path&&Ot[2].path!==qt[2].path||Pt(!0),qt[0].path!==Ot[0].path&&qt[0].path!==he[0].path||ce(!0),qt[1].path!==Ot[1].path&&qt[1].path!==he[1].path||ue(!0),qt[2].path!==Ot[2].path&&qt[2].path!==he[2].path||je(!0),he[0].path===qt[0].path&&_e(!0),he[1].path===qt[1].path&&Ie(!0),he[2].path===qt[2].path&&Ye(!0))},[Qe]),Object(n.useEffect)(function(){if(Qe){var t,a=function(){for(var t=0,e=!1,a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];for(var i=0;i<4;i+=1)n[i]===n[i+1]&&n[i]?(t+=1,e&&(t+=10),e=!0):e=!1;for(var o=0,s=!1,u=5;u<9;u+=1)n[u]===n[u+1]&&n[u]?(o+=1,s&&(o+=10),s=!0):s=!1;for(var b=0,p=!1,r=10;r<14;r+=1)n[r]===n[r+1]&&n[r]?(b+=1,p&&(b+=10),p=!0):p=!1;return t+o+b}(y,et,kt,ne,Be,B,it,Ct,se,xe,x,bt,Jt,re,Re);t="You got ".concat(a,1===a?" point ! ":" points ! "),e(t)}},[y,et,kt,ne,Be,B,it,Ct,se,xe,x,bt,Jt,re,Re,Qe]),c.a.createElement("div",{className:"game-machine"},c.a.createElement("div",{className:"game-machine__slots-container"},c.a.createElement(r,{setAnimationCountHandler:function(){v(d+1)},animationMove:h,animationStopSlot:L,slides:p,winLineTop:y,winLineMiddle:B,winLineBottom:x}),c.a.createElement(r,{setAnimationCountHandler:function(){U(Q+1)},animationMove:D,animationStopSlot:X,slides:R,winLineTop:et,winLineMiddle:it,winLineBottom:bt}),c.a.createElement(r,{setAnimationCountHandler:function(){Et(wt+1)},animationMove:ft,animationStopSlot:gt,slides:Ot,winLineTop:kt,winLineMiddle:Ct,winLineBottom:Jt}),c.a.createElement(r,{setAnimationCountHandler:function(){Wt(Vt+1)},animationMove:Gt,animationStopSlot:$t,slides:qt,winLineTop:ne,winLineMiddle:se,winLineBottom:re}),c.a.createElement(r,{setAnimationCountHandler:function(){Me(Le+1)},animationMove:de,animationStopSlot:ye,slides:he,winLineTop:Be,winLineMiddle:xe,winLineBottom:Re})),c.a.createElement("button",{type:"button",onClick:function(){e(""),Fe(!0)},className:"game-machine__play-button"},"PLAY"))};var O=function(){var t=Object(n.useState)(""),e=Object(s.a)(t,2),a=e[0],i=e[1];return c.a.createElement("div",{className:"app"},c.a.createElement("h1",{className:"app__heading"},"Play and find your luck!"),a&&c.a.createElement("p",{className:"app__game-results"},a),c.a.createElement(j,{setResults:i}))};o.a.render(c.a.createElement(O,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.5aba6faf.chunk.js.map