const data = `
    <div id="HQ" style="min-height: 300px;">
        <h2>Đánh giá chất lượng sinh cảnh bằng mô hình Habitat Quality - tóm tắt kết quả: <a href="https://docs.google.com/forms/d/1GA-fs4wv9yP0p14KHl0WzkyEN2wRSSS53XJMa4LnPmA/viewanalytics" target="_blank">Link</a></h2>
        <ol>
            <li id="HQ1">
                <button type="button" id="collapsible" class="collapsible">Mô tả diễn biến lớp phủ quá khứ đến nay</button>
                <div id="content" class="content" style="width: 98.5%">
                    <ul>
                        <li>
                            <h5>Sóc Trăng</h5>
                            <iframe style="width: 80%; height: 340px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVIrpQmW0JWTuRDy3CQ6S8T38-reoZRLy6SNm0Gz_Pn8eAGDE-G97rl6jGUnUoXdlcymqUGPxmz6Wp/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Cà Mau</h5>
                            <iframe style="width: 80%; height: 700px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTWgrGXor2Kkpl9b9BbOS7LJS-pVxv3XvdQk7GAWHYvw3FCz8CkD-KIkot0dfl2unbMOTvbJQGI43iw/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Kiên Giang</h5>
                            <iframe style="width: 80%; height: 350px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRfRWl5FLqagothETucUplXafsKacrYYtJVarJ0gffl1MvFXlkA2m7ZtkR58-pbDAl7WvM4byP2_qsy/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
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
                            <iframe style="width: 80%; height: 400px" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVIrpQmW0JWTuRDy3CQ6S8T38-reoZRLy6SNm0Gz_Pn8eAGDE-G97rl6jGUnUoXdlcymqUGPxmz6Wp/pubhtml?gid=1850366704&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Cà Mau</h5>
                            <iframe style="width: 80%; height: 800px" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTWgrGXor2Kkpl9b9BbOS7LJS-pVxv3XvdQk7GAWHYvw3FCz8CkD-KIkot0dfl2unbMOTvbJQGI43iw/pubhtml?gid=1577499812&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Kiên Giang</h5>
                            <iframe style="width: 80%; height: 400px" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRfRWl5FLqagothETucUplXafsKacrYYtJVarJ0gffl1MvFXlkA2m7ZtkR58-pbDAl7WvM4byP2_qsy/pubhtml?gid=1948066444&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
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
                            <iframe style="width: 100%; height: 300px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVIrpQmW0JWTuRDy3CQ6S8T38-reoZRLy6SNm0Gz_Pn8eAGDE-G97rl6jGUnUoXdlcymqUGPxmz6Wp/pubhtml?gid=1724835467&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Cà Mau</h5>
                            <iframe style="width: 100%; height: 300px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTWgrGXor2Kkpl9b9BbOS7LJS-pVxv3XvdQk7GAWHYvw3FCz8CkD-KIkot0dfl2unbMOTvbJQGI43iw/pubhtml?gid=935061631&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Kiên Giang</h5>
                            <iframe style="width: 100%; height: 320px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRfRWl5FLqagothETucUplXafsKacrYYtJVarJ0gffl1MvFXlkA2m7ZtkR58-pbDAl7WvM4byP2_qsy/pubhtml?gid=74912219&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
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
                            <iframe style="width: 100%; height: 300px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVIrpQmW0JWTuRDy3CQ6S8T38-reoZRLy6SNm0Gz_Pn8eAGDE-G97rl6jGUnUoXdlcymqUGPxmz6Wp/pubhtml?gid=467494413&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Cà Mau</h5>
                            <iframe style="width: 100%; height: 400px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTWgrGXor2Kkpl9b9BbOS7LJS-pVxv3XvdQk7GAWHYvw3FCz8CkD-KIkot0dfl2unbMOTvbJQGI43iw/pubhtml?gid=533168969&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                        </li>
                        <li>
                            <h5>Kiên Giang</h5>
                            <iframe style="width: 100%; height: 400px;" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRfRWl5FLqagothETucUplXafsKacrYYtJVarJ0gffl1MvFXlkA2m7ZtkR58-pbDAl7WvM4byP2_qsy/pubhtml?gid=883391421&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
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
                    <p>Trong đợt phỏng vấn vừa rồi hầu như <span style="color:red;">không đạt được</span> dữ liệu liên quan tới mô tả <span style="color:red;">sự biến đổi mức độ tác động của nhân tố</span> qua không gian theo các kiểu "exponential" hay "linear" ở cả 3 tỉnh.</p>
                    <ul>
                        <li><h5>Sóc Trăng</h5></li>
                        <li><h5>Cà Mau</h5></li>
                        <li><h5>Kiên Giang</h5></li>
                    </ul>
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
                    <p><span style="color:red; font-weight:600;">Đã làm được</span>: Đối với khu vực <span style="color:red">Sóc Trăng và Cà Mau</span>, dữ liệu đã đáp ứng được</p>
                    <p><span style="color:red; font-weight:600;">Chưa làm được</span>: Đối với khu vực Kiên Giang, hiện tại chưa đủ dữ liệu</p>
                    <ul>
                        <li>
                            <h5>Sóc Trăng</h5>
                            <iframe style="width: 100%; height: 300px;" scrolling="no" src="https://drive.google.com/file/d/1av9ANqiz6Z_kNx2Uuylm047FuzRe5N7j/preview" allow="autoplay"></iframe>
                        </li>
                        <li>
                            <h5>Cà Mau</h5>
                            <iframe style="width: 100%; height: 300px;" scrolling="no" src="https://drive.google.com/file/d/1vrYqyfaqn4-wF1TM66BNJiBhfOSq8cVm/preview" allow="autoplay"></iframe>
                        </li>
                        <li><h5>Kiên Giang</h5></li>
                    </ul>
                </div>
            </li>
            <li id="HQ9">
                <button type="button" id="collapsible" class="collapsible">Mức độ tác động tiêu cực lên sinh cảnh của các nhân tố tác động - <span style="color:red;">dữ liệu phải có cho mô hình Habitat quality (INVEST)</span></button>
                <div id="content" class="content" style="width: 98.5%">
                    <p><span style="color:red; font-weight:600;">Đã làm được</span>: Đối với khu vực <span style="color:red">Sóc Trăng và Cà Mau</span>, dữ liệu đã đáp ứng được</p>
                    <p><span style="color:red; font-weight:600;">Chưa làm được</span>: Đối với khu vực Kiên Giang, hiện tại chưa đủ dữ liệu</p>
                    <ul>
                        <li>
                            <h5>Sóc Trăng</h5>
                            <p>Bác Nguyễn Đức Hoàng</p>
                            <iframe style="width: 100%; height: 500px;" src="https://drive.google.com/file/d/1Xnc9KyqLtoIAvVDcBc0TRQjGDTP3xcSc/preview" scrolling="no" allow="autoplay"></iframe>
                            <p>Bác Nguyễn Trung Quốc</p>
                            <iframe style="width: 100%; height: 500px;" src="https://drive.google.com/file/d/12Nfbycc9fmUiD6Vsvuj1ZA9e5_YFdb5s/preview"allow="autoplay"></iframe>
                        </li>
                        <li>
                            <h5>Cà Mau</h5>
                            <p>Nguyễn Văn Sự</p>
                            <iframe style="width: 100%; height: 500px;" src="https://drive.google.com/file/d/1OqTPj8sHeyBqjg4dTAn4y55Fj3Jt7ALt/preview" allow="autoplay"></iframe>
                            <p>Lê Tỏa Rạng</p>
                            <iframe style="width: 100%; height: 500px;" src="https://drive.google.com/file/d/1b3V7CutLLzhj34K5dkl0OgWtn3_Hx5m2/preview" allow="autoplay"></iframe>
                        </li>
                        <li><h5>Kiên Giang</h5></li>
                    </ul>
                </div>
            </li>
            <li id="HQ10">
                <button type="button" id="collapsible" class="collapsible">Mức độ tác động tích cực lên sinh cảnh</button>
                <div id="content" class="content" style="width: 98.5%">
                    <ul>
                        <li>
                            <h5>Sóc Trăng</h5>
                            <iframe style="width:100%;height: 500px;" src="https://drive.google.com/file/d/1KrMojDTyds46167Mho4VYeQDYkDOAe22/preview" allow="autoplay"></iframe>
                        </li>
                        <li>
                            <h5>Cà Mau</h5>
                            <p>Lệ Tỏa Rạng</p>
                            <iframe style="width:100%;height: 500px;" src="https://drive.google.com/file/d/1QvlfYSxARLAlYyEbetpU90Q9UMvG-7JR/preview" allow="autoplay"></iframe>
                            <p>Nguyễn Văn Sự</p>
                            <iframe style="width:100%;height: 500px;" src="https://drive.google.com/file/d/1pvJ7VortV93el3QNAvCc9f-TV3tcKt_k/preview" allow="autoplay"></iframe>
                        </li>
                        <li><h5>Kiên Giang</h5></li>
                    </ul>
                </div>
            </li>
        </ol>
    </div>
    <div id="HRA" style="min-height: 300px;">
        <h2>Đánh giá rủi ro sinh cảnh - </h2>
    </div>
`

