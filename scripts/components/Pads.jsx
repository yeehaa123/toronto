import React from 'react';
import R from 'ramda';
import Pad from './Pad.jsx';
import Actions from '../actions/index.js';
import '../../styles/pads.css';

class Pads extends React.Component {

  handleClick(){
    Actions.toggleAutoPlay();
  }

  render(){
    let { activeSlide, playing, slides } = this.props;
    let createPads = R.mapIndexed(({ index, layout, content}) => {
      let isActive = index === activeSlide;
      return <Pad isActive={ isActive } key={ index } type={ layout } id={ index } content={ content }/>
    })
    let pads = createPads(slides); 
    return (
      <section className="pads">
        { pads }
        <button className={ playing ? 'autoplay active' : 'autoplay' } onClick={ this.handleClick }>Autoplay</button>
      </section>
    )
  }
}

Pads.propTypes = {
  activeSlide: React.PropTypes.number,
  playing: React.PropTypes.bool,
  slides: React.PropTypes.array.isRequired
}

export default Pads;
