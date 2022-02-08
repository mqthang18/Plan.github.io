  try {
  var textHTML = '<div>'.concat(header, container, data, footer, '</div>');
  // console.log(textHTML)
  var app = new Vue({
    el: "#app",
    template: textHTML,
    methods: {
        scrollToBottom(e,id) {
          // Ý tưởng get id của el sau đó lấy vị trí của el đó => sử dụng scrollTo để di chuyển tới el  
          console.log(id)
          e.preventDefault();
          var element = document.getElementById(id);
          var y = element.offsetTop; 
          window.scrollTo({top: y, behavior: 'smooth'});
        }
    }
  })
} catch (err) {
  // console.log('Error');
  // console.log(err);
  // window.location.href = url;
  alert("Load thất bại vui lòng bấm F5 để load lại page!")
}
  