import React from 'react'

export default function ShoppingFee() {
    return (
        <div>
            <table class="ui celled table">
                <thead>
                    <tr><th>地區</th>
                        <th>運費</th>
                        <th>運送時間</th>
                    </tr></thead>
                <tbody>
                    <tr>
                        <td data-label="area">美洲</td>
                        <td data-label="fee">500</td>
                        <td data-label="comment">15個工作天</td>
                    </tr>
                    <tr>
                        <td data-label="area">歐洲</td>
                        <td data-label="fee">300</td>
                        <td data-label="comment">10個工作天</td>
                    </tr>
                    <tr>
                        <td data-label="area">東南亞</td>
                        <td data-label="fee">200</td>
                        <td data-label="comment">7個工作天</td>
                    </tr>
                    <tr>
                        <td data-label="area">非洲</td>
                        <td data-label="fee">700</td>
                        <td data-label="comment">20個工作天</td>
                    </tr>

                </tbody>
            </table>
            <div>
                如有延誤，則時間視貨運廠商情況調整
            </div>
        </div>

    );
};


