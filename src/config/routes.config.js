import About from '../pages/About.page'
import Test from '../pages/Test.page'
import Profile from '../pages/Profile.page'

export const ROUTES = [
  { name: "Fun With Flow", path: "/", component: About, nav: false },
  { name: "Test", path: "/test", component: Test, nav: true },
  { name: "Profile", path: "/profile", component: Profile, nav: true },
]

export const NAV_ROUTES = ROUTES.filter(r => r.nav)
export const HOME = ROUTES[0];
