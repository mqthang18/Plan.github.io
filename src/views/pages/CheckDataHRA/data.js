var data = `
    <div id="Wrapper">
        <div id="LULCmap">
            <button id="collapsible" class="collapsible" type="button" style="text-align: left; text-decoration: underline;">Dữ liệu bản đồ lớp phủ và sử dụng đất, LULC map</button>
            <div id="content" class="content" style="width: 100vw; max-width: 100%;">
                <table>
                    <tr>
                        <th>Bản đồ sử dụng</th>
                        <th>Thời gian</th>
                        <th>Nguồn</th>
                    </tr>
                    <tr>
                        <td>HRLULC 30m resolution map of VN [1990-2020, each year]</td>
                        <td>2020</td>
                        <td><a href="https://www.eorc.jaxa.jp/">https://www.eorc.jaxa.jp/</a></td>
                    </tr>
                </table>
                <p>Sử dụng phần mềm QGIS để trích ra lớp phủ rừng ngập mặn ở dạng shapefile (.shp)</p>
            </div>
        </div>
        <div id="ThreatInfo">
            <button id="collapsible" class="collapsible" type="button" style="text-align:left; text-decoration: underline;">Dữ liệu bảng thông tin nhân tố đe dọa và sinh cảnh</button>
            <div id="content" class="content" style="width: 100vw; max-width: 100%;">
                <table>
                    <tr>
                        <td>Nhân tố tác động</td>
                        <td>Stressor buffer (meters)</td>
                        <td>Nguồn dữ liệu</td>
                    </tr>
                    <tr>
                        <td>Xói mòn, sạc lở</td>
                        <td>5</td>
                        <td>Bác Nguyễn Đức Hoàng</td>
                    </tr>
                    <tr>
                        <td>Đánh bắt thủy hải sản</td>
                        <td>100</td>
                        <td>Bác Nguyễn Đức Hoàng</td>
                    </tr>
                    <tr>
                        <td>Chặt phá trái phép</td>
                        <td>20</td>
                        <td>Bác Nguyễn Đức Hoàng</td>
                    </tr>
                    <tr>
                        <td>Khô hạn</td>
                        <td>100</td>
                        <td>Bác Nguyễn Đức Hoàng
                        <br>
                        Anh Nguyễn Văn Sự
                        </td>
                    </tr>
                    <tr>
                        <td>Ô nhiễm môi trường</td>
                        <td>100</td>
                        <td>Bác Nguyễn Đức Hoàng</td>
                    </tr>
                </table>
            </div>
        </div>
        <div id="CriteriaTable">
            <button id="collapsible" class="collapsible" type="button" style="text-align: left; text-decoration: underline;">Dữ liệu bảng tiêu chí đánh giá</button>
            <div id="content" class="content" style="width: 100vw; max-width: 100%;">
            <table>
                <tr>
                    <th>Đối tượng</th>
                    <th>Khu vực</th>
                    <th>Nguồn dữ liệu</th>
                </tr>

                <tr>
                    <td rowspan="3">Khả năng phục hồi RNM</td>
                    <td>Sóc Trăng</td>
                    <td><a target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vT1L1UeyGGVy095Cx4ygOyJotMiAUF36UQfhJir8kFbWC3uNV3rDgA0F30KDH9Fy6ETu5VuZA68DHzS/pubhtml?gid=0&single=true&widget=true&headers=false">Link (click here)</a></td>
                </tr>
                <tr>
                    <td>Cà Mau</td>
                    <td><a target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS6nRYBNZNm513qNHtRKVOBdes0qFI2PLj_bGmEpvdjWJmjAIQQeXfkzlWDoR7s15wJtywgOKxOUN1s/pubhtml?gid=0&single=true&widget=true&headers=false">Link (click here)</a></td>
                </tr>
                <tr>
                    <td>Kiên Giang</td>
                    <td><a target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSUXqWtT8Ii8K0l3I5Itftc3iFHOX6dt68oUbYdQpu87vHO5G6HhVIyCkI2AS5WrqlOUzhHHL2fHg9B/pubhtml?gid=0&single=true&widget=true&headers=false">Link (click here)</a></td>
                </tr>

                <tr>
                    <td rowspan="3">Mô tả nhân tố xói mòn, sạc lở</td>
                    <td>Sóc Trăng</td>
                    <td><a target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQI78hpkuhxMM105xTGq0WkJycH5Lk4DE7ERClcfBTsbBvi6E6MozLY9vbQAqX56xMfSbUx6jzHunqR/pubhtml?gid=1419884724&single=true&widget=true&headers=false">Link (click here)</a></td>
                </tr>
                <tr>
                    <td>Cà Mau</td>
                    <td><a target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS6nRYBNZNm513qNHtRKVOBdes0qFI2PLj_bGmEpvdjWJmjAIQQeXfkzlWDoR7s15wJtywgOKxOUN1s/pubhtml?gid=1419884724&single=true&widget=true&headers=false">Link (click here)</a></td>
                </tr>
                <tr>
                    <td>Kiên Giang</td>
                    <td>Nhận định nhân tố này không tác đến RNM</td>
                </tr>

                <tr>
                    <td rowspan="3">Mô tả nhân tố đánh bắt, thủy hải sản</td>
                    <td>Sóc Trăng</td>
                    <td><a target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQI78hpkuhxMM105xTGq0WkJycH5Lk4DE7ERClcfBTsbBvi6E6MozLY9vbQAqX56xMfSbUx6jzHunqR/pubhtml?gid=1419884724&single=true&widget=true&headers=false">Link (click here)</a></td>
                </tr>
                <tr>
                    <td>Cà Mau</td>
                    <td><a target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS6nRYBNZNm513qNHtRKVOBdes0qFI2PLj_bGmEpvdjWJmjAIQQeXfkzlWDoR7s15wJtywgOKxOUN1s/pubhtml?gid=1419884724&single=true&widget=true&headers=false">Link (click here)</a></td>
                </tr>
                <tr>
                    <td>Kiên Giang</td>
                    <td>Nhận định nhân tố này không tác đến RNM</td>
                </tr>

                <tr>
                    <td rowspan="3">Mô tả nhân tố chặt phá bất hợp pháp</td>
                    <td>Sóc Trăng</td>
                    <td><a target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQI78hpkuhxMM105xTGq0WkJycH5Lk4DE7ERClcfBTsbBvi6E6MozLY9vbQAqX56xMfSbUx6jzHunqR/pubhtml?gid=1741263756&single=true&widget=true&headers=false">Link (click here)</a></td>
                </tr>
                <tr>
                    <td>Cà Mau</td>
                    <td>Không có thông tin</td>
                </tr>
                <tr>
                    <td>Kiên Giang</td>
                    <td>Nhận định nhân tố này không tác đến RNM</td>
                </tr>

                <tr>
                    <td rowspan="3">Mô tả nhân tố khô hạn</td>
                    <td>Sóc Trăng</td>
                    <td><a target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQI78hpkuhxMM105xTGq0WkJycH5Lk4DE7ERClcfBTsbBvi6E6MozLY9vbQAqX56xMfSbUx6jzHunqR/pubhtml?gid=1563434722&single=true&widget=true&headers=false">Link (click here)</a></td>
                </tr>
                <tr>
                    <td>Cà Mau</td>
                    <td>Nhận định nhân tố này không tác đến RNM</td>
                </tr>
                <tr>
                    <td>Kiên Giang</td>
                    <td>Nhận định nhân tố này không tác đến RNM</td>
                </tr>

                <tr>
                    <td rowspan="3">Mô tả nhân tố ô nhiễm môi trường</td>
                    <td>Sóc Trăng</td>
                    <td>Link (click here)</td>
                </tr>
                <tr>
                    <td>Cà Mau</td>
                    <td><a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS6nRYBNZNm513qNHtRKVOBdes0qFI2PLj_bGmEpvdjWJmjAIQQeXfkzlWDoR7s15wJtywgOKxOUN1s/pubhtml?gid=1563434722&single=true&widget=true&headers=false" target="_blank">Link (Click here)</td>
                </tr>
                <tr>
                    <td>Kiên Giang</td>
                    <td>Nhận định nhân tố này không tác đến RNM</td>
                </tr>
            </table>
            </div>
        </div>
    </div>

`; 