import React from 'react';
import Pads from './Pads.jsx';
import '../../styles/sidebar.css';

class Sidebar extends React.Component {
  render(){
    let { activeSlide, playing, slideShow } = this.props;

    return (
      <section className='sidebar'>
        <Pads slides={ slideShow.slides } activeSlide={ activeSlide } playing={ playing } />
        <section className="modeSwitch"/>
      </section>
    )
  }
}

export default Sidebar;
