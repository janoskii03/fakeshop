import React from "react";


const ConnectUs = () => {


    return (
        <div>
            <div class="mb-3">
                <label class="form-label">留言板</label>
                <textarea class="form-control rows=3"></textarea>
                <div class="mb-3">
                    <label class="form-label">電子郵件</label>
                    <input type="email" placeHolder="joe@schmoe.com" class="form-control" />
                </div>
                <div>
                    <button onClick={() => alert("謝謝您的意見，將會儘快回復您")} type="button" class="btn btn-secondary " style={{ margin: '2rem' }}>Submit</button>
                </div>
            </div>
        </div>
    )
};

export default ConnectUs;