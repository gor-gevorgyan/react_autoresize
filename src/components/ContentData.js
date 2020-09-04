import React, {useState} from "react";
import AddCriteria from "./criteria/AddCriteria";
import VendorRow from "./vendorRow";
import {Row, Col} from "antd";

export default function ContentData() {
    const [rows, setRows] = useState([1]);

    function addRow() {
        setRows([...rows, 1]);
    }

    return (
        <Row>
            <Col span={22} offset={1}>
                <AddCriteria addRow={addRow}></AddCriteria>
                {
                    rows.map((value, index) => <VendorRow key={index}></VendorRow>)
                }
            </Col>
        </Row>
);
}
