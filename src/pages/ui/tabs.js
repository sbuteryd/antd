import React, {Component} from "react";
import {Card,Button,Tabs,message,Icon} from 'antd'
import './ui.less'

export default class TabsList extends React.Component{
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
        ];
        this.state = {
            activeKey: panes[0].key,
            panes,
        };
    }
    callback =(key)=>{
        message.info(`Hi，您选择了页签${key}`)
    }


    onChange = activeKey => {
        this.setState({ activeKey });
    };

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };

    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
    };

    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    };
    render() {
        const { TabPane } = Tabs;

        return (
            <div>
                <Card title="Tab 页签" className='card-wrap'>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">
                            GEM
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                           Jay
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Russell
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab 带图的页签" className='card-wrap'>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane
                            tab={
                                <span>
                                    <Icon type="apple" />
                                   GEM
                                </span>
                            }
                            key="1"
                        >
                            GEM
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            Jay
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Russell
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab 带图的页签" className='card-wrap'>
                    <div>
                        <div style={{ marginBottom: 16 }}>
                            <Button onClick={this.add}>ADD</Button>
                        </div>
                        <Tabs
                            hideAdd
                            onChange={this.onChange}
                            activeKey={this.state.activeKey}
                            type="editable-card"
                            onEdit={this.onEdit}
                        >
                            {this.state.panes.map(pane => (
                                <TabPane tab={pane.title} key={pane.key}>
                                    {pane.content}
                                </TabPane>
                            ))}
                        </Tabs>
                    </div>
                </Card>
            </div>
        );
    }
}
