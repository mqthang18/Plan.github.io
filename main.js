  Vue.component("header", header);
  Vue.component("container", Container);
  Vue.component("data", data);
  Vue.component("footer", footer);
  
  var app = new Vue({
    el: "#header",
    template: header.template
  })


  app = new Vue({
    el: "#app",
    template: Container.template
  })


  app = new Vue({
    el: "#data",
    template: data.template
  })


  app = new Vue({
    el: "#footer",
    template: footer.template
  })



