const container = `
    <div class="data" style="background-color: #d9d9ff;">
        <h3>Nội dung -  Bản scan phiếu phỏng vấn: <a href="https://drive.google.com/drive/folders/1seI3cR4vWnbsJ3kWray9bDZo3_Sb-pp1?usp=sharing" target="_blank">Link</a></h3>
        <ul>
            <li>
                <a href="#" v-on:click="scrollToBottom($event,'HQ')">Đánh giá chất lượng sinh cảnh bằng mô hình Habitat Quality</a>
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
                <ol>
                    <li><a href="#" v-on:click="scrollToBottom($event, 'HRA1')">Mô tả khả năng phục hồi sinh cảnh RNM</a></li>
                    <li><a href="#" v-on:click="scrollToBottom($event, 'HRA2')">Mô tả hiện tượng xói lở tác động đến RNM</a></li>
                    <li><a href="#" v-on:click="scrollToBottom($event, 'HRA3')">Mô tả hiện tượng ghe cào đánh bắt thủy hải sản </a></li>
                    <li><a href="#" v-on:click="scrollToBottom($event, 'HRA4')">Mô tả hiện tượng khai thác cây rừng bất hợp pháp</a></li>
                    <li><a href="#" v-on:click="scrollToBottom($event, 'HRA5')">Mô tả hiện tượng ô nhiễm môi trường</a></li>
                    <li><a href="#" v-on:click="scrollToBottom($event, 'HRA6')">Mô tả hiện tượng khô hạn thiếu nước</a></li>
                    <li><a href="#" v-on:click="scrollToBottom($event, 'HRA7')">Mô tả hiện tượng thay đổi sử dụng dất</a></li>
                </ol>
            </li>
        </ul>
    </div>
`