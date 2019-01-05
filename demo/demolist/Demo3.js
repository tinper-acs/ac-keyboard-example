/**
*
* @title bee-datepicker  快捷键示例应用
* @description esc 关闭面板。 ↓(下箭) 打开日期面板  使用步骤：鼠标焦点进入到input中，按tab 切换焦点，当焦点在输入框中，按下 ↓(下箭) 即可 打开日期面板。esc 即可关闭面板
*/
import React, {Component} from "react";
import DatePicker from "tinper-bee/lib/Datepicker";
import { Icon, Row, Col } from 'tinper-bee';

import zhCN from "rc-calendar/lib/locale/zh_CN";
import enUS from "rc-calendar/lib/locale/en_US";
import moment from "moment";
import 'moment/locale/zh-cn';
 
import "../../node_modules/bee-datepicker/build/DatePicker.css"
moment.locale('zh-cn');

const format = "YYYY-MM-DD dddd";

const dateInputPlaceholder = "选择日期";

function onSelect(d) {
    // console.log(d);
}

class Demo3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            open: false
        };
    }

    onChange = (d, dataString) => {
        console.log(dataString);
    };
    clear = d => {
        this.setState({
            value: ''
        })
    }
    renderIcon = d => {
        return (<Icon type="uf-search"></Icon>)
    }
    onOpenChange = d => {
        console.log(d);
    }
    open = d => {
        this.setState({
            open: true
        })
    }
    onClick = (d,str) => {
        console.log(d);
        this.state = {
            open: false
        };
    }
    renderFooter = () => {
        return null
    }

    render() {
        var self = this;
        return (
            <div className="demoPadding">
                <input />  
                <Row>
                    <Col md={8}>
                        <DatePicker
                            format={format}
                            onSelect={onSelect}
                            onChange={this.onChange}
                            locale={zhCN}
                            open={this.state.open}
                            //defaultValue={this.state.value}
                            value={this.state.value}
                            onOpenChange={this.onOpenChange.bind(this)}
                            placeholder={dateInputPlaceholder}
                            className={"uuuu"}
                            onClick={(e) => this.onClick(e)}
                        />
                    </Col>
                    <Col md={3}>
                        <button className="u-button" onClick={this.clear}>清空</button>
                        <button className="u-button" onClick={this.open}>设置为true</button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Demo3;