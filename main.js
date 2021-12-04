
  Vue.component("header", header);
  var app1 = new Vue({
    el: "#header",
    template: header.template
  })

  Vue.component("container", container);
  var app4 = new Vue({
    el: "#container",
    template: container.template
  })

  Vue.component("data", data);
  var app3 = new Vue({
    el: "#data",
    template: data.template
  })

  Vue.component("footer", footer);
  var app2 = new Vue({
    el: "#footer",
    template: footer.template
  })