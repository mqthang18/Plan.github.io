const data = `<div class="data">
                <div id="HQ" style="min-height: 300px;">
                    <h2>Đánh giá chất lượng sinh cảnh ven biển</h2>
                    <div>
                        <h3>Câu hỏi phỏng vấn</h3>
                        <ul>
                            <li id="HQq1">Bảng 1. Nhân tố đe dọa sinh cảnh</li>
                            <li id="HQq2">Bảng 2. Độ nhạy của sinh cảnh đối với tác nhân đe dọa</li>
                        </ul>
                    </div>
                </div>
                <div id="HRA" style="min-height: 300px;">
                    <h2>Đánh giá rủi ro sinh cảnh rừng ngập mặn</h2>
                    <div>
                        <h3>Câu hỏi phỏng vấn</h3>
                        <ul>
                            <li>
                                <h4 id="HRAq1">Bảng 1. Bảng thông tin sinh cảnh nhân tố stress</h4>
                                <p>Các thông tin cần</p>
                                    <ul>
                                        <li>Shapefile mô tả sự phân bố của các nhân tố trong khu vực nghiên cứu</li>
                                        <li>Stressor buffer (thể hiện ở đơn vị mét) - <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1557676/#:~:text=The%20stress%2Dbuffering%20hypothesis%20holds,undermining%20(Rook%2C%201998)." target="_blank">giả thuyết giảm căng thẳng</a></li>
                                    </ul>
                                    <ol>
                                        <li>
                                            <h5 id="HRAq2ST">Khu vực Sóc Trăng</h5>
                                            <ul>
                                                <li>
                                                Các nhân tố được báo cáo
                                                    <ul>
                                                        <li>Xói lở bờ biển</li>
                                                        <li>Rừng thiệt hại do khô hạng thiếu nước</li>
                                                        <li>Khu vực nguy cơ cao ghe cào đánh bắt thủy hải sản thiệt hại rừng trồng</li>
                                                        <li>Khai thác cây rừng ngập mặn bất hợp pháp</li>
                                                        <li>Thay đổi về sử dụng đất rừng ngập mặn (sang ao nuôi tôm)</li>
                                                        <li>Ô nhiễm môi trường (túi nilon, hóa chất từ ao nuôi)</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h5 id="HRAq2KG">Khu vực Kiên Giang</h5>
                                            <ul>
                                                <li>
                                                    Nhân tố được báo cáo: Sạc lở gây ra thiệt hại đến sinh cảnh nghiêm trọng nhất <br>
                                                    Ngoài ra một số nơi có hiện tượng bồi tụ, tái sinh tự nhiên cần được chú ý
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h5 id="HRAq2CM">Khu vực Cà Mau</h5>
                                            <ul>
                                                <li>
                                                Các nhân tố được báo cáo
                                                    <ul>
                                                        <li>Sạc lở</li>
                                                        <li>Đánh bắt thủy sản</li>
                                                        <li>Chưa rõ ràng các nhân: Tuyến dân cư, khu vực dân cư</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>
                            </li>
                            <li>
                                <h4 id="HRAq2">Bảng 2. Bảng tiêu chí</h4>
                                <p>Mô tả khả năng phục hồi của sinh cảnh rừng ngập mặn đang nghiên cứu</p>
                                <ul>
                                    <li>Tỉ lệ tự tái sinh hoặc được trồng mới - mức độ quan trọng đối với khả năng phục hồi của RNM - Nguồn dữ liệu (do tự cá nhân đưa ra dựa trên chuyên nghành hay do các tài liệu nghiên cứu có liên quan)</li>
                                    <li>Tỉ lệ tử vong tự nhiên - mức độ quan trọng đối với khả năng phục hồi của RNM - Nguồn dữ liệu (do tự cá nhân đưa ra dựa trên chuyên nghành hay do các tài liệu nghiên cứu có liên quan)</li>
                                    <li>Tính kết nối - mức độ quan trọng đối với khả năng phục hồi của RNM - Nguồn dữ liệu (do tự cá nhân đưa ra dựa trên chuyên nghành hay do các tài liệu nghiên cứu có liên quan)</li>
                                    <li>Thời gian phục hồi - mức độ quan trọng đối với khả năng phục hồi của RNM - Nguồn dữ liệu (do tự cá nhân đưa ra dựa trên chuyên nghành hay do các tài liệu nghiên cứu có liên quan)</li>
                                </ul>
                                <p>Mô tả sự tác động của nhân tố stress và hậu quả của nó</p>
                                <ul>
                                    <li>
                                        Khả năng tấc động
                                        <ol>
                                            <li>Thời gian xảy ra? (Từ tháng nào?) - mức độ quan trọng đối với nhân tố tác động này - Nguồn dữ liệu (do tự cá nhân đưa ra dựa trên chuyên nghành hay do các tài liệu nghiên cứu có liên quan)</li>
                                            <li>Cường độ xảy ra? (Bao nhiêu lần / năm) - mức độ quan trọng đối với nhân tố tác động này - Nguồn dữ liệu (do tự cá nhân đưa ra dựa trên chuyên nghành hay do các tài liệu nghiên cứu có liên quan)</li>
                                            <li>Các chính sách quản lý (Có hiệu quả hay không) - mức độ quan trọng đối với nhân tố tác động này - Nguồn dữ liệu (do tự cá nhân đưa ra dựa trên chuyên nghành hay do các tài liệu nghiên cứu có liên quan)</li>
                                        </ol>
                                    </li>
                                    <li>
                                        Kết quả 
                                        <ol>
                                            <li>Tần số xảy ra sự nhiễu loạn có cơ chế tương tự như các tác động của tác nhân này? (Hằng ngày => hằng tuần; 1 vài lần trên năm; ít xảy ra) - mức độ quan trọng đối với nhân tố tác động này - Nguồn dữ liệu (do tự cá nhân đưa ra dựa trên chuyên nghành hay do các tài liệu nghiên cứu có liên quan)</li>
                                            <li>Sự thay đổi trao cấu trúc của sinh cảnh khi bị tác nhân tác động (Có tài liệu thống kê liên quan hay không?) - mức độ quan trọng đối với nhân tố tác động này - Nguồn dữ liệu (do tự cá nhân đưa ra dựa trên chuyên nghành hay do các tài liệu nghiên cứu có liên quan)</li>
                                            <li>Sự thay đổi trong diện tích của sinh cảnh - mức độ quan trọng đối với nhân tố tác động này - Nguồn dữ liệu (do tự cá nhân đưa ra dựa trên chuyên nghành hay do các tài liệu nghiên cứu có liên quan)</li>
                                        <ol>
                                    </li>
                                </ul>
                                    <ol>
                                        <li>
                                            <h5 id="HRAq2ST">Khu vực Sóc Trăng</h5>
                                            <ul>
                                                
                                            </ul>
                                        </li>
                                        <li>
                                            <h5 id="HRAq2KG">Khu vực Kiên Giang</h5>
                                            <ul>
                                                
                                            </ul>
                                        </li>
                                        <li>
                                            <h5 id="HRAq2CM">Khu vực Cà Mau</h5>
                                            <ul>
                                                
                                            </ul>
                                        </li>
                                    </ol>    
                            </li> 
                        </ul>
                    </div>
                </div>
              </div>`