import React from 'react';
import Sidebar from './Sidebar.jsx';
import Main from './Main.jsx';
import { AppState } from '../stores/index.js';

import 'normalize.css/normalize.css';
import '../../styles/app.css';

class MPC extends React.Component {

  render(){
    let { playing, slideShow, activeSlide } = this.props;
    return (
      <section className='app'>
        <Sidebar slideShow={ slideShow } activeSlide ={ activeSlide } playing={ playing } />
        <Main activeSlide={ activeSlide } slides={ slideShow.slides }/>
      </section>
    )
  }
}

MPC.propTypes = {
  activeSlide: React.PropTypes.number,
  playing: React.PropTypes.bool,
  slideShow: React.PropTypes.object.isRequired
}


export default MPC;
