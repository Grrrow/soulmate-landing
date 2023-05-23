import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  Vue.use(VueGtag, {
    config: { id: process.env.GOOGLE_ANALYTICS_ID },
    appName: 'SolvMate',  // Replace 'Your App Name' with your app's name
    enabled: process.env.NODE_ENV === 'production',
    pageTrackerTemplate(to) {
      return {
        page_title: to.name,
        page_path: to.path,
        page_location: window.location.href
      }
    }
  }, app.router);
};
