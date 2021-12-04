
  Vue.component("header", header);
  var app = new Vue({
    el: "#header",
    template: header.template
  })

  Vue.component("footer", footer);
  app = new Vue({
    el: "#footer",
    template: footer.template
  })

  Vue.component("data", data);
  app = new Vue({
    el: "#data",
    template: data.template
  })

  Vue.component("container", container);
  app = new Vue({
    el: "#container",
    template: container.template
  })

