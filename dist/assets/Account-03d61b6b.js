import{f as d,I as o,k as x,J as i,r as u,B as h,j as s}from"./index-477aaa6f.js";const b=()=>{const{user:c}=d(e=>e.auth),{data:r}=o(c),[n]=x(),[l,{isSuccess:a}]=i();return u.useEffect(()=>{a&&h.success("order cancel success")},[a]),s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"bg-primary flex gap px20 items-center text-black",children:[s.jsxs("strong",{className:"text-2xl",children:[c&&c.name," Account "]}),s.jsx("button",{onClick:n,className:"btn btn-error my-3",children:"Logout"})]}),s.jsxs("table",{className:"table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"order Id"}),s.jsx("th",{children:"products"}),s.jsx("th",{children:"status"}),s.jsx("th",{children:"Action"})]})}),s.jsx("tbody",{children:r&&r.map(e=>s.jsxs("tr",{className:`
                    ${e.status==="placed"&&"bg-orange-400 text-black"}
                    ${e.status==="delivered"&&"bg-green-300 text-black"}
                    ${e.status==="cancel"&&"bg-red-300 text-black"}`,children:[s.jsxs("td",{children:[e._id," "]}),s.jsxs("td",{children:[e.products.map(t=>s.jsxs("div",{className:"flex justify-between my-2",children:[s.jsxs("strong",{children:[t.name," ",t.price," "]}),s.jsx("img",{src:`https://newecom-sdul.onrender.com/${t.image}`,height:50,width:50,alt:""})]}))," "]}),s.jsxs("td",{children:[e.status," "]}),s.jsxs("td",{children:[e.status==="placed"&&s.jsx("button",{className:"btn btn-outline btn-error",onClick:t=>l(e),children:"cancel"}),e.status==="cancel"&&s.jsx("strong",{className:"text-red-600",children:"cancel"}),e.status==="delivered"&&s.jsx("strong",{className:"text-green-600",children:"cancel"})]})]},e._id))})]})]})};export{b as default};
