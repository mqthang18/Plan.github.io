var data = `
    <div id="Wrapper" style="padding-top: 2vh; padding-bottom: 2vh;">
        <div id="GetDevice">
            <button id="collapsible" class="collapsible" type="button" style="text-align:left; text-decoration: underline;">Lấy thiết bị</button>
            <div id="content" class="content" style="width: 100vw; max-width:100%; padding: 1vh;">
                <table>
                    <tr>
                        <th>Nơi lấy thiết bị</th>
                        <th>Số lượng thiết bị</th>
                        <th>Hình ảnh</th>
                    </tr>
                    <tr>
                        <td id="Device_ST">Sóc Trăng</td>
                        <td>8/9</td>
                        <td><a href="https://drive.google.com/file/d/1Uqww6NQCLnGs5TrjbW8BWbRGk1daYfny/preview" target="_blank">Link</a></td>
                    </tr>
                    <tr>
                        <td id="Device_CM">Cà Mau</td>
                        <td>7/9</td>
                        <td><a href="https://drive.google.com/file/d/1BIH2PAFlqXId5gMkvwDHKy2R6Z9YF5MR/preview" target="_blank">Link</a></td>
                    </tr>
                    <tr>
                        <td id="Device_KG">Kiên Giang</td>
                        <td>9/9</td>
                        <td><a href="https://drive.google.com/file/d/1Z-b_xpKHeNkBxgleiVbLAQtUyAXe-jFU/preview" target="_blank">Link</a></td>
                    </tr>
                </table>
            </div>
        </div>
        <div id='Invest'>
            <button id="collapsible" class="collapsible" type="button" style="text-align: left; text-decoration: underline;">Phỏng vấn bổ sung dữ liệu mô hình InVEST - Habitat Quality</button>
            <div id="content" class="content" style="width:100vw; max-width: 100%; padding: 1vh;">
                <div id="PV_ST">
                    <h3>Phỏng vấn tại Sóc Trăng</h3>
                    <table>
                        <tr>
                            <th>Ký hiệu</th>
                            <th>Tên nhân tố</th>
                            <th>Khoảng cách tác động tối đa (m)</th>
                            <th>Khoảng cách tác động tối đa (km)</th>
                            <th>Ảnh bản đồ, ghi chú</th>
                        </tr>
                        <tr>
                            <td>F1</td>
                            <td>Khai thác RNM</td>
                            <td>50</td>
                            <td>0.05</td>
                            <td><a href="https://drive.google.com/file/d/1WnOWlLVOLmsBhe0eT1e2UoK0HtywSmXJ/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F2</td>
                            <td>Đánh bắt thủy hải sản</td>
                            <td>500</td>
                            <td>0.5</td>
                            <td><a href="https://drive.google.com/file/d/1dNFv9krjUtpMAWl3zGqiIJBiRieO6rKC/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F3</td>
                            <td>Chuyển đất sang ao nuôi tôm</td>
                            <td>20</td>
                            <td>0.02</td>
                            <td><a href="https://drive.google.com/file/d/17eoayB8IFA-TgI4XVeIRxcb4t1Tahj9B/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F4</td>
                            <td>Phát triển cơ sở hạ tầng (giao thông, đô thị)</td>
                            <td>30</td>
                            <td>0.03</td>
                            <td><a href="https://drive.google.com/file/d/1x0zkflbiIvfWp0564HodqkICOdWyZwmP/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F5</td>
                            <td>Ô nhiễm môi trường (túi nilong, chất độc hại)</td>
                            <td>300</td>
                            <td>0.3</td>
                            <td><a href="https://drive.google.com/file/d/1fWnqqsucB_NO8iyZxTAIxuRThhP2tXkc/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F6</td>
                            <td>Xói lở đất</td>
                            <td>30</td>
                            <td>0.03</td>
                            <td><a href="https://drive.google.com/file/d/1ZmLUYRy_O_0zAfFUgXYok4zEyE6ZANOW/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F7</td>
                            <td>Biến đổi khí hậu (Nước biển dâng, xâm nhập mặn)</td>
                            <td>-</td>
                            <td>-</td>
                            <td><a href="https://drive.google.com/file/d/1yHU2i2cQoa2GLP3gb9I-UiogAcYFc2G0/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F8</td>
                            <td>Các dịch vụ du lịch</td>
                            <td>200</td>
                            <td>0.2</td>
                            <td><a href="https://drive.google.com/file/d/16G0i95qvPnKAc1uzcLZSbY2PNfN2bjqA/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F9</td>
                            <td>Loài xâm lấn</td>
                            <td>1414.214</td>
                            <td>1.414</td>
                            <td><a href="https://drive.google.com/file/d/18MYcwYJFcBJglipxBjf1GB8wOSwYWCeT/preview">Link</a></td>
                        </tr>
                    </table>
                </div>
                <div id="PV_CM">
                    <h3>Phỏng vấn tại Cà Mau</h3>
                    <table>
                        <tr>
                            <th>Ký hiệu</th>
                            <th>Tên nhân tố</th>
                            <th>Khoảng cách tác động tối đa (m)</th>
                            <th>Khoảng cách tác động tối đa (km)</th>
                            <th>Ảnh bản đồ, ghi chú</th>
                        </tr>
                        <tr>
                            <td>F1</td>
                            <td>Khai thác RNM</td>
                            <td>-</td>
                            <td>-</td>
                            <td><a href="https://drive.google.com/file/d/1gByvvClj3oFsYfv0MGGUp57dNes25wSC/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F2</td>
                            <td>Đánh bắt thủy hải sản</td>
                            <td>4000</td>
                            <td>4</td>
                            <td><a href="https://drive.google.com/file/d/1clW6fWrL9OoUOx5qw70SKQXs0kIrbS8z/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F3</td>
                            <td>Chuyển đất sang ao nuôi tôm</td>
                            <td>-</td>
                            <td>-</td>
                            <td><a href="https://drive.google.com/file/d/1Ery6hkhe-z7ffLDNi7tPS0vtKNE2NX6_/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F4</td>
                            <td>Phát triển cơ sở hạ tầng (giao thông, đô thị)</td>
                            <td>30</td>
                            <td>0.03</td>
                            <td><a href="https://drive.google.com/file/d/16_SCwEIX_EHxBP1XDdoAFIdfk53uaUr8/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F5</td>
                            <td>Ô nhiễm môi trường (túi nilong, chất độc hại)</td>
                            <td>1000</td>
                            <td>1</td>
                            <td><a href="https://drive.google.com/file/d/1zsa6d55pTKaM51Zi10qcoHOfw3qUkyeV/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F6</td>
                            <td>Xói lở đất</td>
                            <td>-</td>
                            <td>-</td>
                            <td><a href="https://drive.google.com/file/d/12pYVE0KXXMDWtX3kNPOkApyaL34Ah_mW/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F7</td>
                            <td>Biến đổi khí hậu (Nước biển dâng, xâm nhập mặn)</td>
                            <td>-</td>
                            <td>-</td>
                            <td><a href="https://drive.google.com/file/d/1TqkVAQda7zKRdOmQDIRNwB-mKDMOzIgv/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F8</td>
                            <td>Các dịch vụ du lịch</td>
                            <td>30</td>
                            <td>0.03</td>
                            <td><a href="https://drive.google.com/file/d/1jSa9A5cd5LXrZ3IBEjdp6kEyT5bMgI5Z/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F9</td>
                            <td>Loài xâm lấn</td>
                            <td>18</td>
                            <td>0.018</td>
                            <td><a href="https://drive.google.com/file/d/1Nn7Zo8NSEEqCLaJsTLpj1-Q_oQHUZFZg/preview">Link</a></td>
                        </tr>
                    </table>
                </div>
                <div id="PV_KG">
                    <h3>Phỏng vấn tại Kiên Giang</h3>
                    <table>
                        <tr>
                            <th>Ký hiệu</th>
                            <th>Tên nhân tố</th>
                            <th>Khoảng cách tác động tối đa (m)</th>
                            <th>Khoảng cách tác động tối đa (km)</th>
                            <th>Ảnh bản đồ, ghi chú</th>
                        </tr>
                        <tr>
                            <td>F1</td>
                            <td>Khai thác RNM</td>
                            <td>-</td>
                            <td>-</td>
                            <td><a href="https://drive.google.com/file/d/1zOEtTgL3kM4E2_xOerrCIA4oV2SLt5OJ/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F2</td>
                            <td>Đánh bắt thủy hải sản</td>
                            <td>500</td>
                            <td>0.5</td>
                            <td><a href="https://drive.google.com/file/d/1ApdDVaNqDnmp_918MaYMJCG717Qq-Qmc/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F3</td>
                            <td>Chuyển đất sang ao nuôi tôm</td>
                            <td>-</td>
                            <td>-</td>
                            <td><a href="https://drive.google.com/file/d/1Cdoa7Ewptu8ufynA-teAh8bIunG2GNcr/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F4</td>
                            <td>Phát triển cơ sở hạ tầng (giao thông, đô thị)</td>
                            <td>-</td>
                            <td>-</td>
                            <td><a href="https://drive.google.com/file/d/1oIzvbm_rEIQ7_mt_9eHjfXMq7Zugc6LH/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F5</td>
                            <td>Ô nhiễm môi trường (túi nilong, chất độc hại)</td>
                            <td>2000</td>
                            <td>0.2</td>
                            <td><a href="https://drive.google.com/file/d/1UfUQYormc99gDFfZsn7RsXYiOAFOrUmT/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F6</td>
                            <td>Xói lở đất</td>
                            <td>300</td>
                            <td>0.3</td>
                            <td><a href="https://drive.google.com/file/d/1Nsp5rEq89chp3zfKPhyH20YkiLDvjPT_/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F7</td>
                            <td>Biến đổi khí hậu (Nước biển dâng, xâm nhập mặn)</td>
                            <td>90000</td>
                            <td>90</td>
                            <td><a href="https://drive.google.com/file/d/1mCkyMjJmNzxbyQGUdDr2rIjcmP1Zt7XG/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F8</td>
                            <td>Các dịch vụ du lịch</td>
                            <td>-</td>
                            <td>-</td>
                            <td><a href="https://drive.google.com/file/d/1UO6CQlCwf7vfYf5uJuJRnk0XV7ynRGud/preview">Link</a></td>
                        </tr>
                        <tr>
                            <td>F9</td>
                            <td>Loài xâm lấn</td>
                            <td>-</td>
                            <td>-</td>
                            <td><a href="https://drive.google.com/file/d/1DnYHrrlP3mVZ_Lb6xY1uBWXJ1AZrlRJ6/preview">Link</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
`; 