import { createRouter, createWebHistory } from "vue-router";
import {
  HomeView,
  PostsView,
  DetailsView,
  LoginView,
  TeamView,
  TrainingView,
  AboutUsView,
  ProjectsView,
  servicesView,
  CyberView,
  ContactView,
} from "../views";
// import { useAuthStore } from "../store";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/posts", name: "posts", component: PostsView },
  { path: "/posts/:id", name: "details", component: DetailsView, props: true },
  { path: "/team", name: "Our-Team", component: TeamView },
  { path: "/training", name: "Training", component: TrainingView },
  { path: "/aboutus", name: "About-us", component: AboutUsView },
  { path: "/projects", name: "Our-projects", component: ProjectsView },
  { path: "/services", name: "services", component: servicesView },
  { path: "/cyber", name: "cyber", component: CyberView },
  { path: "/contact", name: "contact", component: ContactView },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

// router.beforeEach(async (to) => {
// redirect to login page if not logged in and trying to access a restricted page
// const publicPages = ["/login"];
// const authRequired = !publicPages.includes(to.path);
// const auth = useAuthStore();

/**add function to check if user is logged in */

//   if (authRequired && !auth.user) {
//     auth.returnUrl = to.fullPath;
//     return "/login";
//   }
// });

export default router;
