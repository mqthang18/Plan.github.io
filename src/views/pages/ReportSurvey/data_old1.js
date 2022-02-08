const data = `
    <div id="HQ" style="min-height: 300px;">
        <h2>Đánh giá chất lượng sinh cảnh bằng mô hình Habitat Quality - tóm tắt kết quả: <a href="https://docs.google.com/forms/d/1GA-fs4wv9yP0p14KHl0WzkyEN2wRSSS53XJMa4LnPmA/viewanalytics" target="_blank">Link</a></h2>
        <button id="collapsible" type="button" class="collapsible" style="text-decoration: underline;"><span id="HQsummary">Bảng tóm tắt kết quả phỏng vấn chủ đề đánh giá chất lượng sinh cảnh (Habitat Quality)</span></button>
        <div id="content" class="content" style="width: 98.5%;">
            <table style="margin: auto; width: 100%;" border="1">
                <tr>
                    <th style="width:2%;">STT</th>
                    <th style="width:20%;">Nội dung</th>
                    <th colspan="3">Đã đạt được</th>
                    <th colspan="3">Chưa đạt được</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Sóc Trăng</td>
                    <td>Cà Mau</td>
                    <td>Kiên Giang</td>
                    <td>Sóc Trăng</td>
                    <td>Cà Mau</td>
                    <td>Kiên Giang</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Mô tả diễn biến lớp phủ quá khứ đến nay</td>
                    <td style="text-align: justify;">
                        <p>Theo ý kiến thống nhất của các chuyên gia được phỏng vấn tại địa phương:</p>
                        <p text-align="justify;"> Các lớp phủ H1, H7, H8, H9 có sự tăng lên về mặt diện tích.     
                    </td>
                    <td style="text-align: justify;">
                        Theo ý kiến thống nhất của các chuyên gia được phỏng vấn tại địa phương:
                        <br>
                        <ul>
                            <li>Lớp H6 có sự tăng lên về mặt diện tích </li>
                            <li>Lớp H4, H5: không có sự thay đổi </li>
                        </ul>
                    </td>
                    <td style="text-align: justify;">
                        Chủ yếu lớp phủ H8, H9 có sự gia tăng về mặt diện tích
                    </td>
                    <td colspan="3" style="text-align: justify;">
                        Một số sự thay đổi của các lớp phủ còn chưa thống nhất được ý kiến. 
                        <br>
                        Dữ liệu chưa thống nhất được về mặt mốc thời gian diễn ra và tài liệu đính kèm chủ yếu được cung cấp dựa trên cơ sở là theo quan sát chủ quan của chuyên gia. 
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Mô tả mức độ suy thoái sinh cảnh hiện nay</td>
                    <td style="text-align: justify;">
                    Theo ý kiến thống nhất của các chuyên gia được phỏng vấn tại địa phương:
                    <br>
                        Mức độ suy thoái khoảng năm 2014, 2015 đến 2022 tại lớp phủ H1 là 2 điểm, H2 là 4 điểm
                    </td>
                    <td style="text-align: justify;">
                    Theo ý kiến thống nhất của các chuyên gia được phỏng vấn tại địa phương:
                    <br>
                        <ul>
                            <li>Mức độ suy thoái tại các lớp phủ H2, H4, H5, H6, H7, H9 là 0 điểm</li>
                            <li>Tài liệu đính kèm ở anh Lê Tỏa Rạng cung cấp các lớp phủ H6, H7, H8, H9 có tham khảo theo chuyên nghành, tài liệu lưu hành nội bộ</li>
                        </ul>
                    </td>
                    <td style="text-align: justify;">
                        Chất lượng rừng ngập mặn giữ nguyên chưa thấy có sự suy thoái, có tài liệu thống kê, báo cáo thường niên 
                    </td>
                    <td style="text-align: justify;">
                        Tài liệu đính kèm chủ yếu là các quan sát chủ quan và ý kiến cá nhân của các chuyên gia
                    </td>
                    <td style="text-align: justify;">
                        Mốc thời gian không xác định được
                    </td>
                    <td style="text-align: justify;">
                        Dữ liệu ít
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Mô tả khả năng phục hồi sinh cảnh trong tương lai</td>
                    <td style="text-align: justify;">Theo ý kiến thống nhất của các chuyên gia được phỏng vấn tại địa phương:
                    <br>
                    Các lớp phủ H6, H8 được đánh giá 2 điểm phục hồi
                    </td>
                    <td style="text-align: justify;">
                    Theo ý kiến thống nhất của các chuyên gia được phỏng vấn tại địa phương: 
                    <br>
                        <ul>
                            <li>Các lớp phủ H2, H4, H5 khả năng phục hồi là 0 điểm.</li>
                            <li>Lớp phủ H5 được thống kê báo cáo trong dự án phục hồi và phát triển rừng là không có khả năng phục hồi</li>
                        </ul> 
                    </td>
                    <td></td>
                    <td style="text-align: justify;">Mốc thời gian chưa rõ ràng, dữ liệu chú yếu dựa vào quan sát cá nhân</td>
                    <td style="text-align: justify;">Dữ liệu chủ yếu là ý kiến cá nhân của chuyên gia 
                    </td>
                    <td>Không có dữ liệu</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Mô tả những thay đổi của sinh cảnh trong tương lai</td>
                    <td>
                        <ul>
                            <li>Các lớp H1, H3, H6, H7, H8, H9 có sự tăng lên về diện tích</li>
                            <li>Các lớp H2, H4. H5 không có tăng lên về diện tích</li>
                            <li>Mốc thời gian chủ yếu khoảng 5 - 10 năm trong tương lai </li>
                        </ul>
                    </td>
                    <td style="text-align: justify;">
                        <ul>
                            <li>Mặt diện tích: Lớp phủ H1, H3, H6 được xác định là có sự tăng lên </li>
                            <li>Lớp phủ H2, H4, H5, H7, H8, H9 được xác định là không đổi về diện tích</li>
                            <li>Lớp phủ rừng gỗ tự nhiên được xác định tăng lên mặt về mặt diện tích dựa trên chương trình dự án phục hồi và phát triển thời điểm khoảng năm 2022</li>
                        </ul>
                    </td>
                    <td style="text-align: justify;">
                        RNM có sự gia tăng diện tích theo kế hoạch tăng cường rừng phòng hộ từ năm 2021 - 2030
                    </td>
                    <td style="text-align: justify;">
                        Dữ liệu chủ yếu dựa trên nhận định chủ quan theo ý kiến cá nhân chuyên gia 
                    </td>
                    <td></td>
                    <td>
                        Dữ liệu hạn chế
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Biểu diễn khu vực phân bố các nhân tố và ước lượng khoảng cách tác động tối đa của nhân tố</td>
                    <td>Bản đồ mô tả vị trí phân bố tương đối của các nhân tố</td>
                    <td>Bản đồ mô tả vị trí phân bố tương đối của các nhân tố</td>
                    <td>Bản đồ mô tả vị trí phân bố tương đối của các nhân tố</td>
                    <td>Không ước lượng được khoảng cách tác động tối đa của các nhân tố gây suy thoái chất lượng sinh cảnh được xác định</td>
                    <td>Không ước lượng được khoảng cách tác động tối đa của các nhân tố gây suy thoái chất lượng sinh cảnh được xác định</td>
                    <td>Không ước lượng được khoảng cách tác động tối đa của các nhân tố gây suy thoái chất lượng sinh cảnh được xác định</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Mô tả thay đổi về mức độ tác động của nhân tố qua không gian</td>
                    <td>Chỉ có dữ liệu được xác định tại hội thảo</td>
                    <td>Chỉ có dữ liệu được xác định tại hội thảo</td>
                    <td>Chỉ có dữ liệu được xác định tại hội thảo</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Biểu diễn sự chuyển dịch trong tương lai khu vực phân bố tác nhân gây suy thoái chất lượng sinh cảnh</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Không có dữ liệu</td>
                    <td>Không có dữ liệu</td>
                    <td>Không có dữ liệu</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Trọng số giữa các cặp tác động</td>
                    <td>Đã đạt được chấm điểm tương đối giữa các cặp tác động</td>
                    <td>Đã đạt được chấm điểm tương đối giữa các cặp tác động</td>
                    <td>Đã đạt được chấm điểm tương đối giữa các cặp tác động</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Mức độ tác động tiêu cực lên sinh cảnh của các nhân tố tác động</td>
                    <td>Đã đạt được chấm điểm</td>
                    <td>Đã đạt được chấm điểm</td>
                    <td>Đã đạt được chấm điểm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Mức độ tác động tích cực lên sinh cảnh</td>
                    <td>Đã đạt được chấm điểm</td>
                    <td>Đã đạt được chấm điểm</td>
                    <td>Đã đạt được chấm điểm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
        
    <div id="HRA" style="min-height: 300px; padding-bottom: 5px;">
        <h2>Đánh giá rủi ro sinh cảnh - Tóm tắt kết quả: <a href="https://docs.google.com/forms/d/1h8cVl6cRF6YQFVO-uY9VLz9W4cD15d5paxzpgYXuveI/viewanalytics" target="_blank">Link</a></h2>
        <button id="collapsible" type="button" class="collapsible" style="text-decoration:underline;"><span id="HRAsummary">Bảng tóm tắt kết quả phỏng vấn chủ đề đánh giá chất lượng sinh cảnh (Habitat risk assessment)</span></button>
        <div id="content" class="content" style="width:98.5%;">
            <table style="margin: auto; width: 100%;" border = "1">
                <tr>
                    <th style="width:2%;">STT</th>
                    <th style="width:20%;">Nội dung</th>
                    <th colspan="3">Đã đạt được</th>
                    <th colspan="3">Chưa đạt được</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Sóc Trăng</td>
                    <td>Cà Mau</td>
                    <td>Kiên Giang</td>
                    <td>Sóc Trăng</td>
                    <td>Cà Mau</td>
                    <td>Kiên Giang</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Mô tả khả năng phục hồi sinh cảnh RNM</td>
                    <td>Đã thu được dữ liệu cho mô hình</td>
                    <td>Đã thu được dữ liệu cho mô hình</td>
                    <td>Đã thu được dữ liệu cho mô hình</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Mô tả hiện tượng xói lở tác động đến RNM</td>
                    <td colspan="3">
                        <ul>
                            <li>Cả 3 khu vực được xác định là gặp phải hiện tượng xói lở</li>
                            <li>Đã thu được điểm đánh giá cho mô hình</li>
                        </ul>
                    </td>
                    <td colspan="3">
                        Ở cả 3 khu vực đều không thu được ước lượng về stressor buffer của nhân tố
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Mô tả hiện tượng ghe cào đánh bắt thủy hải sản</td>
                    <td colspan="2">
                        <ul>
                            <li>Sóc Trăng và Cà Mau là hai tỉnh xác định có sự ảnh hưởng của hiện tượng ghe cào đánh bắt hải sản đén sinh cảnh RNM</li>
                            <li>Riêng ở Cà Mau xác định được stressor buffer của nhân tố</li>
                        </ul>
                    </td>
                    <td>Không có sự hiện diện của nhân tố này</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Mô tả hiện tượng khai thác cây rừng bất hợp pháp</td>
                    <td colspan="2">
                        <ul>
                            <li>Sóc Trăng và Cà Mau là hai tỉnh xác định có sự ảnh hưởng của hiện tượng ghe cào đánh bắt hải sản đén sinh cảnh RNM</li>
                            <li>Riêng ở Cà Mau xác định được stressor buffer của nhân tố</li>
                        </ul>
                    </td>
                    <td>Không có sự hiện diện của nhân tố này</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Mô tả hiện tượng ô nhiễm môi trường</td>
                    <td>Nhân tố được xác định không ảnh rừng</td>
                    <td>Ảnh hưởng rừng ngập ngập mặn 400ha chung quanh khu dân cư tập trung. Các tiêu chí mô tả đã được chấm điểm.</td>
                    <td>Không có sự hiện diện của nhân tố này</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Mô tả hiện tượng khô hạn thiếu nước</td>
                    <td>Các tiêu chí mô tả đã được chấm điểm</td>
                    <td>Không có sự hiện diện của nhân tố này</td>
                    <td>Không có sự hiện diện của nhân tố này</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Mô tả hiện tượng thay đổi sử dụng đất</td>
                    <td>Các tiêu chí mô tả đã được chấm điểm</td>
                    <td>Các tiêu chí mô tả đã được chấm điểm</td>
                    <td>Không có sự hiện diện của nhân tố này</td>
                    <td>Chưa có thông tin Stressor buffer</td>
                    <td>Chưa có thông tin Stressor buffer</td>
                    <td></td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Bản đồ mô tả sự phân bố của các nhân tố gây rủi ro sinh cảnh</td>
                    <td colspan="3">Đã thu được bản độ minh họa vị trí phân bố tương đối của các nhân tố</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    </div>
`