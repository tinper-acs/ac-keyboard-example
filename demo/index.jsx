
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import './demo.scss';
const pkg = require('../package.json')




const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


import Demo1 from "./demolist/Demo1";import Demo2 from "./demolist/Demo2";import Demo3 from "./demolist/Demo3";
var DemoArray = [{"example":<Demo1 />,"title":" table 快捷键示例应用","code":"/**\n*\n* @title table 快捷键示例应用\n* @description tab 键可以默认选中第一行、↑(上箭) 选中上一条、↓(下箭) 选中下一条 更多api 见文档说明。   使用步骤：鼠标焦点进入到input中，按tab 切换焦点，当焦点在输入框中，按下 ↓(下箭) 即可 选中第一行、↑(上箭) 选中上一条、↓(下箭) 选中下一条 \n*/\nimport React, { Component } from \"react\";\nimport Table from 'bee-table';\nimport Checkbox from 'bee-checkbox';\n\nconst columns = [\n    {\n      title: \"\",\n      dataIndex: \"d\",\n      key: \"d\",\n      width:80,\n      render(text, record, index) {\n        return (\n          <div style={{ position: 'relative' }} title={text} >\n            <Checkbox />\n          </div>\n        );\n      }\n    },\n    { title: \"用户名\", dataIndex: \"a\", key: \"a\", width:80 , className:\"rowClassName\"},\n    { id: \"123\", title: \"性别\", dataIndex: \"b\", key: \"b\", width: 100 },\n    { title: \"年龄\", dataIndex: \"c\", key: \"c\", width: 200 }\n  ];\n  \n  const data = [\n    { a: \"令狐冲\", b: \"男\", c: 41,d:'操作', key: \"1\" },\n    { a: \"杨过叔叔的女儿黄蓉\", b: \"男\", c: 67,d:'操作', key: \"2\" },\n    { a: \"郭靖\", b: \"男\", c: 25,d:'操作', key: \"3\" }\n  ];\n  \n  class Demo1 extends Component {\n  \n    constructor(props){\n        super(props);\n        this.state = {\n          data: data,\n          selectedRowIndex: 2\n        }\n    }\n  \n    onKeyTab=()=>{\n      let {selectedRowIndex} = this.state;\n      // let count = selectedRowIndex;//(selectedRowIndex+1);\n      // count == (data.length-1)?count = -1:count;\n      // this.setState({\n      //   selectedRowIndex: (count+1)\n      // })\n      console.log(\" ---onKeyTab---- \",selectedRowIndex);\n       this.setState({\n        selectedRowIndex: 0\n      })\n    }\n  \n    onKeyUp=()=>{\n      let {selectedRowIndex} = this.state;\n      let count = selectedRowIndex;\n      let len = (data.length-1);\n      count = count == 0?count = len:(count-1);\n      this.setState({\n        selectedRowIndex: count\n      })\n    }\n  \n    onKeyDown=()=>{\n      let {selectedRowIndex} = this.state;\n      let count = selectedRowIndex;\n      count == (data.length-1)?count = -1:(count+1);\n      this.setState({\n        selectedRowIndex: (count+1)\n      })\n    }\n   \n    onTableKeyDown = ()=>{\n      let {selectedRowIndex} = this.state;\n      console.log(\" ----onTabkeKeyDown--- \",selectedRowIndex);\n    }\n   \n    render() {\n      return (\n        <div className=\"demoPadding\">\n        <input />\n        <Table\n          columns={columns}\n          data={data}\n          rowClassName={(record,index,indent)=>{\n            if (this.state.selectedRowIndex == index) {\n                return 'selected';\n            } else {\n                return '';\n            }\n          }}\n          onRowClick={(record,index,indent)=>{\n            this.setState({ \n                selectedRowIndex: index\n            });\n          }}\n          onKeyTab={this.onKeyTab}\n          onKeyUp={this.onKeyUp}\n          onKeyDown={this.onKeyDown}\n          onTableKeyDown={this.onTableKeyDown} \n          scroll={{ x: \"110%\", y: 140 }}\n        /> \n         <input />\n        </div>\n      );\n    }\n  }\n  \n  \n  ","desc":" tab 键可以默认选中第一行、↑(上箭) 选中上一条、↓(下箭) 选中下一条 更多api 见文档说明。   使用步骤：鼠标焦点进入到input中，按tab 切换焦点，当焦点在输入框中，按下 ↓(下箭) 即可 选中第一行、↑(上箭) 选中上一条、↓(下箭) 选中下一条 "},{"example":<Demo2 />,"title":" bee-tree 快捷键示例应用","code":"/**\n* @title bee-tree 快捷键示例应用\n* @description tab 进入焦点，且选中第一行。 ↑(上箭)、↓(下箭) 上一行、下一行。 ←(左箭)、→(右箭) 收起、展开。 focusable API  使用步骤：鼠标焦点进入到input中，按tab 切换焦点，当焦点在输入框中，按下 ↑(上箭)、↓(下箭) 上一行、下一行。 ←(左箭)、→(右箭) 收起、展开。 \n*/\n\nimport React, { Component } from \"react\";\nimport Tree from 'bee-tree';\n\nconst x = 6;\nconst y = 5;\nconst z = 2;\nconst gData = [];\n\nconst generateData = (_level, _preKey, _tns) => {\n    const preKey = _preKey || '0';\n    const tns = _tns || gData;\n\n    const children = [];\n    for (let i = 0; i < x; i++) {\n        const key = `${preKey}-${i}`;\n        tns.push({ title: key, key });\n        if (i < y) {\n            children.push(key);\n        }\n    }\n    if (_level < 0) {\n        return tns;\n    }\n    const level = _level - 1;\n    children.forEach((key, index) => {\n        tns[index].children = [];\n        return generateData(level, key, tns[index].children);\n    });\n};\ngenerateData(z);\n\nconst TreeNode = Tree.TreeNode;\n\n\nclass Demo2 extends Component{\n  constructor(props) {\n  \tsuper(props);\n    this.state = {\n      expandedKeys: [],\n      autoExpandParent: true,\n      checkedKeys: ['0-0-0'],\n      selectedKeys: [],\n    };\n    this.onExpand = this.onExpand.bind(this);\n    this.onCheck = this.onCheck.bind(this);\n    this.onSelect = this.onSelect.bind(this);\n  }\n  onExpand(expandedKeys) {\n    console.log('onExpand', arguments);\n    // if not set autoExpandParent to false, if children expanded, parent can not collapse.\n    // or, you can remove all expanded children keys.\n    this.setState({\n      expandedKeys,\n      autoExpandParent: false,\n    });\n  }\n  onCheck(checkedKeys) {\n    this.setState({\n      checkedKeys,\n      selectedKeys: ['0-3', '0-4'],\n    });\n  }\n  onSelect(selectedKeys, info) {\n    console.log('onSelect', info);\n    this.setState({ selectedKeys });\n  }\n  render() {\n    const loop = data => data.map((item) => {\n      if (item.children) {\n        return (\n          <TreeNode key={item.key} title={item.key} disableCheckbox={item.key === '0-0-0'}>\n            {loop(item.children)}\n          </TreeNode>\n        );\n      }\n      return <TreeNode key={item.key} title={item.key} isLeaf={true}/>;\n    });\n    return (\n      <Tree\n        checkable\n        focusable\n        onExpand={this.onExpand} expandedKeys={this.state.expandedKeys}\n        autoExpandParent={this.state.autoExpandParent}\n        onCheck={this.onCheck} \n        onSelect={this.onSelect} \n      >\n        {loop(gData)}\n      </Tree>\n    );\n  }\n};\n\n\n  ","desc":" tab 进入焦点，且选中第一行。 ↑(上箭)、↓(下箭) 上一行、下一行。 ←(左箭)、→(右箭) 收起、展开。 focusable API  使用步骤：鼠标焦点进入到input中，按tab 切换焦点，当焦点在输入框中，按下 ↑(上箭)、↓(下箭) 上一行、下一行。 ←(左箭)、→(右箭) 收起、"},{"example":<Demo3 />,"title":" bee-datepicker  快捷键","code":"/**\n*\n* @title bee-datepicker  快捷键示例应用\n* @description esc 关闭面板。 ↓(下箭) 打开日期面板  使用步骤：鼠标焦点进入到input中，按tab 切换焦点，当焦点在输入框中，按下 ↓(下箭) 即可 打开日期面板。esc 即可关闭面板\n*/\nimport React, {Component} from \"react\";\nimport DatePicker from \"tinper-bee/lib/Datepicker\";\nimport { Icon, Row, Col } from 'tinper-bee';\n\nimport zhCN from \"rc-calendar/lib/locale/zh_CN\";\nimport enUS from \"rc-calendar/lib/locale/en_US\";\nimport moment from \"moment\";\nimport 'moment/locale/zh-cn';\n \nimport \"../../node_modules/bee-datepicker/build/DatePicker.css\"\nmoment.locale('zh-cn');\n\nconst format = \"YYYY-MM-DD dddd\";\n\nconst dateInputPlaceholder = \"选择日期\";\n\nfunction onSelect(d) {\n    // console.log(d);\n}\n\nclass Demo3 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: '',\n            open: false\n        };\n    }\n\n    onChange = (d, dataString) => {\n        console.log(dataString);\n    };\n    clear = d => {\n        this.setState({\n            value: ''\n        })\n    }\n    renderIcon = d => {\n        return (<Icon type=\"uf-search\"></Icon>)\n    }\n    onOpenChange = d => {\n        console.log(d);\n    }\n    open = d => {\n        this.setState({\n            open: true\n        })\n    }\n    onClick = (d,str) => {\n        console.log(d);\n        this.state = {\n            open: false\n        };\n    }\n    renderFooter = () => {\n        return null\n    }\n\n    render() {\n        var self = this;\n        return (\n            <div className=\"demoPadding\">\n                <input />  \n                <Row>\n                    <Col md={8}>\n                        <DatePicker\n                            format={format}\n                            onSelect={onSelect}\n                            onChange={this.onChange}\n                            locale={zhCN}\n                            open={this.state.open}\n                            //defaultValue={this.state.value}\n                            value={this.state.value}\n                            onOpenChange={this.onOpenChange.bind(this)}\n                            placeholder={dateInputPlaceholder}\n                            className={\"uuuu\"}\n                            onClick={(e) => this.onClick(e)}\n                        />\n                    </Col>\n                    <Col md={3}>\n                        <button className=\"u-button\" onClick={this.clear}>清空</button>\n                        <button className=\"u-button\" onClick={this.open}>设置为true</button>\n                    </Col>\n                </Row>\n            </div>\n        );\n    }\n}\n\n","desc":" esc 关闭面板。 ↓(下箭) 打开日期面板  使用步骤：鼠标焦点进入到input中，按tab 切换焦点，当焦点在输入框中，按下 ↓(下箭) 即可 打开日期面板。esc 即可关闭面板"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ process.env.NODE_ENV==='development'?code:code.replace('../../src/index.js',pkg.name).replace('../../src/index',pkg.name) }</code></pre>
                </Panel>
            </Col>
        )
    }
}

export default class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

