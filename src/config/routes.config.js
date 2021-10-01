import About from '../pages/About.page'
import Home from '../pages/Home.page'
import Profile from '../pages/Profile.page'

export const ROUTES = [
  { name: "Fun With Flow", path: "/", component: Home, nav: false },
  { name: "About", path: "/about", component: About, nav: true },
  { name: "Profile", path: "/profile", component: Profile, nav: true },
]

export const NAV_ROUTES = ROUTES.filter(r => r.nav)
export const HOME = ROUTES[0];
