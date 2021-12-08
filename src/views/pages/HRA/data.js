const data = `
        <div class="data">    
            <p>Nguồn dữ liệu bản đồ sinh cảnh (Habitat map): <a href="https://www.eorc.jaxa.jp/ALOS/en/dataset/lulc_e.htm" target="_blank">Link</a></p>
                <div>Tài liệu tham khảo</div>
                <ol>
                    <li>Phạm Thu Thủy, et al. "Cơ hội và thách thức đối với quản lý rừng ngập mặn tại Việt Nam."</li>
                    <li>Arkema, Katie K., et al. "Assessing habitat risk from human activities to inform coastal and marine spatial planning: a demonstration in Belize." Environmental Research Letters 9.11 (2014): 114016.</li>
                    <li>Caro, Claudia, et al. "Ecosystem services as a resilience descriptor in habitat risk assessment using the InVEST model." Ecological Indicators 115 (2020): 106426.</li>
                    <li>NGUYEN, Tanh, et al. "APPLYING A SOFT SYSTEM METHODOLOGY TO REVEAL PROBLEMS IN MANGROVE-AQUACULTURE SYSTEM." Journal of Environmental Science for Sustainable Society 10.Supplement (2021): MR05_p17-MR05_p22.</li>
                </ol>
                <span style="font-size: 32px; font-weight: 900; text-decoration: underline;">Nội dung phỏng vấn</span>
                    <p>* Shapefile được tạo bằng phương thức khảo sát thực tế dựa trên sự hướng dẫn của cán bộ (người dân) địa phương</p>
                    <form id="submit-to-google-sheet" name="submit-to-google-sheet">
                        <div class="PersonalInfo">
                            <p>Thông tin người tham gia phỏng vấn</p>
                            <input name="Full name" type="text" placeholder="Họ và tên">
                            <br>
                            <input name="Organization" type="text" placeholder="Tỉnh thành cư trú">
                            <br>
                            <!-- <button type="submit" onclick="SUbmitGSS()">Send</button> -->
                        </div>
                    <!-- </form> -->
                        <div class="question">
                            <p><span style="font-weight: 900;">Mời anh (chị) đánh vào ô trống để cung cấp các thông tin về những nhân tố thực tế đang diễn ra tại địa phương?</span></p>
                            Và từ các tác nhân đã chọn anh (chị) hãy tạo một bản đồ (điểm, đường hoặc vùng) cung cấp phạm vi hoạt động của chúng bằng cách điền khoảng cách từ biên bản đồ đến nơi tối đa mà nhân tố có thể di chuyển tới?
                                <ul style="list-style-type:none;">
                                    <li>
                                        <input type="checkbox" class="Factors" name="Factors1" value="Khai thác cây rừng ngập mặn (bất hợp pháp)">Khai thác cây rừng ngập mặn (bất hợp pháp)<br>
                                        <input type="checkbox" class="Factors" name="Factors2" value="Đánh bắt thủy hải sản trong rừng ngập mặn (Cá, cua, vọp, ba khía, tôm,...)">Đánh bắt thủy hải sản trong rừng ngập mặn (Cá, cua, vọp, ba khía, tôm,...)<br>
                                        <input type="checkbox" class="Factors" name="Factors3" value="Thay đổi về sử dụng đất rừng ngập mặn (sang ao nuôi tôm, cá hợp pháp và bất hợp pháp)">Thay đổi về sử dụng đất rừng ngập mặn (sang ao nuôi tôm, cá hợp pháp và bất hợp pháp)<br>
                                        <input type="checkbox" class="Factors" name="Factors4" value="Phát triển cơ sở hạ tầng (giao thông, đô thị,...)">Phát triển cơ sở hạ tầng (giao thông, đô thị,...)<br>
                                        <input type="checkbox" class="Factors" name="Factors5" value="Ô nhiễm môi trường (túi nilong, hóa chất từ ao nuôi,..)">Ô nhiễm môi trường (túi nilong, hóa chất từ ao nuôi,..)<br>
                                        <input type="checkbox" class="Factors" name="Factors6" value="Xói lở đất">Xói lở đất (tàu bè qua lại, do sóng biển...)<br>
                                        <input type="checkbox" class="Factors" name="Factors7" value="Biến đổi khí hậu (mực nước biển tăng, nước quá mặn,...)">Biến đổi khí hậu (mực nước biển tăng, nước quá mặn,...)<br>
                                        <input type="checkbox" class="Factors" name="Factors8" value="Một số dịch vụ du lịch sinh thái có liên quan">Một số dịch vụ du lịch sinh thái có liên quan<br>
                                        <input type="checkbox" class="Factors" name="Factors9" value="Loài côn trùng vi sinh gây bệnh xâm lấn">Loài côn trùng vi sinh gây bệnh xâm lấn<br>
                                    </li>
                                </ul>
                                <input type="button" onclick="GetResponse()" value="Xác nhận">
                        </div>
                        <br>
                
                        <div class="questionaire" id="questionaire"></div>
                    </form>
        </div>            
    `
