import Login from './views/Login.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'
import ShowBlogs from './components/ShowBlogs.vue'
export default[
  {
    path:"/",
    component:Login
  },
  {
    path:"/add",
    component:AddBlog
  },
  {
    path:"/blog/:id",
    component:SingleBlog
  },
  {
    path:"/show",
    component:ShowBlogs
  }
]
