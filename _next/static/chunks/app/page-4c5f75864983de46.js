(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{6018:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});var n=a(6658),s=a(9242);let o="/kids-daily-routine",i=[{start:"06:45",end:"07:20",task:"Eat Breakfast",image:"".concat(o,"/images/breakfast.png"),sound:"".concat(o,"/sounds/chime.mp3")},{start:"07:20",end:"07:30",task:"Put on Shoes",image:"".concat(o,"/images/shoes.png"),sound:"".concat(o,"/sounds/chime.mp3")},{start:"16:45",end:"17:00",task:"Bath Time",image:"".concat(o,"/images/bath.png"),sound:"".concat(o,"/sounds/chime.mp3")},{start:"17:00",end:"17:30",task:"Eat Dinner",image:"".concat(o,"/images/dinner.png"),sound:"".concat(o,"/sounds/chime.mp3")},{start:"17:30",end:"18:00",task:"Put on Pajamas",image:"".concat(o,"/images/pajamas.png"),sound:"".concat(o,"/sounds/chime.mp3")},{start:"18:50",end:"19:00",task:"Brush Teeth",image:"".concat(o,"/images/teeth.png"),sound:"".concat(o,"/sounds/chime.mp3")},{start:"19:00",end:"19:30",task:"Go to Bed",image:"".concat(o,"/images/bed.png"),sound:"".concat(o,"/sounds/chime.mp3")}],c={task:"Play Time",image:"".concat(o,"/images/playtime.png"),sound:null};function r(){let[e,t]=(0,s.useState)(c),[a,o]=(0,s.useState)(!1),[r,l]=(0,s.useState)(0),[d,u]=(0,s.useState)(null);return(0,s.useEffect)(()=>{let e=null,t=async()=>{try{"wakeLock"in navigator&&(e=await navigator.wakeLock.request("screen"),console.log("Wake lock activated"))}catch(e){console.warn("Wake lock failed:",e)}};t();let a=()=>{null!==e&&"visible"===document.visibilityState&&t()};return document.addEventListener("visibilitychange",a),()=>{document.removeEventListener("visibilitychange",a),e&&e.release()}},[]),(0,s.useEffect)(()=>{if(a)return;let n=()=>{let a=new Date().toTimeString().slice(0,5),n=i.find(e=>{let{start:t,end:n}=e;return a>=t&&a<n})||c;n.task!==(null==e?void 0:e.task)&&(t(n),n.sound&&new Audio(n.sound).play().catch(()=>{}))},s=setInterval(n,1e4);return n(),()=>clearInterval(s)},[e,a]),(0,n.jsxs)("main",{style:{position:"relative",height:"100vh",width:"100vw",margin:0,padding:0,overflow:"hidden",backgroundColor:"#000"},children:[(0,n.jsx)("img",{src:e.image,alt:e.task,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"contain",backgroundColor:"#000"}}),(0,n.jsx)("h1",{onClick:()=>{let e=(r+1)%i.length,a=i[e];t(a),l(e),o(!0),a.sound&&new Audio(a.sound).play().catch(()=>{}),d&&clearTimeout(d),u(setTimeout(()=>{o(!1)},3e3))},style:{position:"absolute",bottom:"3rem",left:"50%",transform:"translateX(-50%)",color:"#fff",backgroundColor:"rgba(0, 0, 0, 0.5)",padding:"1rem 2rem",borderRadius:"1rem",fontSize:"2.5rem",textAlign:"center",cursor:"pointer"},children:e.task})]})}},7798:(e,t,a)=>{Promise.resolve().then(a.bind(a,6018))}},e=>{var t=t=>e(e.s=t);e.O(0,[773,261,358],()=>t(7798)),_N_E=e.O()}]);