import{r as a,l as p,n as x,o,s as j,t as b,v as U,w,B as c,j as e}from"./index-31f147d6.js";const g=()=>{const[t,u]=a.useState({}),r=p({initialValues:{name:t.name,email:t.email},validationSchema:x({name:o().required("Enter Name"),email:o().required("Enter Email")}),onSubmit:(s,{resetForm:i})=>{m({...s,_id:t._id}),i()}}),{data:d}=j();b();const[m,{isSuccess:l,isError:y,error:E}]=U(),[h,{isSuccess:n,isError:f,error:N}]=w();return a.useEffect(()=>{n&&c.error("User Delegte Success")},[n]),a.useEffect(()=>{l&&(c.warn("User update Success"),window.editModal.close())},[l]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-right my-4",children:e.jsx("button",{className:"btn btn-primary",children:"+Add User"})}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"name"}),e.jsx("th",{children:"email"}),e.jsx("th",{children:"role"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:d&&d.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{children:[s.name," "]}),e.jsxs("td",{children:[s.email," "]}),e.jsxs("td",{children:[s.role," "]}),e.jsxs("td",{children:[e.jsx("button",{onClick:()=>{u(s),window.editModal.showModal()},type:"button",class:"btn btn-warning",children:"Edit"}),e.jsx("button",{onClick:i=>h(s._id),type:"button",class:"btn btn-error",children:"Delete"})]})]},s._id))})]})}),e.jsx("button",{className:"btn",onClick:()=>window.editmodal.showModal(),children:"open modal"}),e.jsx("dialog",{id:"editmodal",className:"modal",children:e.jsxs("form",{method:"dialog",className:"modal-box",onSubmit:r.handleChange,children:[e.jsx("input",{...r.getFieldProps("name"),type:"text",placeholder:"Type here",className:`input my-2 input-bordered w-full ${r.errors.name&&r.touched.name&&"input-error"}`}),e.jsx("input",{...r.getFieldProps,type:"email",placeholder:"Type here",className:`input my-2 input-bordered w-full ${r.errors.email&&r.touched.email&&"input-error"}`}),e.jsx("button",{type:"",className:"btn btn-outline btn-primary",children:"Update User"})]})})]})};export{g as default};
