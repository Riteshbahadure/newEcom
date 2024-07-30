import{s as c,r as d,j as e,m as n}from"./index-7944f287.js";import{N as u,F as b}from"./Footer-13602827.js";import"./index-6230df7d.js";import"./Hotel Karan-722b24d5.js";function j(){const[l]=c(),[a,o]=d.useState({name:"",email:"",subject:"",message:""}),t=s=>{const{name:r,value:m}=s.target;o({...a,[r]:m})},i=async s=>{s.preventDefault();try{await l(a).unwrap(),alert("Message sent successfully!"),o({name:"",email:"",subject:"",message:""})}catch(r){console.error("Failed to send message:",r)}};return e.jsxs(e.Fragment,{children:[e.jsx(u,{}),e.jsx("div",{className:"min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 flex flex-col items-center  justify-center py-12 px-4 sm:px-6 lg:px-8",children:e.jsxs(n.div,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},exit:{opacity:0,y:-50},transition:{duration:.5},className:"contact-container max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-xl",children:[e.jsx("h1",{className:"text-4xl font-bold text-center text-blue-500 mb-6",children:"Contact Me"}),e.jsxs("form",{onSubmit:i,children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-semibold mb-2 text-gray-700",children:"Name"}),e.jsx("input",{type:"text",id:"name",name:"name",value:a.name,onChange:t,required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200",placeholder:"Enter your name"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-semibold mb-2 text-gray-700",children:"Email"}),e.jsx("input",{type:"email",id:"email",name:"email",value:a.email,onChange:t,required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200",placeholder:"Enter your email"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{htmlFor:"subject",className:"block text-sm font-semibold mb-2 text-gray-700",children:"Subject"}),e.jsx("input",{type:"text",id:"subject",name:"subject",value:a.subject,onChange:t,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200",placeholder:"Enter the subject"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{htmlFor:"message",className:"block text-sm font-semibold mb-2 text-gray-700",children:"Message"}),e.jsx("textarea",{id:"message",name:"message",value:a.message,onChange:t,rows:"5",required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200",placeholder:"Enter your message"})]}),e.jsx(n.button,{type:"submit",whileHover:{scale:1.05},whileTap:{scale:.95},className:"w-full py-3 px-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out",children:"Send Message"})]}),e.jsxs(n.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.5},className:"mt-8 text-center text-gray-700",children:[e.jsxs("p",{children:["You can also reach me via email at"," ",e.jsx("a",{href:"mailto:riteshbahadure2@gmail.com",className:"text-blue-500",children:"riteshbahadure2@gmail.com"}),"."]}),e.jsxs("p",{children:["Connect with me on"," ",e.jsx("a",{href:"https://www.linkedin.com/in/ritesh-bahadure-049398247/?trk=contact-info",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"LinkedIn"})," ","or"," ",e.jsx("a",{href:"https://www.instagram.com/ritees.shh_/?utm_source=ig_web_button_share_sheet",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Instagram"}),"."]})]})]})}),e.jsx("div",{className:"",children:e.jsx(b,{})})]})}export{j as default};
