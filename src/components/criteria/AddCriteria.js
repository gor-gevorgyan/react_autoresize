import React from "react";
import {Select, Row, Col} from "antd";

const {Option} = Select;

function AddCriteria(props) {
    function addLine() {
        props.addRow();
    }

    return (
        <Row>
            <Col span={20}>
                <Select defaultValue="add" onSelect={addLine}>
                    <Option value="add">Add</Option>
                </Select>
            </Col>
        </Row>
    );
}

export default AddCriteria;