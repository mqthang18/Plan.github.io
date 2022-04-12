var container = `
    <div style="display: flex; font-size:26px;font-weight: 600;">
        Mục lục [<a id="StateContent" style="display:block; cursor: pointer; color: blue;" onclick="Content(this.id)">Ẩn</a>]
    </div>
        <div id="ListContent" style="background-color: #d9d9ff; height: fit-content; width: max-content;">
            <div style="padding: .5vw 2vw;">
                <h3>Nội dung</h3>
                <ol>
                    <li>
                        <a href="" v-on:click="scrollToBottom($event, 'GetDevice')">Lấy thiêt bị Minibuoys</a>
                        <ul>
                            <li><a href="" v-on:click="scrollToBottom($event, 'Device_ST')">Sóc Trăng</a></li>
                            <li><a href="" v-on:click="scrollToBottom($event, 'Device_CM')">Cà Mau</a></li>
                            <li><a href="" v-on:click="scrollToBottom($event, 'Device_KG')">Kiên Giang</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="" v-on:click="scrollToBottom($event, 'Invest')">Phỏng vấn mô hình khoảng cách tác động các nhân tố</a>
                        <ul>
                            <li><a href="" v-on:click="scrollToBottom($event, 'PV_ST')">Sóc Tăng</a></li>
                            <li><a href="" v-on:click="scrollToBottom($event, 'PV_CM')">Cà Mau</a></li>
                            <li><a href="" v-on:click="scrollToBottom($event, 'PV_KG')">Kiên Giang</a></li>
                        </ul>
                    </li>
                </ol>
            </div>
        </div>
`;

