const container = `<div class="container" style="display:unset;">
                        <h3>Nội dung</h3>
                        <ol>
                            <li>
                                <a v-on:click="scrollToBottom($event,'HQ')" href="#HQ">Kết quả khảo sát chủ đề đánh giá chất lượng sinh cảnh</a>
                                <ol>
                                    <li>
                                        <a v-on:click="scrollToBottom($event,'HQq1')" href="#HQq1">Bảng 1. Nhân tố đe dọa sinh cảnh</a>
                                    </li>
                                    <li><a v-on:click="scrollToBottom($event,'HQq2')" href="#HQq2">Bảng 2. Độ nhạy của sinh cảnh đối với tác nhân đe dọa</a></li>
                                </ol>
                            </li>
                            <li>
                                <a href="#HRA">Kết quả khảo sát chủ đề đánh giá rủi ro sinh cảnh</a>
                                <ol>
                                    <li>
                                        <a v-on:click="scrollToBottom($event,'HRAq1')" href="#HRAq1">Bảng 1. Bảng thông tin sinh cảnh nhân tố stress</a>
                                        <ul>
                                            <li><a v-on:click="scrollToBottom($event,'HRAq2ST')" href="#HRAq2ST">Khu vực Sóc Trăng</a></li>
                                            <li><a v-on:click="scrollToBottom($event,'HRAq2KG')" href="#HRAq2KG">Khu vực Kiên Giang</a></li>
                                            <li><a v-on:click="scrollToBottom($event,'HRAq2CM')" href="#HRAq2CM">Khu vực Cà Mau</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a v-on:click="scrollToBottom($event,'HQq2')" href="#HRAq2">Bảng 2. Bảng tiêu chí</a>
                                        <ul>
                                            <li><a v-on:click="scrollToBottom($event,'HRAq2ST')" href="#HRAq2ST">Khu vực Sóc Trăng</a></li>
                                            <li><a v-on:click="scrollToBottom($event,'HRAq2KG')" href="#HRAq2KG">Khu vực Kiên Giang</a></li>
                                            <li><a v-on:click="scrollToBottom($event,'HRAq2CM')" href="#HRAq2CM">Khu vực Cà Mau</a></li>
                                        </ul> 
                                    </li>
                                </ol>
                            </li>
                        </ol>  
                   </div>`