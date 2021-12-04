const data = {
    template: `
    <div class="data">
        <h2>Lựa chọn các câu hỏi nghiên cứu</h2>
        <div class="data-wrapper">
            <div class="left">
                <h3>Bảng 1</h3>     
                <ol>
                    <li><span style="text-decoration: underline;">Trả lời cho SPECIES: </span><br>
                        Có bao nhiêu loài ong xuất hiện tại địa phương? <br>
                        Chúng là các loài ong gì? (gồm loài ong mật và loài ong khác?)
                    </li>
                    <li><span style="text-decoration: underline;">Trả lời cho nesting_suitability_[SUBSTRATE]_index: </span><br>
                        Trong tự nhiên, vị trí làm tổ của các loài ong này ở đâu (treo dưới cành cây lớn, trong các bộng cây, hốc cây, dưới vách đá,…)? (có khác nhau giữa các loài ong hay không?) <br>
                        Trong đó, vị trí làm tổ nào là chủ yếu? <br>
                        Ngoài ra, thực hiện thí nghiệm theo <a href="https://drive.google.com/file/d/15a06laMeFm2cSRMw232E_Mgvo-UWWX88/view?usp=sharing" target="_blank">Wilkaniec, Z., & Giejdasz, K. (2003)</a>, đánh giá các loại vật liệu phù cho ong làm tổ 
                    </li>
                    <li><span style="text-decoration: underline;">Trả lời cho foraging_activity_[SEASON]_index và alpha:</span><br>
                        Những loài cây nào cung cấp nguồn phấn hoa, mật hoa cho các loài ong? <br>
                        Vị trí các loài cây này ở đâu? (theo từng loài?) Ước tính khoảng cách bao nhiêu so với vị trí làm tổ ong trong tự nhiên và ong nuôi?<br>
                        Hệ số alpha có thể được tham khảo từ bài báo của <a href="https://drive.google.com/file/d/14MrHsGzvRTTTIEtwzWPzGDeIvfcDpa4d/view?usp=sharing" target="_blank">Kennedy et al. 2013</a> <br>
                        Ngoài ra, hệ số alpha có thể được ước tính theo cách sử dụng hàm năng lượng <a href="https://nature.berkeley.edu/kremenlab/wp-content/uploads/2014/03/Bee-Foraging-Ranges-and-their-relationship-Greenleaf-WIlliams-Winfree-Kremen.pdf" target="_blank">(Greenleaf et al. 2007)</a>
                    </li>
                    <li><span style="text-decoration: underline;">Trả lời cho RELATIVE_ABUNDACE:</span> <br>
                        Loài ong nào chiếm ưu thế cao tại địa phương? <br>
                        Nếu có thì mùa nào loài ong hoạt động thụ phấn nhiều nhất? (có khác nhau giữa các loài hay không?)<br>
                        relative abundance thu được trọng số đối với mỗi loài chỉ có thể dựa trên ý kiến chuyên gia hoặc quan sát thực nghiệm theo  <a href="https://drive.google.com/file/d/14vPPUdWFPTkuUTqwzsJqnSJRkb6M3GBv/view?usp=sharing" target="_blank">Lonsdorf cs. (2009)</a><br>
                        Theo <a href="https://drive.google.com/file/d/12DEwmgbiNogS1DdZJJOsv7KXQMSKXkHY/view?usp=sharing" target="_blank">Davis, Amélie cs. (2017)</a>, bằng cách sử dụng thông tin trên nguồn tài nguyên làm tổ nhân tố thụ phấn và nguồn nguồn hoa màu, 
                        <a href="https://drive.google.com/file/d/14vPPUdWFPTkuUTqwzsJqnSJRkb6M3GBv/view?usp=sharing" target="_blank">Lonsdorf cs. (2009)</a> 
                        đã dự đoán "relative abundace" của các nhân tố thụ phấn khả dụng để thụ phấn cho các vụ mùa ở nông trại. 
                    </li>
                </ol>
            </div>
            <div class="right">
                <h3>Bảng 2</h3>
                <p>Đối với bảng này có thể tham khảo theo phương pháp <a href="https://drive.google.com/file/d/15vRIdpsu2LmKS9ZZwcVgTftp9nWSe8Mx/view?usp=sharing" target="_blank">Koh, Insu cs. (2015)</a></p>
                <ol>
                    <li><span style="text-decoration: underline;">Trả lời cho nest_[SUBSTRATE]_availability_index: </span><br>
                        Số lượng tổ ong trong tự nhiên được phát hiện nhiều hay ít tại địa phương? Ước lượng được không?<br>
                    </li>
                    <li><span style="text-decoration: underline;">Trả lời cho floral_resources_[SEASON]_index:</span><br>
                        Diện tích các loài cây này khoảng bao nhiêu? (theo từng loài?) <br>
                        Mùa ra hoa của các loài cây này là mùa nào? (theo từng loài?) <br>
                        Các loài cây này ra hoa đồng loạt cùng thời điểm một mùa hay chúng nở hoa không đồng loạt trong các mùa?<br>
                        Ngoài ra, nếu trong trường hợp không thể dựa trên phỏng vấn để ước tính ra chúng ta có thể kết hợp ảnh vệ tinh MODIS 
                        => tìm ra % của lớp phủ hoa màu theo <a href="https://drive.google.com/file/d/1nY2V2IDB_Hr_7sKeZwOrL1XAbOkQovOS/view?usp=sharing" target="_blank">Zhao cs. (2019)</a>
                    </li>
                </ol>
            </div>
        </div>
    </div>
    `
}