const container = `
    <div class="data" style="background-color: #d9d9ff;">
        <h3>Nội dung -  Bản scan phiếu phỏng vấn: <a href="https://drive.google.com/drive/folders/1seI3cR4vWnbsJ3kWray9bDZo3_Sb-pp1?usp=sharing" target="_blank">Link</a></h3>
        <ul>
            <li>
                <a href="#" v-on:click="scrollToBottom($event,'HQ')">Đánh giá chất lượng sinh cảnh</a>
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
                        <a href="#" v-on:click="scrollToBottom($event,'HQ5')">Biểu diễn khu vực phân bố</a>
                    </li>
                    <li>
                        <a href="#" v-on:click="scrollToBottom($event,'HQ6')">Mô tả những thay đổi sinh cảnh trong tương lai</a>
                    </li>
                    <li>
                        <a href="#" v-on:click="scrollToBottom($event,'HQ7')">Biểu diễn khu vực phân bố</a>
                    </li>
                    <li>
                        <a href="#" v-on:click="scrollToBottom($event,'HQ8')">Mô tả thay đổi về mức độ tác động của nhân tố qua không gian</a>
                    </li>
                    <li>
                        <a href="#" v-on:click="scrollToBottom($event,'HQ9')">Biểu diễn sự chuyển dịch trong tương lai khu vực phân bố tác nhân gây suy thoái chất lượng sinh cảnh</a>
                    </li>
                    <li>
                        <a href="#" v-on:click="scrollToBottom($event,'HQ10')">
                        Trọng số giữa các cặp tác động
                        </a>
                    </li>
                    <li>
                        <a href="#" v-on:click="scrollToBottom($event,'HQ11')">
                        Mức độ tác động tiêu cực lên sinh cảnh của các nhân tố tác động
                        </a>
                    </li>
                    <li>
                        <a href="#" v-on:click="scrollToBottom($event,'HQ12')">
                        Mức độ tác động tích cực lên sính cảnh                             
                        </a>
                    </li>
                </ol>
            </li>
            <li>
                <a href="#" v-on:click="scrollToBottom($event,'HRA')">Đánh giá rủi ro sinh cảnh</a>
            </li>
        </ul>
    </div>
`