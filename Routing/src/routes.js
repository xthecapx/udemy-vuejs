import User from './components/user/User.vue'
import UserHome from './components/user/UserHome.vue'
import UserSart from './components/user/UserStart.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'
import Home from './components/Home.vue'
import Header from './components/Header.vue'

function dynamicPropsFn (route) {
  const now = new Date()
  return {
    id: (now.getFullYear() + parseInt(route.params.id)) + '!'
  }
}

export const routes = [
  {
    path: '',
    components:  {
      default: Home,
      'header-top': Header
    }
  },
  {
    path: '/user/:id',
    component: User,
    props: dynamicPropsFn
  },
  {
    path: '/userstatic',
    component: User,
    props: {id: "static URL"}
  },
  {
    path: '/userhome',
    components:  {
      default: UserHome,
      'header-bottom': Header
    },
    name: "goUserHome",
    children: [
      {
        path: '',
        component: UserSart
      },
      {
        path: ':id',
        component: UserDetail
      },
      {
        path: ':id/edit',
        component: UserEdit,
        name: 'userEdit'
      }
    ]
  },
  {
    path: '/redirect-me',
    redirect: {
      name: 'goUserHome'
    }
  },
  {
    path: '*',
    redirect: '/'
  }
];