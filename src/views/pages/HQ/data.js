const data = `
    <div class="data">
    <p>Nguồn dữ liệu bản đồ sinh cảnh (Habitat map): <a href="https://www.eorc.jaxa.jp/ALOS/en/dataset/lulc_e.htm" target="_blank">Link</a></p>
    <span style="font-size: 32px; font-weight: 900; text-decoration: underline;">Nội dung phỏng vấn</span>
        <p>* Shapefile được tạo bằng phương thức khảo sát thực tế dựa trên sự hướng dẫn của cán bộ (người dân) địa phương</p>
        <p>* Các dữ liệu dưới đây sẽ được thống kê lại và đưa vào mô hình toán học AHP để thực hiện phân tích đánh giá thứ bậc</p>
        <form id="submit-to-google-sheet" name="submit-to-google-sheet">
            <input name="Full name" type="text" placeholder="Họ và tên">
            <br>
            <input name="Organization" type="text" placeholder="Đơn vị công tac">
            <br>
            <div class="question">
                <p><span style="font-weight: 900;">Từ danh sách các nhân tố gây tiêu cực lên sinh cảnh RNM đưới đây hãy chọn ra những nhân tố thực tế đang diễn ra tại địa phương anh (chị)?</span></p>
                Và từ các tác nhân đã chọn anh (chị) hãy tạo một bản đồ (điểm, đường hoặc vùng) cung cấp phạm vi hoạt động của chúng bằng cách điền khoảng cách từ biên bản đồ đến nơi tối đa mà nhân tố có thể di chuyển tới? 
                <br>Ngoài ra, anh (chị) có thể cung cấp thêm dư đoán về sự thay đổi của nhân tố về mặt không gian trong tương lai sắp tới?
                <ul style="list-style-type:none;">
                    <li>
                        <input type="checkbox" name="Factors" value="Khai thác cây rừng ngập mặn (bất hợp pháp)">Khai thác cây rừng ngập mặn (bất hợp pháp)<br>
                        <input type="checkbox" name="Factors" value="Đánh bắt thủy hải sản trong rừng ngập mặn (Cá, cua, vọp, ba khía, tôm,...)">Đánh bắt thủy hải sản trong rừng ngập mặn (Cá, cua, vọp, ba khía, tôm,...)<br>
                        <input type="checkbox" name="Factors" value="Thay đổi về sử dụng đất rừng ngập mặn (sang ao nuôi tôm, cá hợp pháp và bất hợp pháp)">Thay đổi về sử dụng đất rừng ngập mặn (sang ao nuôi tôm, cá hợp pháp và bất hợp pháp)<br>
                        <input type="checkbox" name="Factors" value="Phát triển cơ sở hạ tầng (giao thông, đô thị,...)">Phát triển cơ sở hạ tầng (giao thông, đô thị,...)<br>
                        <input type="checkbox" name="Factors" value="Ô nhiễm môi trường (túi nilong, hóa chất từ ao nuôi,..)">Ô nhiễm môi trường (túi nilong, hóa chất từ ao nuôi,..)<br>
                        <input type="checkbox" name="Factors" value="Xói lở đất">Xói lở đất (tàu bè qua lại, do sóng biển...)<br>
                        <input type="checkbox" name="Factors" value="Biến đổi khí hậu (mực nước biển tăng, nước quá mặn,...)">Biến đổi khí hậu (mực nước biển tăng, nước quá mặn,...)<br>
                        <input type="checkbox" name="Factors" value="Một số dịch vụ du lịch sinh thái có liên quan">Một số dịch vụ du lịch sinh thái có liên quan<br>
                        <input type="checkbox" name="Factors" value="Loài côn trùng vi sinh gây bệnh xâm lấn">Loài côn trùng vi sinh gây bệnh xâm lấn<br>
                    </li>
                </ul>
                <input type="button" onclick="GetResponse()" value="Xác nhận">
                
            </div>
            <br>
    
            <div id="questionaire"></div>
        </form>
    </div>  
    `