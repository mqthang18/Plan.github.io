const data = `<div class="data">
                <div id="HQ" style="min-height: 300px;">
                    <h2>Đánh giá chất lượng sinh cảnh ven biển</h2>
                    <div>
                        <h3>Câu hỏi phỏng vấn</h3>
                        <ul>
                            <li>
                                <h4 id="HQq1">Bảng 1. Nhân tố đe dọa sinh cảnh</h4>
                                <p>Các thông tin cần</p>
                                <ul>
                                    <li>Shapefile footprint và khoảng cách tác động tối đa mô tả cho nhân tố</li>
                                    <li>Shapefile mô tả phương hướng chuyển dịch của nhân tố trong tương lai</li>
                                    <li>Mức độ hoạt động nhân tố tác động đe dọa đến đa dạng sinh học cho sinh cảnh ven biển</li>
                                </ul>
                                <h5>Các nhân tố đã được xác định ở đợt phỏng vấn 1</h5>
                                <ol>
                                    <li>Khai thác rừng ngập mặn bất hợp pháp - F1</li>
                                    <li>Đánh bắt thủy hải sản trong rừng ngập mặn (Cá, của, vọp, ba khía, tôm) - F2</li>
                                    <li>Thay đổi về sử dụng đất rừng ngập mặn(Sang ao nuôi tôm cá hợp pháp và bất hợp pháp) - F3</li>
                                    <li>Phát triển cơ sở hạ tầng (giao thông, đô thị) - F4</li>
                                    <li>Ô nhiễm môi trường (túi nilon, hóa chất từ ao nuôi) - F5</li>
                                    <li>Xói lở đất (tàu bè qua lại, do sống) - F6</li>
                                    <li>Biển đổi khí hậu (nực nước biển tăng, nước quá mặn...) - F7</li>
                                    <li>Một số dịch vụ du lịch sinh thái có liên quan - F8</li>
                                    <li>Loài côn trùng vi sinh gây bệnh xâm lấn (đối với RNM) - không tính vào phần chất lượng sinh cảnh - F9</li>
                                </ol>
                                <h5>Bảng AHP của trọng số nhân tố</h5>
                                <iframe style="width: 100%; height: 300px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vREdQRpiUU_JKR5EKCTXqVdvr8JkqR-gU9AuhtrhtfSzbhpsL-keD5af0cpQYiNlLUZVTIlG6W2bYwL/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                            </li>
                            <li>
                                <h4 id="HQq2">Bảng 2. Độ nhạy của sinh cảnh đối với tác nhân đe dọa</h4>
                                <p>Thông tin cần</p>
                                <ul>
                                    <li>
                                    Các lớp phủ được khảo sát thích hợp cho sinh vật sinh sông (đã phỏng vấn khái quát)
                                        <ol>
                                            <li>Khu vực đô thị phát triển thấp (nông thôn, khu dân cư thưa dân) - H1</li>
                                            <li>Các khu vực đồng ruộng (trồng lúa) - H2</li>
                                            <li>Các khu vực đất trồng cây ăn quả - H3</li>
                                            <li>Các khu vực đồng cỏ (bãi cỏ lớn) - H4</li>
                                            <li>Các khu vực cây bụi - H5</li>
                                            <li>Các khu vực rừng gỗ tự nhiên - H6</li>
                                            <li>Các khu vực đất ngập nước - H7</li>
                                            <li>Các khu vực nuôi trồng thủy hải sản - H8</li>
                                            <li>Các khu vực rừng ngập mặn - H9</li>
                                        </ol>
                                    </li>
                                    <li>Mức độ nhạy của mỗi lớp phủ là sinh cảnh đối với các nhân tố đe dọa xuất hiện hoặc tiếp cận đối với khu vực (sử dụng phương pháp AHP thước 0 - 10)</li>
                                </ul>
                                <iframe style="width: 100%; height: 600px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vREdQRpiUU_JKR5EKCTXqVdvr8JkqR-gU9AuhtrhtfSzbhpsL-keD5af0cpQYiNlLUZVTIlG6W2bYwL/pubhtml?gid=78997018&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                            </li>
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
                                        <li>Shapefile mô tả sự phân bố của các nhân tố trong khu vực nghiên cứu.</li>
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
                                        Khả năng tác động
                                        <ol>
                                            <li>Thời gian xảy ra? (Từ tháng nào?) - mức độ quan trọng đối với nhân tố tác động này - Nguồn dữ liệu (do tự cá nhân đưa ra dựa trên chuyên nghành hay do các tài liệu nghiên cứu có liên quan)</li>
                                            <li>Cường độ xảy ra? (Bao nhiêu lần / năm) - mức độ quan trọng đối với nhân tố tác động này - Nguồn dữ liệu (do tự cá nhân đưa ra dựa trên chuyên nghành hay do các tài liệu nghiên cứu có liên quan)</li>
                                            <li>Các chính sách quản lý (Có hiệu quả hay không) - mức độ quan trọng đối với nhân tố tác động này - Nguồn dữ liệu (do tự cá nhân đưa ra dựa trên chuyên nghành hay do các tài liệu nghiên cứu có liên quan)</li>
                                        </ol>
                                    </li>
                                    <li>
                                        Kết quả 
                                        <ol>
                                            <li>Tần số xảy ra sự nhiễu loạn tự nhiên có cơ chế tương tự như các tác động của tác nhân này? (Hằng ngày => hằng tuần; 1 vài lần trên năm; ít xảy ra) - mức độ quan trọng đối với nhân tố tác động này - Nguồn dữ liệu (do tự cá nhân đưa ra dựa trên chuyên nghành hay do các tài liệu nghiên cứu có liên quan)</li>
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