const container = `
    <div style="display:flex; font-size: 26px; font-weight: 600;">Mục lục [<a id="StateContent" href="#" style="display:block;" onclick="Content(this.id)">Ẩn</a>]</h3></div>
    <div id="ListContent" class="data" style="background-color: #d9d9ff; padding-bottom: 5px;">
        <h3 style="margin: 0 0 0 5px; padding-top: 20px;">Nội dung -  Bản scan phiếu phỏng vấn: <a href="https://drive.google.com/drive/folders/1seI3cR4vWnbsJ3kWray9bDZo3_Sb-pp1?usp=sharing" target="_blank">Link</a> 
        <ul>
            <li>
                <a href="#" v-on:click="scrollToBottom($event,'HQ')">Đánh giá chất lượng sinh cảnh bằng mô hình Habitat Quality</a>
                <br>
                <a style="color:red; text-decoration: underline; font-weight: 600;" href="#" v-on:click="scrollToBottom($event,'HQsummary')">Bảng tóm tắt kết quả phỏng vấn chủ đề đánh giá chất lượng sinh cảnh (Habitat Quality)</a>
                <ol>
                    <li>
                        <a href="#" v-on:click="scrollToBottom($event,'HQ1')">Mô tả diễn biến lớp phủ quá khứ đến nay</a>
                    </li>
                    <li>
                        <a href="#" v-on:click="scrollToBottom($event,'HQ2')">Mô tả mức độ suy thoái sinh cảnh hiện nay</a>
                    </li>
                    <li>
                        <a href="#" v-on:click="scrollToBottom($event,'HQ3')">Mô tả khả năng phục hồi sinh cảnh trong tương lai</a>
                    </li>
                    <li>
                        <a href="#" v-on:click="scrollToBottom($event,'HQ4')">Mô tả những thay đổi của sinh cảnh trong tương lai</a>
                    </li>
                    <li>
                        <a href="#" v-on:click="scrollToBottom($event,'HQ5')">Biểu diễn khu vực phân bố các nhân tố và ước lượng khoảng cách tác động tối đa của nhân tố - <span style="color:red;">dữ liệu phải có cho mô hình Habitat quality (INVEST)</span></a>
                    </li>
                    <li>
                        <a href="#" v-on:click="scrollToBottom($event,'HQ6')">Mô tả thay đổi về mức độ tác động của nhân tố qua không gian - <span style="color:red;">dữ liệu phải có cho mô hình Habitat quality (INVEST)</span></a>
                    </li>
                    <li>
                        <a href="#" v-on:click="scrollToBottom($event,'HQ7')">Biểu diễn sự chuyển dịch trong tương lai khu vực phân bố tác nhân gây suy thoái chất lượng sinh cảnh</a>
                    </li>
                    <li>
                        <a href="#" v-on:click="scrollToBottom($event,'HQ8')">
                        Trọng số giữa các cặp tác động - <span style="color:red;">dữ liệu phải có cho mô hình Habitat quality (INVEST)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" v-on:click="scrollToBottom($event,'HQ9')">
                        Mức độ tác động tiêu cực lên sinh cảnh của các nhân tố tác động - <span style="color:red;">dữ liệu phải có cho mô hình Habitat quality (INVEST)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" v-on:click="scrollToBottom($event,'HQ10')">
                        Mức độ tác động tích cực lên sính cảnh                             
                        </a>
                    </li>
                </ol>
            </li>
            <li>
                <a href="#" v-on:click="scrollToBottom($event,'HRA')">Đánh giá rủi ro sinh cảnh</a>
                <br>
                <a style="color:red; text-decoration: underline; font-weight: 600;" href="#" v-on:click="scrollToBottom($event,'HRAsummary')">Bảng tóm tắt kết quả phỏng vấn chủ đề đánh giá rủi ro sinh cảnh (Habitat risk assessment)</a>
                <ol>
                    <li><a href="#" v-on:click="scrollToBottom($event, 'HRA1')">Mô tả khả năng phục hồi sinh cảnh RNM</a></li>
                    <li><a href="#" v-on:click="scrollToBottom($event, 'HRA2')">Mô tả hiện tượng xói lở tác động đến RNM</a></li>
                    <li><a href="#" v-on:click="scrollToBottom($event, 'HRA3')">Mô tả hiện tượng ghe cào đánh bắt thủy hải sản </a></li>
                    <li><a href="#" v-on:click="scrollToBottom($event, 'HRA4')">Mô tả hiện tượng khai thác cây rừng bất hợp pháp</a></li>
                    <li><a href="#" v-on:click="scrollToBottom($event, 'HRA5')">Mô tả hiện tượng ô nhiễm môi trường</a></li>
                    <li><a href="#" v-on:click="scrollToBottom($event, 'HRA6')">Mô tả hiện tượng khô hạn thiếu nước</a></li>
                    <li><a href="#" v-on:click="scrollToBottom($event, 'HRA7')">Mô tả hiện tượng thay đổi sử dụng dất</a></li>
                    <li><a href="#" v-on:click="scrollToBottom($event, 'HRA8')">Bản đồ mô tả sự phân bố của các nhân tố gây rủi ro sinh cảnh</a></li>
                </ol>
            </li> 
        </ul>
    </div>
`