import React, {useState} from "react";
import {Row, Space} from "antd";
import Vendor from "./vendor";

const emptyVendorData = require('./vendor/emptyVendor.json');
const vendorData = emptyVendorData;

function setDefaultVendor() {
    return [vendorData];
}

function VendorRow() {
    const [vendors, setVendor] = useState(() => {
        return setDefaultVendor();
    });

    function addVendor(vendor) {
        setVendor([...vendors, vendor]);
    }

    return (
        <Row>
            <Space direction="horizontal">
                {
                    vendors.map((vendor, index) => <Vendor key={index} vendor={vendor} addVendor={addVendor}></Vendor>)
                }
            </Space>
        </Row>
    );
}

export default VendorRow;