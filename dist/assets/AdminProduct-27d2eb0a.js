import{u as m,x,y as b,z as j,l as g,n as f,o as d,r as c,B as n,j as e}from"./index-31f147d6.js";const E=()=>{const{data:o}=m(),[p,{isLoading:P,isSuccess:i}]=x(),[y,{isLoading:N,isSuccess:a}]=b(),[h,{isLoading:k,isSuccess:l}]=j(),t=g({initialValues:{name:"",desc:"",stock:"",price:"",thumb:""},validationSchema:f({name:d().required("Enter Name"),desc:d().required("Enter desc"),stock:d().required("Enter stock"),price:d().required("Enter price")}),onSubmit:(s,{resetForm:u})=>{console.log(s);const r=new FormData;r.append("name",s.name),r.append("desc",s.desc),r.append("stock",s.stock),r.append("price",s.price),r.append("thumb",s.thumb),p(r),u()}});return c.useEffect(()=>{i&&(n.success("Product Add Success"),window.addModal.close())},[i]),c.useEffect(()=>{a&&n.success("Product Add Success")},[a]),c.useEffect(()=>{l&&n.success("Product Delete Success")},[l]),e.jsxs("div",{children:[e.jsx("div",{className:"text-right",children:e.jsx("button",{className:"btn btn-primary",onClick:()=>{window.addModal.showModal()},children:"+ Add Product"})}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"name"}),e.jsx("th",{children:"desc"}),e.jsx("th",{children:"price"}),e.jsx("th",{children:"stock"}),e.jsx("th",{children:"image"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:o&&o.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.name}),e.jsx("td",{children:s.desc}),e.jsx("td",{children:s.price}),e.jsx("td",{children:s.stock}),e.jsx("td",{children:e.jsx("img",{height:50,width:50,src:`https://newecom-sdul.onrender.com/${s.image}`,alt:""})}),e.jsxs("td",{children:[e.jsx("button",{className:"btn btn-sm btn-warning",children:"Edit"}),e.jsx("button",{className:"btn btn-sm btn-error",onClick:u=>h(s._id),children:"Delete"})]})]},s._id))})]}),e.jsx("dialog",{id:"addModal",className:"modal",children:e.jsxs("form",{method:"dialog",className:"modal-box",onSubmit:t.handleSubmit,children:[e.jsx("button",{className:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2",children:"✕"}),e.jsx("h3",{className:"font-bold text-lg",children:"Add Product"}),e.jsx("pre",{children:JSON.stringify(t.errors,null,2)}),e.jsx("input",{...t.getFieldProps("name"),type:"text",placeholder:"Enter Product name",className:`input my-2 input-bordered w-full ${t.errors.name&&t.touched.name&&"input-error"}`}),e.jsx("input",{...t.getFieldProps("desc"),type:"text",placeholder:"Enter Product desc",className:`input my-2 input-bordered w-full ${t.errors.desc&&t.touched.desc&&"input-error"}`}),e.jsx("input",{...t.getFieldProps("stock"),type:"number",placeholder:"Enter Product stock",className:`input my-2 input-bordered w-full ${t.errors.stock&&t.touched.stock&&"input-error"}`}),e.jsx("input",{...t.getFieldProps("price"),type:"number",placeholder:"Enter Product price",className:`input my-2 input-bordered w-full ${t.errors.price&&t.touched.price&&"input-error"}`}),e.jsx("input",{onChange:s=>t.setFieldValue("thumb",s.currentTarget.files[0]),type:"file",placeholder:"Enter Product Image",className:`input my-2 input-bordered w-full ${t.errors.thumb&&t.touched.thumb&&"input-error"}`}),e.jsx("button",{type:"submit",class:"btn btn-primary w-full",children:"Add Product"})]})})]})};export{E as default};
