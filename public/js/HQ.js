// Collapsible
{
  function collapsible() {
      var coll = document.getElementsByClassName("collapsible");
      var i;
      console.log(Array.from(coll));
      if (Array.from(coll).length == 0) {
        location.reload;
    }
      for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
              this.classList.toggle("active");
              var content = this.nextElementSibling;
              if (content.style.display === "block") {
              content.style.display = "none";
              } else {
              content.style.display = "block";
              }
          });
      }
  } 
}

 // Create question 
 {
  var res_arr = [];
  var LULC_list = ['LULC Aquaculture', 'LULC Mangrove']
  const likert_scale = {
      1: "Không biết", 
      2: "Không đe dọa",
      3: "Đe dọa thấp", 
      4: "Đe dọa trung bình",
      5: "Đe dọa rất cao"
  };
  const decay_equation = {
      1: 'Theo dạng tuyến tính',
      2: 'Theo dạng lũy thừa'
  }
  
  function GetResponse() {
      res_arr = []
      var Factor = document.getElementsByName('Factors');

      let val = Array.from(Factor)
      
      for (var i = 0, length = Factor.length; i < length; i++) {
          if (Factor[i].checked) {
              var a = Factor[i].value; 
              res_arr.push(a);
          }
      }
      var question_threat = {
          1: ['Từ các nhân tố trên, anh (chị) hãy đánh giá mức độ đóng góp của tác nhân vào sự suy thoái của sinh cảnh ngập mặn', {1: res_arr, 2: likert_scale}],
          2: ['Anh (chị) hãy mô tả kiểu suy thoái của tác nhân theo không gian?', {1: res_arr, 2: decay_equation}]
      };

      var question_sensitivity = {
          1: ['Anh (chị) hãy đánh giá độ nhạy của sinh cảnh ngập đối với các tác nhân', {1: res_arr, 2: likert_scale, 3: LULC_list}]
      };
      let element = document.getElementById("questionaire");
      while (element.firstChild) {
          element.removeChild(element.firstChild);
      }
      questionaire(question_threat, 'question');
      questionaire(question_sensitivity, 'sensitivity');
      AddSubmitBtn()

  }

  function questionaire(data, idplus) {
      var id = 1;
      
      for (var i = 0; i < Object.keys(data).length; i++) {
          // console.log(data[i+1][0])
          var title = idplus.concat((i+1).toString())
          addQuestion(data[i+1][0], 'h2')
          if (Object.keys(data[i+1][1]).length == 3) {
              var len = Object.keys(data[i+1][1][3]).length
          } else {
              var len = Object.keys(data[i+1][1][1]).length
          }
          // console.log(Object.keys(data[i+1][1][3]).length)
          for (var j = 0; j < len;j++) {
              // console.log(Object.keys(data[i+1][1]).length)
              id = (i+j).toString();
              if (Object.keys(data[i+1][1]).length == 3) {
                  addQuestion(data[i+1][1][3][j], 'h3')
                  for (var k = 0; k < Object.keys(data[i+1][1][1]).length; k++) {
                      addQuestion(data[i+1][1][1][k], 'h4')
                      id = id.concat(k);
                      addChoices(data[i+1][1][2],id.concat(title))
                  }
              } else {
                  addQuestion(data[i+1][1][1][j], 'h4')
                  addChoices(data[i+1][1][2],id.concat(title))
              }    
          }
      }
  }

  function addQuestion(text, Optional) {
      var question = document.createElement(Optional);
      question.innerText = text; 
      document.getElementById('questionaire').appendChild(question);
  }
  function addChoices(scale, id) {
      // var string = text
      for (var i = 0; i < Object.keys(scale).length; i++) {
          var question = document.createElement("input");
          var text = document.createElement("label")
          question.setAttribute("type", "radio");
          question.setAttribute("value", i + 1); 
          question.setAttribute("name","Answer".concat(id));
          text.innerText = scale[i+1];
          document.getElementById('questionaire').appendChild(question);
          document.getElementById('questionaire').appendChild(text);
      }
  }
  function AddSubmitBtn() {
    // <button type="submit" onclick="SUbmitGSS()">Send</button>
    var button = document.createElement('button');
    button.setAttribute('type','submit')
    button.setAttribute('onclick','SUbmitGSS()')
    button.innerText = 'Gửi'
    document.getElementById('submit-to-google-sheet').appendChild(button); 
  }
}

$(document).ready(function(){
  // Do stuff here, including _calling_ codeAddress(), but not _defining_ it!
  collapsible();
});