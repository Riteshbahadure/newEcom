import{f as x,a as h,r as j,j as e,L as i,h as u}from"./index-deebc7ad.js";import{N as b,F as f}from"./Footer-52fd8919.js";import{F as p}from"./index-519eb4fc.js";import"./Hotel Karan-722b24d5.js";const N=()=>{const{cart:r}=x(s=>s.public),o=h(),[a,d]=j.useState(r.reduce((s,t)=>(s[t.id]=1,s),{})),n=(s,t)=>{d(c=>{const l={...c,[s]:c[s]+t};return l[s]<1&&(l[s]=1),l})},m=r.reduce((s,t)=>s+t.price*a[t.id],0);return!r||r.length===0?e.jsxs("div",{className:"h-screen flex flex-col justify-center items-center",children:[e.jsx("h1",{className:"text-2xl font-semibold mb-4",children:"Cart is Empty"}),e.jsx(i,{to:"/",className:"btn btn-primary",children:"Go to Shop"})]}):e.jsx("div",{className:"container mx-auto my-20",children:e.jsx("div",{className:"card card-compact w-full px-28 bg-white shadow-lg rounded-lg overflow-hidden",children:e.jsxs("div",{className:"card-body p-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"card-title text-2xl font-bold",children:"Shopping Cart"}),e.jsx("p",{className:"text-gray-500",children:"Delivering to 382480"})]}),e.jsx("button",{onClick:()=>o(u()),className:"btn btn-danger",children:"Empty Cart"})]}),e.jsxs("div",{className:"alert alert-success mb-6",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current shrink-0 h-6 w-6 mr-2",fill:"none",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("span",{children:"You've got FREE delivery. Start checkout now!"})]}),r.map(s=>e.jsxs("div",{className:"flex flex-col md:flex-row items-center mb-6",children:[e.jsx("a",{href:"#",className:"flex-shrink-0 mb-3 md:mb-0",children:e.jsx("img",{className:"w-20 h-20 object-cover",src:`https://newecom-sdul.onrender.com/${s.image}`,alt:s.name})}),e.jsxs("div",{className:"flex-grow md:ml-6",children:[e.jsx("h1",{className:"font-bold text-lg",children:s.name}),e.jsx("p",{className:"text-gray-500",children:s.desc}),e.jsxs("button",{className:"flex items-center text-red-500 mt-2",onClick:()=>{},children:[e.jsx(p,{className:"mr-1"})," Remove"]})]}),e.jsxs("div",{className:"flex items-center mt-4 md:mt-0",children:[e.jsx("button",{onClick:()=>n(s.id,-1),className:"btn btn-outline",children:"-"}),e.jsx("span",{className:"mx-2",children:a[s.id]}),e.jsx("button",{onClick:()=>n(s.id,1),className:"btn btn-outline",children:"+"})]}),e.jsxs("div",{className:"font-bold text-xl text-right mt-4 md:mt-0 md:ml-10",children:["$",s.price*a[s.id]]})]},s.id)),e.jsxs("div",{className:"flex justify-between items-center mt-10",children:[e.jsxs("div",{className:"text-2xl font-bold",children:["Total: $",m.toFixed(2)]}),e.jsx("div",{children:e.jsx(i,{to:"/checkout",className:"btn btn-info mr-2",children:"Proceed to Checkout"})})]})]})})})},y=()=>e.jsxs(e.Fragment,{children:[e.jsx(b,{}),e.jsx(N,{}),e.jsx(f,{})]});export{y as default};
