import React, {useState, useRef} from "react";
import {
    Image,
    Button,
    Input,
    InputNumber,
    Progress
} from "antd";
import {
    PlusCircleOutlined
} from '@ant-design/icons';

import "./index.scss";

const defaultData = require('./emptyVendor.json');
const {TextArea} = Input;

export default function Vendor(props) {
    let [newVendorBtn, setNewVendorBtn] = useState(false);
    let [redact, setRedact] = useState(false);
    let [type, setType] = useState('');
    let [key, setKey] = useState('');
    const [data, setData] = useState(props.vendor);
    const imageRef = useRef(null);

    function emptyImage() {
        return <div className="empty-img">
            <PlusCircleOutlined className="plus-icon" onClick={openImageUploader} />
            <input type="file" ref={imageRef} onChange={uploadNewImage}/>
            </div>;
    }

    const openImageUploader = () => imageRef.current.click();


    function uploadNewImage(event) {
        let files = event.target.files;

        if (files.length > 0) {
            let reader = new FileReader();
            reader.onloadend = function() {
                setData({...data, icon: reader.result});
            }
            reader.readAsDataURL(files[0]);
        } else {
            setData({...data, icon: ''});
        }
    }

    function image() {
        return <Image className="image" src={data.icon}></Image>;
    }

    function addVendorBtn() {
        return <Button type="link" onClick={addNewVendor}>Add New Vendor</Button>;
    }

    function addNewVendor(event) {
        setNewVendorBtn(false);
        let vendor = {...data, edit: false};
        props.addVendor(vendor);
        setData(defaultData);
    }

    function checkData() {
        return data.edit &&
            data.score > 0 &&
            data.icon.length > 0 &&
            data.description.length > 0 &&
            data.history.length > 0 &&
            data.founded.length > 0 &&
            data.investors.length > 0 &&
            data.founders.length > 0
    }

    function setItemData(event, currentType, currentKey) {
        if (redact && key === currentKey) {
            setRedact(false);
            setType('');
            setKey('');
        } else {
            setRedact(true);
            setKey(currentKey);
            setType(currentType);
        }
    }

    function setChangedItemData(value) {
        setData({...data, [key]: value});
    }

    function showRedact() {
        let input = '';

        switch (type) {
            case "number":
                input = <InputNumber min={0} max={10} step={0.1} size="small" value={data[key]} onChange={value => setChangedItemData(value)} />;
                break;
            case "text":
                input = <Input className="input" size="small" value={data[key]} onChange={ e => setChangedItemData(e.target.value)}/>;
                break;
            case "textarea":
                input = <TextArea className="input" size="small" value={data[key]} onChange={e => setChangedItemData(e.target.value)}/>;
                break;
            default:
                input = <></>;
                break;
        }

        return (
            <div className="redactor">
                {input}
            </div>
        );
    }

    function showImgContent() {
        return (
                <>
                    {
                        data.icon.length > 0 ? image() : emptyImage()
                    }
                    {
                        newVendorBtn && checkData() ?
                            addVendorBtn()
                            :
                            <div className="empty-space"></div>
                    }
                </>
        );
    }

    function formatToPercent(score) {
        return parseFloat(score) * 10;
    }

    return (
        <div className="vendor-item">
            <div className="vendor-icon-content" onMouseMove={() => setNewVendorBtn(true)} onMouseLeave={() => setNewVendorBtn(false)}>
                {
                    redact && data.edit ? showRedact() : showImgContent()
                }
            </div>
            <div className="vendor-data-content">
                {
                    data.edit ? <>
                        <div className="item item-score"
                             onClick={event => setItemData(event, 'number', 'score')}>Overall Score</div>
                        <div className="item item-description"
                             onClick={event => setItemData(event, 'textarea', 'description')}>Product Description</div>
                        <div className="item item-history" onClick={event => setItemData(event, 'textarea', 'history')}>Funding History</div>
                        <div className="item item-founded" onClick={event => setItemData(event, 'text', 'founded')}>Founded</div>
                        <div className="item item-investors" onClick={event => setItemData(event, 'text', 'investors')}>Key Investors</div>
                        <div className="item item-founders" onClick={event => setItemData(event, 'text', 'founders')}>Founders</div>
                    </> : <>
                        <div className="item item-score">
                            <Progress width={18} strokeColor={{
                                from: '#108ee9',
                                to: '#87d068',
                            }}
                                      percent={formatToPercent(data.score)}
                                      format={percent => percent}
                                      type="circle"
                            />
                        </div>
                        <div className="item item-description">{data.description}</div>
                        <div className="item item-history">{data.history}</div>
                        <div className="item item-founded">{data.founded}</div>
                        <div className="item item-investors">{data.investors}</div>
                        <div className="item item-founders">{data.founders}</div>
                    </>
                }
            </div>
        </div>
    );
}