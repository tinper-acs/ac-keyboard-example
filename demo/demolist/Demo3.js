/**
*
* @title bee-datepicker  快捷键示例应用。
* @description esc 关闭面板。 ↓(下箭) 打开日期面板
*/

import React, { Component } from "react";
import DatePicker from "bee-datepicker/build/Datepicker";
import { Row, Col } from 'bee-layout';

import zhCN from "rc-calendar/lib/locale/zh_CN";
import moment from "moment";

const format = "YYYY-MM-DD";

const dateInputPlaceholder = "选择日期";

function onSelect(d) {
  console.log(d);
}

function onChange(d) {
  console.log(d);
}

function disabledDate(current) {
  return current && current.valueOf() < Date.now();
}

class Demo3 extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <DatePicker
              format={format}
              onSelect={onSelect}
              onChange={onChange}
              locale={zhCN}
              disabledDate={disabledDate}
              defaultValue={moment()}
              placeholder={dateInputPlaceholder}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Demo3;
  