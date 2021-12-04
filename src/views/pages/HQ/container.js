const container = {
    template: `
    <div class="container" style="margin:auto; width: 90vw;">
        <div class="left">
            <button type="button" class="collapsible">Bảng 1. Bảng nhân tố đe dọa sinh cảnh</button>
            <div class="content">
                <br>
                <table>
                    <tr>
                        <td>MAX_DIST</td>
                        <td>WEIGHT</td>
                        <td>THREAT</td>
                        <td>DECAY</td>
                        <td>DESCRIP</td>
                        <td>BASE_PATH</td>
                        <td>CUR_PATH</td>
                        <td>FUT_PATH</td>
                    </tr>
                    <tr>
                        <td>?</td>
                        <td>?</td>
                        <td>A</td>
                        <td>?</td>
                        <td>Optional</td>
                        <td>Optional</td>
                        <td>?</td>
                        <td>Optional</td>
                    </tr>
                </table>
                <ol>
                    <li>MAX_DIST: khoảng cách tối đa mà một tác nhân đe dọa có thể ảnh hưởng (có thể sử dụng công cụ stressor buffer trong QGIS (ArcGIS,...) để biểu diễn)</li>
                    <li>WEIGHT: trọng số của tác nhân đe dọa</li>
                    <li>DECAY: phương trình phân ra qua không gian của tác nhân đe dọa (linear or exponential)</li>
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
                        <td>NAME</td>
                        <td>HABITAT</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Water</td>
                        <td>1</td>
                        <td>0.4</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Soil</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                </table>
                <ol>
                    <li>LULC: thể hiện id của lớp Land use land cover được giải đoán trong ảnh vệ tinh</li>
                    <li>NAME: Tên của lớp LULC được giải đoán (lý thuyết: tùy chọn, nhưng nên đặt theo nguồn dữ liệu)</li>
                    <li>Habitat: Cột này xác định một lớp LULC có phải hay không sinh cảnh sống. Để đơn giản, không găn với thành phần loài thì 1: là sinh cảnh, ngược lại, 0: không phải sinh cảnh. <br> 
                    <span style="color: red;">Nếu gắn với loài thì giá trị Habitat thuộc đoạn [0;1]</span></li>
                </ol>
            </div>
        </div>
    </div>
    `
}