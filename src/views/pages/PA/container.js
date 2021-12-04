const container = {
    template: `
    <div class="container">
        <div class="left">
            <button type="button" class="collapsible">Bảng 1. Bảng thông tin thể hiện tập tính của loài ong</button>
            <div class="content">
                <br>
                <table>
                    <tr>
                        <td>SPECIES</td>
                        <td>nesting_suitability_[SUBSTRATE]_index</td>
                        <td>foraging_activity_[SEASON]_index</td>
                        <td>alpha</td>
                        <td>relative_abundace</td>
                    </tr>
                    <tr>
                        <td>?</td>
                        <td>?</td>
                        <td>?</td>
                        <td>?</td>
                        <td>?</td>
                    </tr>
                </table>
                <ol>
                    <li>SPECIES: Tên loài</li>
                    <li>nesting_suitability_[SUBSTRATE]_index: Giá trị thuộc đoạn [0;1], với 1 cho biết chất nền làm tổ được sử dụng hết và 0 cho biết chất nền làm tổ hoàn toàn không được sử dụng.</li>
                    <li>foraging_activity_[SEASON]_index: Chỉ số hoạt động thu thức ăn theo mùa [Season]</li>
                    <li>alpha: Trung bình khoảng cách bay mỗi loài hoặc tập tính di chuyển tới nguồn thức ăn trên hoa màu.</li>
                    <li>relative_abundace: Giá trị thực chỉ ra mức độ hoạt động tương đối của loài đóng góp vào sự hoạt động của các loài thụ phấn.</li>
                </ol>
            </div>
        </div>
        <div class="right">
            <button type="button" class="collapsible">Bảng 2. Độ nhạy của sinh cảnh đối với tác nhân đe dọa được nêu tại bảng 1</button>
            <div class="content">
                <br>
                <table>
                    <tr>
                        <td>LULC</td>
                        <td>Descrip</td>
                        <td>nest_[SUBSTRATE]_availability_index</td>
                        <td>floral_resources_[SEASON]_index</td>
                    </tr>
                    <tr>
                        <td>?</td>
                        <td>?</td>
                        <td>?</td>
                        <td>?</td>
                    </tr>
                </table>
                <ol>
                    <li>LULC: thể hiện id của lớp Land use land cover được giải đoán trong ảnh vệ tinh</li>
                    <li>Descrip: Tên của lớp LULC được giải đoán (lý thuyết: tùy chọn, nhưng nên đặt theo nguồn dữ liệu)</li>
                    <li>nest_[SUBSTRATE]_availability_index: Chỉ số tương đối về tính khả dụng của kiểu tổ đã cho trong mỗi kiểu LULC<br> 
                    <li>floral_resources_[SEASON]_index: chỉ số nguồn hoa màu có trong mùa</li>
                </ol>
            </div>
        </div>
    </div>
    `
}