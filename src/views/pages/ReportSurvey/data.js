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
        
        <ol>
            <li id="HQ1">
                <button type="button" id="collapsible" class="collapsible">Mô tả diễn biến lớp phủ quá khứ đến nay</button>
                <div id="content" class="content" style="width: 98.5%">
                    <ul>
                        <li>
                            <h5>Sóc Trăng</h5>
                            <iframe loading=lazy style="width: 80%; height: 340px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVIrpQmW0JWTuRDy3CQ6S8T38-reoZRLy6SNm0Gz_Pn8eAGDE-G97rl6jGUnUoXdlcymqUGPxmz6Wp/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Cà Mau</h5>
                            <iframe loading=lazy style="width: 80%; height: 700px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTWgrGXor2Kkpl9b9BbOS7LJS-pVxv3XvdQk7GAWHYvw3FCz8CkD-KIkot0dfl2unbMOTvbJQGI43iw/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Kiên Giang</h5>
                            <iframe loading=lazy style="width: 80%; height: 350px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRfRWl5FLqagothETucUplXafsKacrYYtJVarJ0gffl1MvFXlkA2m7ZtkR58-pbDAl7WvM4byP2_qsy/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                    </ul>
                </div>
            </li>
            <li id="HQ2">
                <button type="button" id="collapsible" class="collapsible">Mô tả mức độ suy thoái sinh cảnh hiện nay</button>
                <div id="content" class="content" class="content" style="width: 98.5%">
                    <ul>
                        <li>
                            <h5>Sóc Trăng</h5>
                            <iframe loading=lazy style="width: 80%; height: 400px" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVIrpQmW0JWTuRDy3CQ6S8T38-reoZRLy6SNm0Gz_Pn8eAGDE-G97rl6jGUnUoXdlcymqUGPxmz6Wp/pubhtml?gid=1850366704&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Cà Mau</h5>
                            <iframe loading=lazy style="width: 80%; height: 800px" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTWgrGXor2Kkpl9b9BbOS7LJS-pVxv3XvdQk7GAWHYvw3FCz8CkD-KIkot0dfl2unbMOTvbJQGI43iw/pubhtml?gid=1577499812&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Kiên Giang</h5>
                            <iframe loading=lazy style="width: 80%; height: 400px" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRfRWl5FLqagothETucUplXafsKacrYYtJVarJ0gffl1MvFXlkA2m7ZtkR58-pbDAl7WvM4byP2_qsy/pubhtml?gid=1948066444&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                    <ul>
                </div>
            </li>
            <li id="HQ3">
            <button type="button" id="collapsible" class="collapsible">Mô tả khả năng phục hồi sinh cảnh trong tương lai</button>
                <div id="content" class="content" class="content" style="width: 98.5%">
                    <ul>
                        <li>
                            <h5>Sóc Trăng</h5>
                            <iframe loading=lazy style="width: 100%; height: 300px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVIrpQmW0JWTuRDy3CQ6S8T38-reoZRLy6SNm0Gz_Pn8eAGDE-G97rl6jGUnUoXdlcymqUGPxmz6Wp/pubhtml?gid=1724835467&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Cà Mau</h5>
                            <iframe loading=lazy style="width: 100%; height: 300px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTWgrGXor2Kkpl9b9BbOS7LJS-pVxv3XvdQk7GAWHYvw3FCz8CkD-KIkot0dfl2unbMOTvbJQGI43iw/pubhtml?gid=935061631&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Kiên Giang</h5>
                            <iframe loading=lazy style="width: 100%; height: 320px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRfRWl5FLqagothETucUplXafsKacrYYtJVarJ0gffl1MvFXlkA2m7ZtkR58-pbDAl7WvM4byP2_qsy/pubhtml?gid=74912219&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                    </ul>
                </div>
            </li>
            <li id="HQ4">
                <button type="button" id="collapsible" class="collapsible">Mô tả những thay đổi của sinh cảnh trong tương lai</button>
                <div id="content" class="content" style="width: 98.5%">
                    <ul>
                        <li>
                            <h5>Sóc Trăng</h5>
                            <iframe loading=lazy style="width: 100%; height: 300px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVIrpQmW0JWTuRDy3CQ6S8T38-reoZRLy6SNm0Gz_Pn8eAGDE-G97rl6jGUnUoXdlcymqUGPxmz6Wp/pubhtml?gid=467494413&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Cà Mau</h5>
                            <iframe loading=lazy style="width: 100%; height: 400px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTWgrGXor2Kkpl9b9BbOS7LJS-pVxv3XvdQk7GAWHYvw3FCz8CkD-KIkot0dfl2unbMOTvbJQGI43iw/pubhtml?gid=533168969&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Kiên Giang</h5>
                            <iframe loading=lazy style="width: 100%; height: 400px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRfRWl5FLqagothETucUplXafsKacrYYtJVarJ0gffl1MvFXlkA2m7ZtkR58-pbDAl7WvM4byP2_qsy/pubhtml?gid=883391421&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                    </ul>
                </div>
            </li>
            <li id="HQ5">
                <button type="button" id="collapsible" class="collapsible">Biểu diễn khu vực phân bố của các nhân tố ước lượng khoảng cách tác động tối đa của nhân tố - <span style="color:red;">dữ liệu phải có cho mô hình Habitat quality (INVEST)</span></button>
                <div id="content" class="content" style="width: 98.5%">
                    <p><span style="color:red; font-weight: 600;">Đã đạt được</span>: Qua phỏng vấn, nhóm đã đạt được bản đồ tương đối về vị trí phân bố của các nhân tố gây suy thoái chất lượng sinh cảnh tại khu vực nghiên cứu.</p>
                    <p><span style="color:red; font-weight: 600;">Chưa đạt được</span>: <span style="text-decoration: underline;">Khoảng cách tác động tối đa (MAX DISTANCE)</span> của nhân tố các nhân tố gây suy thoái chất lượng sinh cảnh được xác định.</p>
                    <ul>
                        <li>
                            <h5>Sóc Trăng</h5>
                            Bản đồ: <a href="https://drive.google.com/file/d/15IzSiz0LdKUtYkTxJvRv0isOtIBCOFkc/view?usp=sharing" target="_blank">Link</a>
                        </li>
                        <li>
                            <h5>Cà Mau</h5>
                            Bản đồ: <a href="https://drive.google.com/file/d/1OUcRvxMHZtrSBonJ001NfnjeUDU1wEaa/view?usp=sharing" target="_blank">Link 1</a>
                            <br>
                            Bản đồ: <a href="https://drive.google.com/file/d/1iHUGTpLXqAco3TTGHQvwTZ5DAR82P4TZ/view?usp=sharing" target="_blank">Link 2</a>
                        </li>
                        <li>
                            <h5>Kiên Giang</h5>
                            Bản đồ: <a href="https://drive.google.com/file/d/1s4u2Gzsq1FX4WTHtEolr6K8I4ZuHxkkF/view?usp=sharing" target="_blank">Link</a>
                        </li>
                    </ul>
                    
                </div>
            </li>
       
            <li id="HQ6">
                <button type="button" id="collapsible" class="collapsible">Mô tả thay đổi về mức độ tác động của nhân tố qua không gian - <span style="color:red;">dữ liệu phải có cho mô hình Habitat quality (INVEST)</span></button>
                <div id="content" class="content" style="width: 98.5%">
                    <p>Trong đợt phỏng vấn tại chuyến đi xuống địa phương vừa rồi hầu như <span style="color:red;">không đạt được</span> dữ liệu liên quan tới mô tả <span style="color:red;">sự biến đổi mức độ tác động của nhân tố</span> qua không gian theo các kiểu "exponential" hay "linear" ở cả 3 tỉnh.</p>
                    <p>Tuy nhiên, dữ liệu có liên quan đã được thu sơ lược qua trong hội thảo.</p>
                    <ul>
                        <li><h5>Sóc Trăng</h5></li>
                        <li><h5>Cà Mau</h5></li>
                        <li><h5>Kiên Giang</h5></li>
                    </ul>
                    <p>Dữ liệu phỏng vấn tại Hội thảo</p>
                    <iframe loading=lazy style="width:100%; height: 300px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS5RaJXDL7WXMjAYudh72yo95c0MgXPx5Y9rnK_upZJMNhj1hA6MTrLj9lNu9yh5u2XOOxMKosD3X2m/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                </div>
            </li>
            <li id="HQ7">
                <button type="button" id="collapsible" class="collapsible">Biểu diễn sự chuyển dịch trong tương lai khu vực phân bố tác nhân gây suy thoái chất lượng sinh cảnh</button>
                <div id="content" class="content" style="width: 98.5%">
                    <ul>
                        <li><h5>Sóc Trăng</h5></li>
                        <li><h5>Cà Mau</h5></li>
                        <li><h5>Kiên Giang</h5></li>
                    </ul>
                </div>
            </li>
            <li id="HQ8">
                <button type="button" id="collapsible" class="collapsible">Trọng số giữa các cặp tác động - <span style="color:red;">dữ liệu phải có cho mô hình Habitat quality (INVEST)</span></button>
                <div id="content" class="content" style="width: 98.5%">
                    <p><span style="color:red; font-weight:600;">Đã làm được</span>: Đối với khu vực <span style="color:red">Sóc Trăng, Cà Mau và Kiên Giang</span>, dữ liệu đã đáp ứng ở mức tương đối</p>
                    <ul>
                        <li>
                            <h5>Sóc Trăng</h5>
                            <iframe loading=lazy style="width: 100%; height: 300px;" scrolling="no" src="https://drive.google.com/file/d/1av9ANqiz6Z_kNx2Uuylm047FuzRe5N7j/preview" allow="autoplay"></iframe>
                        </li>
                        <li>
                            <h5>Cà Mau</h5>
                            <iframe loading=lazy style="width: 100%; height: 300px;" scrolling="no" src="https://drive.google.com/file/d/1vrYqyfaqn4-wF1TM66BNJiBhfOSq8cVm/preview" allow="autoplay"></iframe>
                        </li>
                        <li>
                            <h5>Kiên Giang</h5>
                            <iframe loading=lazy style="width: 100%; height: 300px;" src="https://drive.google.com/file/d/1H1iZDlLmLZPgAm9WW61cYNIgj3jwR6Nj/preview" allow="autoplay"></iframe>
                        </li>
                    </ul>
                </div>
            </li>
            <li id="HQ9">
                <button type="button" id="collapsible" class="collapsible">Mức độ tác động tiêu cực lên sinh cảnh của các nhân tố tác động - <span style="color:red;">dữ liệu phải có cho mô hình Habitat quality (INVEST)</span></button>
                <div id="content" class="content" style="width: 98.5%">
                    <p><span style="color:red; font-weight:600;">Đã làm được</span>: Đối với khu vực <span style="color:red">Sóc Trăng, Kiên Giang và Cà Mau</span>, dữ liệu đã đáp ứng được</p>
                    <ul>
                        <li>
                            <h5>Sóc Trăng</h5>
                            <p>Bác Nguyễn Đức Hoàng</p>
                            <iframe loading=lazy style="width: 100%; height: 500px;" src="https://drive.google.com/file/d/1Xnc9KyqLtoIAvVDcBc0TRQjGDTP3xcSc/preview" scrolling="no" allow="autoplay"></iframe>
                            <p>Bác Nguyễn Trung Quốc</p>
                            <iframe loading=lazy style="width: 100%; height: 500px;" src="https://drive.google.com/file/d/12Nfbycc9fmUiD6Vsvuj1ZA9e5_YFdb5s/preview"allow="autoplay"></iframe>
                        </li>
                        <li>
                            <h5>Cà Mau</h5>
                            <p>Nguyễn Văn Sự</p>
                            <iframe loading=lazy style="width: 100%; height: 500px;" src="https://drive.google.com/file/d/1OqTPj8sHeyBqjg4dTAn4y55Fj3Jt7ALt/preview" allow="autoplay"></iframe>
                            <p>Lê Tỏa Rạng</p>
                            <iframe loading=lazy style="width: 100%; height: 500px;" src="https://drive.google.com/file/d/1b3V7CutLLzhj34K5dkl0OgWtn3_Hx5m2/preview" allow="autoplay"></iframe>
                        </li>
                        <li>
                            <h5>Kiên Giang</h5>
                            <iframe loading=lazy style="width: 100%; height: 500px;" src="https://drive.google.com/file/d/1H1Q-3lg1YudKAi6aTUR4bDRuY8Vio-2v/preview" allow="autoplay"></iframe>
                        </li>
                    </ul>
                </div>
            </li>
            <li id="HQ10">
                <button type="button" id="collapsible" class="collapsible">Mức độ tác động tích cực lên sinh cảnh</button>
                <div id="content" class="content" style="width: 98.5%">
                    <ul>
                        <li>
                            <h5>Sóc Trăng</h5>
                            <iframe loading=lazy style="width:100%;height: 500px;" src="https://drive.google.com/file/d/1KrMojDTyds46167Mho4VYeQDYkDOAe22/preview" allow="autoplay"></iframe>
                        </li>
                        <li>
                            <h5>Cà Mau</h5>
                            <p>Lệ Tỏa Rạng</p>
                            <iframe loading=lazy style="width:100%;height: 500px;" src="https://drive.google.com/file/d/1QvlfYSxARLAlYyEbetpU90Q9UMvG-7JR/preview" allow="autoplay"></iframe>
                            <p>Nguyễn Văn Sự</p>
                            <iframe loading=lazy style="width:100%;height: 500px;" src="https://drive.google.com/file/d/1pvJ7VortV93el3QNAvCc9f-TV3tcKt_k/preview" allow="autoplay"></iframe>
                        </li>
                        <li>
                            <h5>Kiên Giang</h5>
                        </li>
                    </ul>
                </div>
            </li>
        </ol>
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
        
        <ol>
            <li id="HRA1">
                <button type="button" id="collapsible" class="collapsible">Mô tả khả năng phục hồi sinh cảnh RNM - <span style="color:red;">dữ liệu phải có cho mô hình Habitat risk assessment (INVEST)</span></button>
                <div id="content" class="content" style="width:98.5%">
                    <ul>
                        <li>
                            <h5>Sóc Trăng</h5>
                            <iframe loading=lazy style="width: 100%; height: 200px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT1L1UeyGGVy095Cx4ygOyJotMiAUF36UQfhJir8kFbWC3uNV3rDgA0F30KDH9Fy6ETu5VuZA68DHzS/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Cà Mau</h5>
                            <iframe loading=lazy style="width: 100%; height: 200px" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS6nRYBNZNm513qNHtRKVOBdes0qFI2PLj_bGmEpvdjWJmjAIQQeXfkzlWDoR7s15wJtywgOKxOUN1s/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Kiên Giang</h5>
                            <iframe loading=lazy style="width: 100%; height: 200px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSUXqWtT8Ii8K0l3I5Itftc3iFHOX6dt68oUbYdQpu87vHO5G6HhVIyCkI2AS5WrqlOUzhHHL2fHg9B/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                    </ul>
                </div>
            </li>
            <li id="HRA2">
                <button type="button" id="collapsible" class="collapsible">Mô tả hiện tượng xói lở bờ biển tác động tiêu cực đến RNM</button>
                <div id="content" class="content" style="width:98.5%">
                    <ul>
                        <li>
                            <h5>Sóc Trăng</h5>
                            <iframe loading=lazy style="width: 100%; height: 300px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQI78hpkuhxMM105xTGq0WkJycH5Lk4DE7ERClcfBTsbBvi6E6MozLY9vbQAqX56xMfSbUx6jzHunqR/pubhtml?gid=1187919709&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Cà Mau</h5>
                            <iframe loading=lazy style="width: 100%; height: 300px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS6nRYBNZNm513qNHtRKVOBdes0qFI2PLj_bGmEpvdjWJmjAIQQeXfkzlWDoR7s15wJtywgOKxOUN1s/pubhtml?gid=1187919709&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Kiên Giang</h5>
                            <iframe loading=lazy style="width: 100%; height: 300px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSUXqWtT8Ii8K0l3I5Itftc3iFHOX6dt68oUbYdQpu87vHO5G6HhVIyCkI2AS5WrqlOUzhHHL2fHg9B/pubhtml?gid=1187919709&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                    </ul>
                </div>
            </li>
            <li id="HRA3">
                <button type="button" id="collapsible" class="collapsible">Mô tả hiện tượng ghe cào đánh bắt thủy hải sản</button>
                <div id="content" class="content" style="width:98.5%">
                    <ul>
                        <li>
                            <h5>Sóc Trăng</h5>
                            <iframe loading=lazy style="width: 100%; height: 320px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQI78hpkuhxMM105xTGq0WkJycH5Lk4DE7ERClcfBTsbBvi6E6MozLY9vbQAqX56xMfSbUx6jzHunqR/pubhtml?gid=1419884724&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Cà Mau</h5>
                            <iframe loading=lazy style="width: 100%; height: 340px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS6nRYBNZNm513qNHtRKVOBdes0qFI2PLj_bGmEpvdjWJmjAIQQeXfkzlWDoR7s15wJtywgOKxOUN1s/pubhtml?gid=1419884724&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Kiên Giang</h5>
                        </li>
                    </ul>
                </div>
            </li>
            <li id="HRA4">
                <button type="button" id="collapsible" class="collapsible">Mô tả hiện tượng khai thác đánh bắt cây rừng bất hợp pháp</button>
                <div id="content" class="content" style="width:98.5%">
                    <ul>
                        <li>
                            <h5>Sóc Trăng</h5>
                            <iframe loading=lazy style="width: 100%; height: 320px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQI78hpkuhxMM105xTGq0WkJycH5Lk4DE7ERClcfBTsbBvi6E6MozLY9vbQAqX56xMfSbUx6jzHunqR/pubhtml?gid=1741263756&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Cà Mau</h5>
                            <iframe loading=lazy style="width: 100%; height: 320px" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS6nRYBNZNm513qNHtRKVOBdes0qFI2PLj_bGmEpvdjWJmjAIQQeXfkzlWDoR7s15wJtywgOKxOUN1s/pubhtml?gid=1741263756&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Kiên Giang</h5>
                        </li>
                    </ul>
                </div>
            </li>
            <li id="HRA5">
                <button type="button" id="collapsible" class="collapsible">Mô tả hiện tượng ô nhiễm môi trường</button>
                <div id="content" class="content" style="width:98.5%">
                    <ul>
                        <li>
                            <h5>Sóc Trăng</h5>
                            <iframe loading=lazy style="width: 100%; height: 320px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQI78hpkuhxMM105xTGq0WkJycH5Lk4DE7ERClcfBTsbBvi6E6MozLY9vbQAqX56xMfSbUx6jzHunqR/pubhtml?gid=1563434722&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Cà Mau</h5>
                            <iframe loading=lazy style="width: 100%; height: 320px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS6nRYBNZNm513qNHtRKVOBdes0qFI2PLj_bGmEpvdjWJmjAIQQeXfkzlWDoR7s15wJtywgOKxOUN1s/pubhtml?gid=1563434722&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Kiên Giang</h5>
                        </li>
                    </ul>
                </div>
            </li>
            <li id="HRA6">
                <button type="button" id="collapsible" class="collapsible">Mô tả hiện tượng khô hạn thiếu nước</button>
                <div id="content" class="content" style="width:98.5%">
                    <ul>
                        <li>
                            <h5>Sóc Trăng</h5>
                            <iframe loading=lazy style="width: 100%; height: 320px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQI78hpkuhxMM105xTGq0WkJycH5Lk4DE7ERClcfBTsbBvi6E6MozLY9vbQAqX56xMfSbUx6jzHunqR/pubhtml?gid=850451087&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Cà Mau</h5>
                            <iframe loading=lazy style="width: 100%; height: 320px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS6nRYBNZNm513qNHtRKVOBdes0qFI2PLj_bGmEpvdjWJmjAIQQeXfkzlWDoR7s15wJtywgOKxOUN1s/pubhtml?gid=850451087&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Kiên Giang</h5>
                        </li>
                    </ul>
                </div>
            </li>
            <li id="HRA7">
                <button type="button" id="collapsible" class="collapsible">Mô tả hiện tượng thay đổi sử dụng đất</button>
                <div id="content" class="content" style="width:98.5%">
                    <ul>
                        <li>
                            <h5>Sóc Trăng</h5>
                            <iframe loading=lazy style="width: 100%; height: 320px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQI78hpkuhxMM105xTGq0WkJycH5Lk4DE7ERClcfBTsbBvi6E6MozLY9vbQAqX56xMfSbUx6jzHunqR/pubhtml?gid=1493008024&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Cà Mau</h5>
                            <iframe loading=lazy style="width: 100%; height: 320px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS6nRYBNZNm513qNHtRKVOBdes0qFI2PLj_bGmEpvdjWJmjAIQQeXfkzlWDoR7s15wJtywgOKxOUN1s/pubhtml?gid=1493008024&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Kiên Giang</h5>
                        </li>
                    </ul>
                </div>
            </li>
            <li id="HRA8">
                <button type="button" id="collapsible" class="collapsible">Bản đồ mô tả sự phân bố của các nhân tố gây rủi ro sinh cảnh</button>
                <div id="content" class="content" style="width: 98.5%;">
                    <ul>
                        <li>
                            <h5>Sóc Trăng</h5>
                            <iframe loading=lazy style="width: 100%; height: 600px;" src="https://drive.google.com/file/d/1nigNX5_Y-Ck7XRwAwgmnhALlw71qkLF8/preview" allow="autoplay"></iframe>
                        </li>
                        <li>
                            <h5>Cà Mau</h5>
                            <iframe loading=lazy style="width: 100%; height: 600px;" src="https://drive.google.com/file/d/1PTvQ1nkpF0DTKntbIIF73hBDVXdIwUpr/preview" allow="autoplay"></iframe>
                        </li>
                        <li>
                            <h5>Kiên Giang</h5>
                            <iframe loading=lazy style="width: 100%; height: 600px;" src="https://drive.google.com/file/d/181d4iu0qfxIz97Z51U2jpxs6jgoUJBXW/preview" allow="autoplay"></iframe>
                        </li>
                    </ul>
                </div>
            </li>
        </ol>
    </div>
`

