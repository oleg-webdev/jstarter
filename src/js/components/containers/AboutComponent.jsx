import React, { Component } from 'react';
import { TabsWrapper, TabPanel } from '../Ui/Tabs/Tabs';
import Toggle from '../Ui/Toggle/Toggle';

class AboutComponent extends Component {
  state = {
    searchTerm: 'About...',
  };

  componentDidMount() {
    console.log('did mount');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');

    return prevState;
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <div>
        <Toggle>
          <Toggle.On>On</Toggle.On>
          <Toggle.Button />
          <Toggle.Off>Off</Toggle.Off>
        </Toggle>

        <p>{searchTerm}</p>
        <TabsWrapper defaultActiveKey="key-1">
          <TabPanel tabkey="key-1" title="Key 1">
            <h3>key 1 tab</h3>
          </TabPanel>
          <TabPanel tabkey="key-2" title="Key 2">
            <h3>key 2 tab</h3>
          </TabPanel>
          <TabPanel tabkey="key-3" title="Key 3">
            <h3>key 3 tab</h3>
          </TabPanel>
        </TabsWrapper>
      </div>
    );
  }
}

export default AboutComponent;
