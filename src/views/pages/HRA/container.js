const Container = {
    template: `
    <div class="container" style="margin:auto; width: 90vw;">
        <div class="left">
        <button type="button" id="collapsible" class="collapsible">Bảng 1. Bảng thông tin sinh cảnh, nhân tố stress</button>
        <!-- <h2>Bảng 1. Bảng thông tin sinh cảnh, nhân tố stress</h2> -->
            <div id="content" class="content">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Path</th>
                        <th>Type</th>
                        <th>Stressor buffer (meters)</th>
                    </tr>
                    <tr>
                        <td>Mangrove</td>
                        <td>habitat_layers/Habitat.tif</td>
                        <td>habitat</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td>stressor_layers/A.shp</td>
                        <td>tressor</td>
                        <td>?</td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td>stressor_layers/B.shp</td>
                        <td>tressor</td>
                        <td>?</td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td>stressor_layers/C.shp</td>
                        <td>tressor</td>
                        <td>?</td>
                    </tr>
                </table>
                <p>Cách tính stressor buffer?</p>
                <p>"Spatial overlap" sẽ được tính dựa trên các dữ liệu về habitat maps, stressor maps, buffer distance và decay equation lựa chọn trong UI program theo công thức: <br> maximum_criteria_score * percentage_overlap + minimum_criteria_score * (1 - percentage_overlap)</p>
            </div>
        </div>
        <div class="right">
            <button type="button" id="collapsible" class="collapsible">Bảng 2. Bảng tiêu chí (<a href="https://drive.google.com/file/d/156oDUzJpScjAnmZawYBh0BaUL5LCN1Bb/view?usp=sharing" target="_blank">Sơ đồ</a>)</button>
            <div id="content" class="content">
                <table>
                    <tr>
                        <th>Habitat Name</th>
                        <th colspan="3">Mangrove</th>
                        <th>Criteria type</th>
                    </tr>
                    <tr>
                        <td>Habitat resilience attributes</td>
                        <td>Rating</td>
                        <td>DQ</td>
                        <td>Weight</td>
                        <td>E/C</td>
                    </tr>
                    <tr>
                        <td>recruitment rate</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>C</td>
                    </tr>
                    <tr>
                        <td>natural mortability rate</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>C</td>
                    </tr>
                    <tr>
                        <td>connectivity rate</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>C</td>
                    </tr>
                    <tr>
                        <td>recovery time</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>C</td>
                    </tr>
                    <tr>
                        <td colspan="5"><span style="visibility: hidden;">a</span></td>
                    </tr>
                    <tr>
                        <td>Habitat stressor overlap properties</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td>Rating</td>
                        <td>DQ</td>
                        <td>Weight</td>
                        <td>E/C</td>
                    </tr>
                    <tr>
                        <td>frequency of disturbance</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>C</td>
                    </tr>
                    <tr>
                        <td>change in area rating</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>C</td>
                    </tr>
                    <tr>
                        <td>change in structure rating</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>C</td>
                    </tr>
                    <tr>
                        <td>temporal overlap rating</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>E</td>
                    </tr>
                    <tr>
                        <td>management effectiveness</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>E</td>
                    </tr>
                    <tr>
                        <td>intensity rating</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>E</td>
                    </tr>
                    <tr>
                        <td colspan="5"><span style="visibility: hidden;">a</span></td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td>Rating</td>
                        <td>DQ</td>
                        <td>Weight</td>
                        <td>E/C</td>
                    </tr>
                    <tr>
                        <td>frequency of disturbance</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>C</td>
                    </tr>
                    <tr>
                        <td>change in area rating</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>C</td>
                    </tr>
                    <tr>
                        <td>change in structure rating</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>C</td>
                    </tr>
                    <tr>
                        <td>temporal overlap rating</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>E</td>
                    </tr>
                    <tr>
                        <td>management effectiveness</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>E</td>
                    </tr>
                    <tr>
                        <td>intensity rating</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>E</td>
                    </tr>
                    <tr>
                        <td colspan="5"><span style="visibility: hidden;">a</span></td>
                    </tr>
                    <tr>
                        <td>Habitat stressor overlap properties</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td>Rating</td>
                        <td>DQ</td>
                        <td>Weight</td>
                        <td>E/C</td>
                    </tr>
                    <tr>
                        <td>frequency of disturbance</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>C</td>
                    </tr>
                    <tr>
                        <td>change in area rating</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>C</td>
                    </tr>
                    <tr>
                        <td>change in structure rating</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>C</td>
                    </tr>
                    <tr>
                        <td>temporal overlap rating</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>E</td>
                    </tr>
                    <tr>
                        <td>management effectiveness</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>E</td>
                    </tr>
                    <tr>
                        <td>intensity rating</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>E</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
            `
};