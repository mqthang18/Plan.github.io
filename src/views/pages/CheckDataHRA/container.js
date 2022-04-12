var container = `
    <div style="display:flex; font-size: 1.3rem; font-weight: 600;">Mục lục [<a id="StateContent" style="display: block; cursor: pointer; color: blue;" onclick="Content(this.id)">Ẩn</a>]</div>
    <div id="ListContent" style="padding: 0.25vh 0.5vw;">
        <h3>Nội dung</h3>
        <ol>
            <li><a href="" v-on:click="scrollToBottom($event, 'LULCmap')">Dữ liệu bản đồ lớp phủ và sử dụng đất, LULC map</a></li>
            <li><a href="" v-on:click="scrollToBottom($event, 'ThreatInfo')">Dữ liệu bảng thông tin nhân tố đe dọa và sinh cảnh</a></li>
            <li><a href="" v-on:click="scrollToBottom($event, 'CriteriaTable')">Dữ liệu bảng chỉ tiêu đánh giá</a></li>
        </ol>
    </div>
`; 
