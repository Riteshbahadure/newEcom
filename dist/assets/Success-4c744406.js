import{f as n,j as e,m as t,L as l}from"./index-477aaa6f.js";const d=()=>{const{user:r}=n(a=>a.auth),i=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return e.jsx("div",{className:"bg-white dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center py-12 px-4",children:e.jsxs(t.div,{className:"max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6},children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center",children:"Thank You for Your Order!"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 mb-8 text-center",children:["Your order ",e.jsx("span",{className:"font-semibold text-gray-900 dark:text-white",children:"#7564804"})," will be processed within 24 hours during working days. We will notify you by email once your order has been shipped."]}),e.jsx(t.div,{className:"space-y-4 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[{label:"Date",value:i},{label:"Payment Method",value:"Cash On Delivery"},{label:"Name",value:r.name},{label:"Email",value:r.email}].map((a,s)=>e.jsxs(t.div,{className:"flex items-center justify-between text-gray-700 dark:text-gray-300",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1*s,duration:.6},children:[e.jsxs("span",{className:"font-medium",children:[a.label,":"]}),e.jsx("span",{className:"font-semibold",children:a.value})]},s))}),e.jsx("div",{className:"mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4",children:e.jsx(l,{to:"/",className:"bg-white text-gray-900 py-2 px-4 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 hover:text-primary-700 transition-colors duration-300",children:"Return to Shopping"})})]})})};export{d as default};
