// @flow
import React, { Component, Children } from 'react';
import styles from './styles.scss';


type Props = {
  children: React.ChildrenArray<React.Node> | React.Node,
  handleSelectTabCallback: () => void,
  defaultActiveKey: String,
}

class TabsWrapper extends Component<Props> {
  state = {
    activeTabName: this.props.defaultActiveKey,
    activeIndex: null,
    activeChildren: null,
  };

  componentDidMount() {
    if (!this.state.activeChildren) {
      this.resolveActiveChildren(this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.resolveActiveChildren(nextProps);
  }

  resolveActiveChildren = (props) => {
    const children = Children.toArray(props.children);
    const { activeTabName } = this.state;
    const active = children.find(item => item.props.tabkey === activeTabName);

    this.setState({
      activeChildren: active,
      activeIndex: children.indexOf(active),
    });
  }

  hadndleSelectTab = (activeTabName, index) => {
    const data = {
      activeTabName,
      activeIndex: index,
      // activeChildren: this.props.children[index],
      activeChildren: this.props.children.find(
        item => item.props.tabkey === activeTabName,
      ),
    };
    this.setState(data);

    if (this.props.handleSelectTabCallback) {
      this.props.handleSelectTabCallback(data);
    }
  }

  renderTabsHeading() {
    if (!this.props.children.length) return null;

    return (
      <ul>
        {Children.map(this.props.children, (child, index) => {
          if (!child) return null;

          return React.cloneElement(child, {
            onSelectTab: this.hadndleSelectTab,
            tabKey: child.props.tabkey,
            childIndex: index,
            isActive: child.props.tabkey === this.state.activeTabName,
          });
        })}
      </ul>
    );
  }

  // Filter thru children and find matched values
  renderActiveTabContent = () => {
    const { activeChildren } = this.state;

    if (!activeChildren) {
      return null;
    }

    return (
      <div className="tabviewClass">
        {activeChildren && activeChildren.props.children}
      </div>
    );
  }

  render() {
    const wrapperClasses = [
      // maybe add some classes
      styles.tabContainerClass,
      this.state.activeIndex,
    ].join(' ');
    return (
      <div className={wrapperClasses}>
        {this.renderTabsHeading()}
        {this.renderActiveTabContent()}
      </div>
    );
  }
}

//
// Single tab
//
type PanelProps = {
  childIndex: Number,
  title: React.ElementType | string,
  isActive: boolean,
  tabKey: string,
  onSelectTab: () => void,
}

const TabPanel = (props: PanelProps) => {
  const tabClasses = [
    `index-${props.childIndex}`,
    `tabKey-${props.tabKey}`,
    props.isActive ? 'active-tabclass' : '',
  ].join(' ');

  const onClickHandler = () => {
    props.onSelectTab(props.tabKey, props.childIndex);
  };

  return (
    <li className={tabClasses}>
      <button type="button" onClick={onClickHandler}>
        {props.title}
      </button>
    </li>
  );
};

export { TabsWrapper, TabPanel };
