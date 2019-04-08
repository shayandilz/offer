import React from 'react'
import ModuleGroup from './ModuleGroup'
import './Navbar.css'
import logo from '../../../Layout/category.png'
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
      <div className='analytics' onClick={this.toggleHidden}>
        <img className='logo_categories' src={logo} alt='png_logo' />
          <div className='topButton'>
            دسته بندی ها
          </div>
        <div className={`analyticsDropDown ${this.state.isVisible ? 'visible': ''}`}>
          {moduleGroups.map((item, index) => <ModuleGroup key={index.toString()} id={item.key} name={item.name} icon={item.icon.url}/>)}
        </div>
      </div>
    )
  }
}
export default ModuleGroupSelector