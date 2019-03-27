import React from 'react'
import ModuleGroup from './ModuleGroup'

class ModuleGroupSelector extends React.Component {
    constructor(props) {
      super(props);
      this.toggleHidden = this.toggleHidden.bind(this);
      this.state = {
        isVisible: false
      }
    }
  
    toggleHidden () {
      this.setState({
        isVisible: !this.state.isVisible
      })
    }
    
    render() {
      const moduleGroups = this.props.moduleGroups;
      return (
        <div className='analytics' onMouseEnter={this.toggleHidden}>
  
          <div className='topButton'>
            Analytics Modules
          </div>
          <div className={`analyticsDropDown ${this.state.isVisible ? 'visible': ''}`}>
            {moduleGroups.map((item, index) => <ModuleGroup key={index.toString()} id={item.key} name={item.name} />)}
          </div>
        </div>
      )
    }
  }
  export default ModuleGroupSelector