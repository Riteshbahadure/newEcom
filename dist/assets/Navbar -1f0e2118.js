import{f as n,i as c,b as l,j as e,L as a}from"./index-b7d6f76e.js";import{d as m}from"./index-702a978c.js";import{R as d}from"./Footer-84fdcece.js";import{i as x}from"./Hotel Karan-722b24d5.js";const N=()=>{const{cart:r}=n(i=>i.public),{user:t}=n(i=>i.auth),[o]=c(),s=l();return e.jsxs("div",{className:"bg-white shadow-md",children:[e.jsxs("div",{className:"flex justify-between items-center px-4 py-2 bg-gray-800 text-white text-sm",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(m,{className:"self-center"}),e.jsx("span",{className:"max-sm:w-56",children:"Find any troubles? Drop us an email at grow@backtokaran.com"})]}),e.jsx("div",{children:t&&t.role==="customer"?e.jsx("span",{className:"cursor-pointer font-semibold capitalize",onClick:()=>s("/profile"),children:t.name}):e.jsxs("span",{children:[e.jsx(a,{to:"/login",className:"cursor-pointer mr-4",children:"LOGIN"}),e.jsx(a,{to:"/register",className:"cursor-pointer",children:"REGISTER"})]})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center py-4 px-6 md:px-20",children:[e.jsx("div",{className:"flex items-center mb-4 md:mb-0",children:e.jsx("img",{src:x,className:"h-12 md:h-16 cursor-pointer",alt:"Hotel Karan"})}),e.jsxs("div",{className:"flex flex-wrap justify-center gap-4 md:gap-8 font-semibold",children:[e.jsx("div",{onClick:()=>s("/"),className:"cursor-pointer hover:text-amber-600 transition duration-300",children:"SHOP"}),e.jsx("div",{onClick:()=>s("/article"),className:"cursor-pointer hover:text-amber-600 transition duration-300",children:"ARTICLES"}),e.jsx("div",{onClick:()=>s("/chefGuide"),className:"cursor-pointer hover:text-amber-600 transition duration-300",children:"CHEF GUIDE"}),e.jsx("div",{onClick:()=>s("/location"),className:"cursor-pointer hover:text-amber-600 transition duration-300",children:"LOCATION"}),e.jsx("div",{onClick:()=>s("/faqs"),className:"cursor-pointer hover:text-amber-600 transition duration-300",children:"FAQS"}),e.jsx("div",{onClick:()=>s("/about"),className:"cursor-pointer hover:text-amber-600 transition duration-300",children:"ABOUT"}),e.jsx("div",{onClick:()=>s("/contact"),className:"cursor-pointer hover:text-amber-600 transition duration-300",children:"CONTACT US"})]}),e.jsxs("div",{className:"flex items-center gap-4 mt-4 md:mt-0",children:[t===null?"":e.jsx("button",{onClick:o,className:"bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded transition duration-300",children:"Logout"}),e.jsxs("div",{className:"relative",children:[e.jsx(a,{to:"/cart",className:"text-gray-800 text-4xl",children:e.jsx(d,{})}),r&&r.length>0&&e.jsx("span",{className:"absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center",children:r.length})]})]})]})]})};export{N};
