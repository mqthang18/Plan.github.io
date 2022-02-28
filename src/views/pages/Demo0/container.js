var container = `
    <div style="display:flex; font-size: 1.3rem; font-weight: 600;">Mục lục [<a id="StateContent" style="display: block; cursor: pointer; color: blue;" onclick="Content(this.id)">Ẩn</a>]</div>
    <div id="ListContent">
        <div>
            <h3>Nội dung</h3>
            <ol>
                <li>
                    <a href="" v-on:click="scrollToBottom($event, 'ResultHQ')">Kết quả module Habitat quality</a>
                    <ul>
                        <li><a href="" v-on:click="scrollToBottom($event, 'HQST')">Sóc Trăng</a></li>
                        <li><a href="" v-on:click="scrollToBottom($event, 'HQCM')">Cà Mau</a></li>
                        <li><a href="" v-on:click="scrollToBottom($event, 'HQKG')">Kiên Giang</a></li>
                    </ul>
                </li>
                <li>
                    <a href="" v-on:click="scrollToBottom($event,'ResultHRA')">Kết quả module Habitat Risk Assessment</a>
                    <ul>
                        <li><a href="" v-on:click="scrollToBottom($event, 'HRAST')">Sóc Trăng</a></li>
                        <li><a href="" v-on:click="scrollToBottom($event, 'HRACM')">Cà Mau</a></li>
                        <li><a href="" v-on:click="scrollToBottom($event, 'HRAKG')">Kiên Giang</a></li>
                    </ul>
                </li>
                <li>
                    <a href="" v-on:click="scrollToBottom($event, 'ManuscriptHQ')">Manuscript HQ - đánh giá chất lượng sinh cảnh</a>
                </li>
                <li>
                    <a href="" v-on:click="scrollToBottom($event, 'ManuscriptHRA')">Manuscript HRA - đánh giá rủi ro sinh cảnh</a>
                </li>
            </ol>
        </div>
    </div>
`; 