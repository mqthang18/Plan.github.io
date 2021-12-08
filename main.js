  try {
  var textHTML = '<div>'.concat(header, container, data, footer, '</div>');
  // console.log(textHTML)
  var app = new Vue({
    el: "#app",
    template: textHTML
  })
} catch (err) {
  // console.log('Error');
  // console.log(err);
  window.location.href = url;
}
  