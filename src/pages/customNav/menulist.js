export default [
    {
        key:'1',
        title:'首页',
        path:'/admin/home'
     },
     {
         key:'2',
         title:'管理员',
         path:'admin/admins'
     },
     {
         key:'3',
         title:'用户管理',
         path:'admin/user',
         children:[
             {
            key:'3-1',
            title:'用户添加',
            path:'/admin/useradd'
         },
         {
             key:'3-2',
             title:'用户列表',
             path:'/admin/userlist'
          }
     ]
         
     }

]