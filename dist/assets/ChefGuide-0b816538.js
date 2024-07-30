import{j as e}from"./index-7944f287.js";import{N as r,F as l}from"./Footer-13602827.js";import"./index-6230df7d.js";import"./Hotel Karan-722b24d5.js";const a=[{name:"Chef John Doe",title:"Executive Chef",bio:"With over 15 years of experience, Chef John Doe brings a unique blend of flavors and techniques to Hotel Karan.",specialty:"Signature Dish: Truffle Risotto",image:"https://img.freepik.com/free-photo/medium-shot-professional-chef-posing_23-2151232159.jpg",video:"https://www.youtube.com/embed/JIlg86z02rU?si=dUEEdZddDZQ7hP-d",recipes:[{title:"Truffle Risotto",description:"Treat yourself to a delightful truffle-infused risotto.",image:"https://cookingwithcocktailrings.com/wp-content/uploads/2021/02/img_60393f2625abc.jpg"}]},{name:"Chef Jane Smith",title:"Pastry Chef",bio:"Chef Jane Smith, our talented pastry chef, is known for her delicate and innovative desserts that captivate the senses.",specialty:"Signature Dish: Chocolate Lava Cake",image:"https://img.freepik.com/premium-photo/cheerful-male-pastry-chef-standing-with-arms-crossed-bakery-shop_533998-12458.jpg",video:"https://www.youtube.com/embed/X2jakwIVLbY?si=ya_zlyGk0XQB4Yhf",recipes:[{title:"Chocolate Lava Cake",description:"A rich and gooey chocolate lava cake with a molten center.",image:"https://media.istockphoto.com/id/541267186/photo/chocolate-fondant-with-strawberries-and-powdered-sugar.jpg?s=612x612&w=0&k=20&c=6a_-IAUELw0zVMR0vjVtr9UiDg_GAN-S3eowoDGsMhI="}]},{name:"Chef Emily Brown",title:"Sous Chef",bio:"Chef Emily Brown brings her expertise in modern culinary techniques and seasonal ingredients to create extraordinary dishes.",specialty:"Signature Dish: Seared Scallops",image:"https://c4.wallpaperflare.com/wallpaper/537/897/121/cook-soup-ladle-gray-background-wallpaper-preview.jpg",video:"https://www.youtube.com/embed/pzAYPLetuPE?si=55kdge1-um4gDvgq",recipes:[{title:"Seared Scallops",description:"Perfectly seared scallops with a citrus beurre blanc sauce.",image:"https://images.pexels.com/photos/4114979/pexels-photo-4114979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}]}],m=()=>e.jsxs("div",{children:[e.jsx(r,{}),e.jsxs("div",{className:"bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 p-8",children:[e.jsxs("header",{className:"text-center mb-16 animate-fade-in text-white",children:[e.jsx("h1",{className:"text-5xl font-bold mb-4 leading-tight",children:"Meet Our Talented Chefs"}),e.jsx("p",{className:"text-xl",children:"Discover the culinary artists behind our delectable dishes"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10",children:a.map((t,s)=>e.jsxs("div",{className:"bg-gray-900 text-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 animate-slide-up",children:[e.jsx("img",{src:t.image,alt:t.name,className:"w-full h-72 object-cover rounded-lg mb-4 border border-gray-600"}),e.jsx("h2",{className:"text-3xl font-semibold mb-2",children:t.name}),e.jsx("h3",{className:"text-xl mb-2 italic",children:t.title}),e.jsx("p",{className:"text-lg mb-2 font-light",children:t.specialty}),e.jsx("p",{className:"text-base mb-4",children:t.bio})]},s))}),e.jsxs("section",{className:"mt-16 animate-fade-in",children:[e.jsx("h2",{className:"text-4xl font-bold mb-8 text-center text-white",children:"Chef Interviews"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10",children:a.map((t,s)=>e.jsxs("div",{className:"bg-gray-900 text-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300",children:[e.jsx("iframe",{src:t.video,title:`${t.name} Interview`,className:"w-full h-64 rounded-lg mb-4 border border-gray-600",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),e.jsx("h3",{className:"text-xl font-semibold",children:t.name})]},s))})]}),e.jsxs("section",{className:"mt-16 animate-slide-up pb-10 max-sm:pb-6",children:[e.jsx("h2",{className:"text-4xl font-bold mb-8 text-center text-white",children:"Recipe Highlights"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10",children:a.flatMap(t=>t.recipes.map((s,i)=>e.jsxs("div",{className:"bg-gray-900 text-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 flex flex-col md:flex-row lg:flex-col lg:items-center lg:justify-center",children:[e.jsx("img",{src:s.image,alt:s.title,className:"w-full h-64 object-cover rounded-lg mb-4 border border-gray-600 lg:w-96 lg:h-80 lg:mb-6 lg:mr-0 lg:mb-4"}),e.jsxs("div",{className:"flex flex-col items-center text-center lg:text-left lg:items-start",children:[e.jsx("h3",{className:"text-2xl font-semibold mb-2",children:s.title}),e.jsx("p",{className:"text-base",children:s.description})]})]},`${t.name}-${i}`)))})]})]}),e.jsx("div",{className:"",children:e.jsx(l,{})})]});export{m as default};
