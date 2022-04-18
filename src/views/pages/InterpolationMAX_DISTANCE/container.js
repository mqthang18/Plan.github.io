var container = `
    <div style="display: flex; font-size:26px;font-weight: 600;">
        Mục lục [<a id="StateContent" style="display:block; cursor: pointer; color: blue;" onclick="Content(this.id)">Ẩn</a>]
    </div>
    <div id="ListContent" style="background-color: #d9d9ff; height: fit-content; width: max-content;">
        <div style="padding: .5vw 2vw;">
            <h3>Nội dung</h3>
            <ol>
                <li><a href="" v-on:click="scrollToBottom($event,'BUG')">BUG InVEST ver sau 3.9.0</a></li>
                <li><a href="" v-on:click="scrollToBottom($event,'ResultDemo')">Kết quả demo</a></li>
            </ol>
        </div>
    </div>
`; 