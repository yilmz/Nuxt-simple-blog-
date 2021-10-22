import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export const router = new VueRouter({
    base: 'public', 
    mode: 'history',
});
// Import the Auth0 configuration
import { domain, clientId } from "../plugins/auth_config.json";
// Import the plugin here
import { Auth0Plugin } from "../plugins/auth";
// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false;
