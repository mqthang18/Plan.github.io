const container = `
    <div style="display:flex; font-size: 26px; font-weight: 600;">Mục lục [<a id="StateContent" style="display:block; cursor: pointer; color: blue;" onclick="Content(this.id)">Ẩn</a>]</div>
            <div id="ListContent" style="background-color: #d9d9ff; height: fit-content; width: max-content;">
                <div style="padding: .5vw 2vw;">
                    <h3>Nội dung</h3>
                    <ol>
                        <li>
                            <a href="" v-on:click="scrollToBottom($event,'Invest')">Phỏng vấn mô hình InVEST</a>
                        <ul>
                            <li><a href="" v-on:click="scrollToBottom($event, 'SocTrang_InVest')">Sóc Trăng</a></li>
                            <li><a href="" v-on:click="scrollToBottom($event, 'KienGiang_InVest')">Kiên Giang</a></li>
                            <li><a href="" v-on:click="scrollToBottom($event, 'CaMau_InVest')">Cà Mau</a></li>
                        </ul>
                        </li>
                        <li>
                            <a href="" v-on:click="scrollToBottom($event, 'Minibuoys')">Hỗ trợ thiết bị Minibuoys</a>
                            <ul>
                                <li><a href="" v-on:click="scrollToBottom($event, 'SocTrang_Minibuoys')">Sóc Trăng</a></li>
                                <li><a href="" v-on:click="scrollToBottom($event, 'KienGiang_Minibuoys')">Kiên Giang</a></li>
                                <li><a href="" v-on:click="scrollToBottom($event, 'CaMau_Minibuoys')">Cà Mau</a></li>
                            </ul>
                        </li>
                    </ol>
                <div>
            </div>
        </div>
    </div>
`