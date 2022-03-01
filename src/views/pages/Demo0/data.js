const data = `
    <h3><a href="https://drive.google.com/drive/folders/1yP97XL9kTRBq7P8jkHZxDz5vF4pK2E0W?usp=sharing" target="_blank">Link thư mục chứa file xử lý số liệu</a></h3>
    <p>Note: Kết quả được demo dưới đây được chạy dựa trên dữ liệu phỏng vấn và ảnh vệ tinh có độ phân giải 10m năm 2017</p>
    <div id="ResultHQ">
        <button id="collapsible" class="collapsible" type="button" style="text-align: left; text-decoration: underline;">1. Kết quả demo mô hình đánh giá chất lượng sinh cảnh - HQ</button>
        <div id="content" class="content" style="width: 100vw; max-width: 100%">
            <div id="HQST" class="DemoHQ">
                <h4>Chất lượng sinh cảnh tại khu vực Sóc Trăng</h4>
                <div>
                    <img src="https://drive.google.com/uc?export=view&id=17X4WEeteQv3MiSX2OGFY2rkpYSyzF7xs">
                    <img src="https://drive.google.com/uc?export=view&id=1U0mn1rjJqk5OQmWTHZvVTT0LbxfIFCqT">
                </div>
                <ul>
                    <li>Bảng thông tin các tác nhân đe dọa chất lượng sinh cảnh<br>
                    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9Z568zV1aNgnVQKzHP8-4gD-ZCe2-Af9tAj52KioBa9hw0vIg3_RreDM0yj37FxIjj3hkH_mdTyWJ/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" style="width: 90vw; height: 18rem;" scrolling="no"></iframe>
                    
                    </li>
                    <li>Bảng thông tin các mức độ nhạy của sinh cảnh
                    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6OF1Z9SIj3wF1rKgB38W7a8gp6afPW1GvrFYX9CAWHlhxGJ41fKsrky3kfQY15Z3x7juOM2ow3mkb/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" style="width: 90vw; height: 22rem;" scrolling="no"></iframe>
                    </li>
                </ul>
                
            </div>
            <hr>
            <div id="HQCM" class="DemoHQ">
                <h4>Chất lượng sinh cảnh tại khu vực Cà Mau</h4>
                <div>
                    <img src="https://drive.google.com/uc?export=view&id=18gi9PceJFiPLIaX126DNI2pXvhclaCEM">
                    <img src="https://drive.google.com/uc?export=view&id=12W3jIB2nM20-SJXDFZUvKH64f4ppvZLb">
                </div>
                <ul>
                    <li>Bảng thông tin các nhân tố đe dọa
                    <br>
                    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS__pfhZtlFo5a7Spp-CcvjUptzuJ47T_SH8kWbMEdU94vInXiCUzSyTTta3soh5FdofEbfTYpVLrHL/pubhtml?widget=true&amp;headers=false" scrolling="no" style="width: 90%; height: 18rem;"></iframe>
                    </li>
                    <li>Bảng thông tin mức độ nhạy của sinh cảnh <br>
                    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR-CsF0-Zb9LnaZzZ-VPWaT6zEnbNZrWZ2cIplOhrgzRKiOP7EKPD-NaqzAVLIlKAML-SodEFTSATJd/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" scrolling="no" style="width: 90%; height: 22rem;"></iframe>
                    </li>
                </ul>
            </div>
            <hr>
            <div id="HQKG" class="DemoHQ">
                <h4>Chất lượng sinh cảnh tại khu vực Kiên Giang</h4>
                <div>
                    <img src="https://drive.google.com/uc?export=view&id=17a6XxBb65J0Cp71vRv55Vr_wL_mA3wuz">
                    <img src="https://drive.google.com/uc?export=view&id=1NGIe5IupMXiXiwIOMjgcTH8WcmVUl2Ho">
                </div>
                <ul>
                    <li>Bảng thông tin các nhân tố đe dọa chất lượng sinh cảnh <br>
                    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSErFhamAZYMBGs-8-7Zi1VNOSB52HvMxC2jW_igUu4N72VdeIK5LcQDCcx-gR8V21dz_h35Ovg2qKh/pubhtml?widget=true&amp;headers=false" style="width: 90vw; height: 18rem;" scrolling="no"></iframe>
                    </li>
                    <li>Bảng thông tin các mức độ nhạy của sinh cảnh <br>       
                    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR7FlPTi2LXCgAb-ylj3AUhZYNJ0QncToX6ZqpRcH4FPIjIcUwrqGgYO_x0yiIkdq-8EBigyxPJBqVB/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" style="width: 90vw; height: 22rem;" scrolling="no"></iframe>            
                    </li>
                </ul>

            </div>
        </div>
    </div>


    <div id="ResultHRA">
        <button id="collapsible" class="collapsible" type="button" style="text-align: left; text-decoration: underline;">2. Kết quả demo mô hình đánh giá rủi ro sinh cảnh - HRA</button>
        <div id="content" class="content" style="width: 100vw; max-width: 100%">
            <div id="HRAST" class="DemoHRA">
                <h4>Rủi ro sinh cảnh tại khu vực Sóc Trăng</h4>
                <p style="text-align: center;">
                    <img src="https://drive.google.com/uc?export=view&id=1IN9dizg8v_dwhKfvcXC5HtpdSuzdMLIn">
                </p>
                <ul>
                    <li>
                        Bảng thông tin nhân tố sinh cảnh <br>
                        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-VU76Yk58rM3sA_kj1TpAlf0OA0COSfUAYTb2EIAlDJb9FjhMS7Myo_mhbj6gWL6dl2xS5vl1oC23/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" style="width: 90%; height: 16rem;" scrolling="no"></iframe>
                    </li>
                    <li>
                        Bảng tiêu chí đánh giá <br>
                        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS5H1tz7pRskU0XAIRBL_s9reSG8M240GxabVHAmvykiit4ug-neD_EyLV5n07H3uAR4yxrSSfwd36q/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" style="width: 90%; height: 20rem;" scrolling="no"></iframe>
                    </li>
                </ul>
            </div>
            <hr>
            <div id="HRACM" class="DemoHRA">
                <h4>Rủi ro sinh cảnh tại khu vực Cà Mau</h4>
                
                <p style="text-align: center;">
                    <img src="https://drive.google.com/uc?export=view&id=1o6i_aHUd_MHTSCOXGx5VZ6uNj1hIORGm">
                </p>
                <ul>
                    <li>Bảng thông tin nhân tố sinh cảnh<br>
                    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRKz7QfkonMCTpdOelIBiWByiKuUtAlA6Zb6lZ1ewauH8f5cJypUAHCyC1DsRjwykeoSj4tDGnPEWM8/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" scrolling="no" style="width: 90vw; height: 12rem;"></iframe>
                    </li>
                    <li>Bảng tiêu chí đánh giá <br>
                    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSeXPqQlLrew6BPjGsrUO0JHYXM8ON3o_6ky-eBRFgKrnOavri4AyDEUE3dOBdScYViDu1nogkFZMRM/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" scrolling="no" style="width: 90vw; height: 20rem;"></iframe>
                    </li>
                </ul>
            </div>
            <hr>
            <div id="HRAKG" class="DemoHRA">
                <h4>Rủi ro sinh cảnh tại khu vực Kiên Giang</h4>
                <p style="text-align: center;">
                    <img src="https://drive.google.com/uc?export=view&id=1_WF8xeCQCYQpbuwEbllFUlF2a5whN7fS">
                </p>
                <ul>
                    <li>Bảng thông tin nhân tố sinh cảnh<br>
                    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSVwZpRNmYfDhxG1Gr634ykTwfHs0WV-kPhkk7fvQyipaGiGunhuQhg45oiQks2txkBSPAwHbQpFJYL/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" scrolling="no" style="width: 90%; height: 14rem;"></iframe>
                    </li>
                    <li>Bảng tiêu chí đánh giá<br>
                    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR28l9Fo-EVSmVVEeiOlL1Oq_vElv3_Lu7e6QbvTknSEn8ieaRBhvE0gmO7nREmTuLthVkB0323yNlB/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" scrolling="no" style="width: 90%; height: 20rem;"></iframe>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div id="ManuscriptHQ">
        <button id="collapsible" class="collapsible" type="button" style="text-align: left; text-decoration: underline;">3. Manuscript HQ - đánh giá chất lượng sinh cảnh</button>
        <div id="content" class="content" style="width: 100vw; max-width:100%;">
            <p><a href="https://docs.google.com/document/d/1mzGvR7I6wNLAgH9vbsHePavKbYA__WDD/edit?usp=sharing&ouid=103377131320564328842&rtpof=true&sd=true" target="_blank">Link manuscript đánh giá chất lượng sinh cảnh</a></p>
            <p style="text-align:center;"><iframe style="width: 90vw; height: 80vh;" src="https://docs.google.com/document/d/e/2PACX-1vRb2dS1RdYGzBdg4ayYEsvln1nVlfFY_SQaA4lxhEWpx_xE9FYkr45K6BFD2UP3RQ/pub?embedded=true"></iframe></p>
        </div>
    </div>
    <div id="ManuscriptHRA">
        <button id="collapsible" class="collapsible" style="text-decoration: underline;">4. Manuscript HRA - đánh giá rủi ro sinh cảnh</button>
        <div id="content" class="content" style="width: 100vw; max-width: 100%;">
            <p><a href="https://docs.google.com/document/d/1VP0QwzasDQFTGPR-S4UMiPTgLV6_e2-f/edit?usp=sharing&ouid=103377131320564328842&rtpof=true&sd=true" target="_blank">Link manuscript đánh giá rủi ro sinh cảnh</a></p>
            <p style="text-align: center;"><iframe style="width: 90vw; height: 80vh;" src="https://docs.google.com/document/d/e/2PACX-1vSiImA29bFFLjOZGQS4yMPcBOr4obwhfVbwO83gPoBswxmKzOSNnZ5u2w8UxEEOyA/pub?embedded=true"></iframe></p>
        </div>
    </div>
`; 