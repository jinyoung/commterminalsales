 /*eslint-disable*/
import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import Managing from "./components";
import router from './router';
import ExcelExportButton from "./components/base-ui/export-btn.vue";
import Keycloak from 'keycloak-js';
Vue.config.productionTip = false;
Vue.component("excel-export-button", ExcelExportButton);
Vue.prototype.$Vue = Vue;
Vue.prototype.$EventBus = new Vue()
 
const axios = require("axios").default;
require('./style.css');

// backend host url
axios.backend = null; //"http://localhost:8088";

// axios.backendUrl = new URL(axios.backend);
axios.fixUrl = function(original){

  if(!axios.backend && original.indexOf("/")==0) return original;

  var url = null;

  try{
    url = new URL(original);
  }catch(e){
    url = new URL(axios.backend + original);
  }

  if(!axios.backend) return url.pathname;

  url.hostname = axios.backendUrl.hostname;
  url.port = axios.backendUrl.port;

  return url.href;
}

const templateFiles = require.context("./components", true);
Vue.prototype.$ManagerLists = [];
templateFiles.keys().forEach(function(tempFiles) {
  if(!tempFiles.includes("Manager.vue") && tempFiles.includes("vue")) {
    Vue.prototype.$ManagerLists.push(
      tempFiles.replace("./", "").replace(".vue", "")
    );
  }
});
Vue.use(Managing);
const pluralCaseList = []

pluralCaseList.push( {plural: "specComparations", pascal: "SpecComparation"} )
pluralCaseList.push( {plural: "specs", pascal: "Spec"} )

pluralCaseList.push( {plural: "getSpecDetails", pascal: "GetSpecDetail"} )
pluralCaseList.push( {plural: "orders", pascal: "Order"} )

pluralCaseList.push( {plural: "retargettings", pascal: "Retargetting"} )

pluralCaseList.push( {plural: "insuranceSubscriptions", pascal: "InsuranceSubscription"} )

pluralCaseList.push( {plural: "payments", pascal: "Payment"} )


pluralCaseList.push( {plural: "salesStatuses", pascal: "SalesStatus"} )
pluralCaseList.push( {plural: "customers", pascal: "Customer"} )
pluralCaseList.push( {plural: "messages", pascal: "Message"} )

pluralCaseList.push( {plural: "getCustomers", pascal: "GetCustomer"} )

Vue.prototype.$ManagerLists.forEach(function(item, idx) {
  pluralCaseList.forEach(function(tmp) {
    if(item.toLowerCase() == tmp.pascal.toLowerCase()) {
      var obj = {
        name: item,
        plural: tmp.plural
      }
      Vue.prototype.$ManagerLists[idx] = obj
    }
  })
})
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
