// Collapsible
{
    function collapsible() {
        var coll = document.getElementsByClassName("collapsible");
        var i;
        console.log(Array.from(coll));
        if (Array.from(coll).length == 0) {
            alert('Reload the page');
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

// Create variables 
{
    var res_arr = [];
    var dict_exposure = new Object; 
    var dict_consequence_sensitivity = new Object;
    var dict_consequence_resilience = new Object; 
    var DQ = new Object; 
    var Weight = new Object; 
}

// Dictionary question 
{
    dict_consequence_resilience = {
        0: 'Khả năng phục hồi của rừng ngập mặn (Mangrove resilience)',
        1: ["Tại khu vực anh (chị), trụ mầm loài đước có khả năng khuếch tán trong rừng ngập mặn với khoảng cách trung bình bao nhiêu km?", 
        {
            1: "Khoảng cách nhỏ hơn 10 km",
            2: "Khoảng cách trong khoảng từ 10 - 100 km",
            3: "Khoảng cách lớn hơn 100 km"
        }],
        2: ["Các đợt bổ sung trụ mầm đước (theo cách tự nhiên hoặc theo các đợt trồng) đối với khu vực rừng ngập mặn thường cách nhau khoảng thời gian là bao lâu?", 
        {
            1: "Mỗi lần xảy ra hằng năm hoặc thường xuyên hơn",
            2: "Mỗi lần xảy ra cách nhau khoảng 1 - 2 năm",
            3: "Mỗi lần xảy ra 2 năm trở lên",
        }],
        3: ["Để một khu vực rừng ngập mặn non trẻ phát triển trở thành rừng trưởng thành phải mất khoảng thời gian là bao lâu?",
        {
            1:"Thời gian trưởng thành ít hơn 1 năm",
            2:"Thời gian trưởng thành năm trong đoạn 1 - 10 năm",
            3:"Thời gian trưởng thành hơn 10 năm"
        }],
        4: ["Số lượng cá thể đước tử vong tự nhiên trong rừng ngập mặn chiếm khoảng bao nhiêu phần trăm?",
        {
            1:"Mức tử vong tự nhiên lớn hơn 80%",
            2:"Mức tử vong tự nhiên nằm trong đoạn 20% - 50%",
            3:"Mức tử vong tự nhiên nằm trong đoạn ít hơn 20%"
        }]
    }

    dict_consequence_sensitivity = {
        1: ["Sinh cảnh rừng ngập mặn phải đối mặt với các xáo trộn do tự nhiên tác động có cơ chế tương tự với tác nhân ('TN') ở mức độ thường xuyên như thế nào?",
        {
            1: "Hằng ngày đến hằng tuần",
            2: "Một vài lần trên năm",
            3: "Hiếm khi chịu tác động từ tự nhiên"
        }],
        2: ["Rừng ngập mặn tại khu vực chịu tác động của tác nhân ('TN') thường tạo ra sự thay đổi như thế nào trong số lượng cá thể của sinh cảnh?",
        {
            1: "Số lượng cá thể giảm thấp hơn 20% tổng số",
            2: "Số lượng cá thể giảm trong khoảng 20% - 50%",
            3: "Số lượng cá thể giảm lớn hơn 50% tổng số"
        }],
        3: ["Rừng ngập mặn khi đối mặt tác nhân ('TN') thường tạo ra sự thay đổi như thế nào trong phạm vi (diện tích) của sinh cảnh ?",
        {
            1: "Diện tích phân bố giảm thấp hơn 20%",
            2: "Diện tích phấn bố giảm trong khoảng 20% - 50%",
            3: "Diện tích phân bố giảm hơn 50%"
        }],  
    }

    dict_exposure = {
    // 1: "Không gian mà môi trường sống trùng lặp với tác nhân gây căng thẳng ('TN') là bao nhiêu?",
    1: ["Rừng ngập mặn thường phải đối mặt với tác nhân ('TN') trong khoảng thời gian là bao lâu?",{
        1:"Khoảng 0-4 tháng/năm",
        2:"Khoảng 4-8 tháng/năm",
        3:"Khoảng 8-12 tháng/năm"
    }],
    2: ["Rừng ngập mặn thường phải đối mặt với tác nhân ('TN') xảy ra trong một năm trung bình theo anh (chị) thuộc mức độ nào?",{
        1:"Thấp",
        3:"Cao",
        2:"Trung bình"
    }],
    3: ["Các biện pháp quản lý tác nhân ('TN') có hiệu quả như thế nào? (* Note: chỉ phỏng vấn ý này đối với chuyên gia)",{
        1:"Rất hiệu quả",
        2:"Hiệu quả một phần nào đo",
        3:"Ít hiệu quả"
    }]
}

    DQ = {
        1: ['Dữ liệu đã được anh (chị) đã cung cấp có nguồn từ', {
            1: 'Dữ liệu được cung cấp từ các bài báo được thực hiện trong cung khu vực',
            2: 'Dữ liệu được thu thập từ dữ liệu toàn cầu',
            3: 'Dữ liệu ít hoặc hạn chế, do người sử dụng suy luận'
        }]
    }

    Weight = {
        1: ["Mức độ đóng góp của tiêu chí đối với sinh cảnh hoặc nhân tố trên", {
            1: "Quan trọng nhất", 
            2: "Tương đối quan trọng",
            3: "Không quan trọng"
        }]
    }
}

// Function 
{
    function GetResponse() {
        // SUbmitGSS();
        res_arr = []
        var Factor = document.getElementsByClassName('Factors');

        let val = Array.from(Factor)
        
        for (var i = 0, length = Factor.length; i < length; i++) {
            if (Factor[i].checked) {
                var a = Factor[i].value; 
                res_arr.push(a);
            }
        }
        CreatQuestion()
        Animation()
        getAllNameInputTag()
        AddSubmitBtn()
    }
    
    // console.log(Object.keys(dict_exposure).length)
    function CreatQuestion() {
        let element = document.getElementById("questionaire");
        while (element.firstChild) {
        element.removeChild(element.firstChild);
        }
        var id;
        var idDQ;
        var idW;
        var idDQ = "DQ"
        var idW = "Weight"

        if(res_arr.length > 0) {
                               
            for (var i=0; i < Object.keys(dict_consequence_resilience).length; i++) {
                id = "CR".concat(i);
                idDQ = idDQ.concat(i);
                idW = idW.concat(i);

                if (i==0) {
                    createCategory(dict_consequence_resilience[i])
                } else {
                    var order = i.toString;
                    order = "C".concat(i, ".")
                    myFunction(order.concat(dict_consequence_resilience[i][0]), id)
                    createAnswer(dict_consequence_resilience[i][1], id)
                    
                    myFunction(order.concat(Weight[1][0]), idW)
                    createAnswer(Weight[1][1], idW)
                    
                    myFunction(order.concat(DQ[1][0]), idDQ)
                    createAnswer(DQ[1][1], idDQ)
                }
            }
            CreateArrowUp(id)

            for (var i=0; i < res_arr.length; i++) {
                Createlabel("Nhân tố - ".concat(res_arr[i]));
                idDQ = idDQ.concat(i);
                idW = idW.concat(i);
                var a = 2;
                for (var j = 0; j < Object.keys(dict_exposure).length + Object.keys(dict_consequence_sensitivity).length; j++) {
                    // console.log(dict_exposure[j])
                    var x = j+1;
                    var order = i + 1;
                    if (x < 4) {
                        if (x == 1) {
                            createCategory("Tiêu chí phơi nhiễm (Exposure criteria)")
                        }
                        id = "E".concat(i, j)
                        
                        // order = order.toString;
                        order = "C".concat(order, ".", j, '. ')
                        myFunction(order.concat(dict_exposure[x][0].replace("'TN'", res_arr[i])), id)
                        createAnswer(dict_exposure[x][1], id)
                      
                        myFunction(order.concat(Weight[1][0]), idW.concat(id))
                        createAnswer(Weight[1][1], idW.concat(id))
                        
                        myFunction(order.concat(DQ[1][0]), idDQ.concat(id))
                        createAnswer(DQ[1][1], idDQ.concat(id))
                        if (x == 3) {
                            CreateArrowUp(id)
                        }
                    } else {
                        if (j-a == 1) {
                            createCategory("Tiêu chí hậu quả (Consequence criteria)")
                        }
                        id = "C".concat((j-a), i)
           
                        order = "C".concat(order, ".", j, '. ')
                        myFunction(order.concat(dict_consequence_sensitivity[j-a][0].replace("'TN'", res_arr[i])), id)
                        createAnswer(dict_consequence_sensitivity[j-a][1], id)
                        
                        myFunction(order.concat(Weight[1][0]), idW.concat(id))
                        createAnswer(Weight[1][1], idW.concat(id))
                        
                        myFunction(order.concat(DQ[1][0]), idDQ.concat(id))
                        createAnswer(DQ[1][1], idDQ.concat(id))

                        if (x == Object.keys(dict_exposure).length + Object.keys(dict_consequence_sensitivity).length) {
                            CreateArrowUp(id)
                        }
                    }
                }
              
              
            }

            for (var i=1; i <- Object.keys(DQ).length; i++) {
                id = "DQ".concat(i);
                myFunction(DQ[i][0])
                createAnswer(DQ[i][1], id)
            }
            
            for (var i=1; i < Object.keys(Weight).length; i++) {
                id = "Weight".concat(i);
                myFunction(Weight[i][0])
                createAnswer(Weight[i][1], id)
            }   
            // CreateArrowUp(id)
        }
        
    }

    function myFunction(text, id) {
        var string = text
        var question = document.createElement("p");
        question.innerText = string;
        question.setAttribute('id', id);
        question.setAttribute('style', 'font-weight: 900;');

        var allSelects = document.getElementsByClassName("content");
        var lastSelect = allSelects[allSelects.length-1];
        // console.log(lastSelect)
        lastSelect.appendChild(question);
    }

    function Createlabel(text) {
        var label = document.createElement("h2");
        label.innerText = text;
        document.getElementById('questionaire').appendChild(label);
    }

    function createCategory(text) {
        var label = document.createElement("button");
        var container = document.createElement('div')
        label.innerText = text;
        label.setAttribute('id', "collapsible");
        label.setAttribute('type', 'button');
        label.setAttribute('class', "collapsible-1");
        // label.setAttribute('style', 'color:blue;');
        document.getElementById('questionaire').appendChild(label);

        container.setAttribute('class', 'content');
        container.setAttribute('id', 'content');
      
        document.getElementById('questionaire').appendChild(container);
    }

    function createAnswer(data, id) {
        for (var m = 1; m <= Object.keys(data).length; m++) {
            var question = document.createElement('input')
            var label = document.createElement('label')
            var downline = document.createElement('br');
            question.setAttribute('name', 'Answer'.concat(id));
            // question.setAttribute('value', data[m]);
            question.setAttribute('value', m);
            question.setAttribute('type', 'radio');
            label.innerText = data[m];

            var allSelects = document.getElementsByClassName("content");
            var lastSelect = allSelects[allSelects.length-1];

            lastSelect.appendChild(question);
            lastSelect.appendChild(label);
            lastSelect.appendChild(downline);
        }
    }

    function CreateArrowUp(id) {
        var btn = document.createElement('button')
        var arrowUp = document.createElement('i')
        
        btn.setAttribute('class', 'btn')
        btn.setAttribute('onclick', 'SlideUp(this.id)')
        btn.setAttribute('id', id)
        // btn.setAttribute('style', 'position: absolute; right: 0; margin-top: 30px;')
        // btn.setAttribute('style', 'position: absolute; right: 0; margin-right: 300px;')
        // btn.setAttribute('id', 'btn')
        
        arrowUp.setAttribute('class', 'arrow up')
        
        // arrowUp.setAttribute('onclick', '')
        var allSelectsC = document.getElementsByClassName("content");
        var lastSelect_C = allSelectsC[allSelectsC.length-1];
        lastSelect_C.appendChild(btn);

        var allSelectsB = document.getElementsByClassName("btn");
        var lastSelect_B = allSelectsB[allSelectsB.length-1];
        lastSelect_B.appendChild(arrowUp); 
    }

    function getAllNameInputTag() {
        console.clear();
        var inputs = document.getElementsByTagName('input');
        for (var index = 0; index < inputs.length; ++index) {
            console.log(inputs[index].name);
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

// Create affect collapsible
{
    
    function Animation() {
        var coll = document.getElementsByClassName("collapsible-1");
        var i;
        // console.log(Array.from(coll));
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
    
    function SlideUp(id) {
        var x = document.getElementById(id).parentElement;
        const form = document.forms['submit-to-google-sheet']
        form.addEventListener('submit', e => {
            e.preventDefault()
        })
        console.log(x)
        var content = x;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    }
}

// Create function to read data from google spreadsheet 
{
    function SUbmitGSS() {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwFI1zlY_1g2M3ZSFNYuE23m8FlIxaYgg6LQC5fJvZRyJ6wMWEUD0R00n7IDm8FjyLrLw/exec'
        const form = document.forms['submit-to-google-sheet']
        // console.log(form);
        var confirm;
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                confirm = "Success!";
                console.log(confirm, response)
                alert('Nhập dữ liệu thành công. Cám ơn sự đóng góp của anh (chị)!')
            })
            .catch(error => {
                confirm = "Error!";
                console.error(confirm, error.message)
                alert('Nhập dữ liệu thất bại. Xin hãy kiểm tra lại câu trả lời!')
            })
        })
    }
}

$(document).ready(function(){
    // Do stuff here, including _calling_ codeAddress(), but not _defining_ it!
    collapsible();
});