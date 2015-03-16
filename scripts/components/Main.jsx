import React from 'react';
import Slide from './Slide.jsx';
import '../../styles/main.css';

class Main extends React.Component {
  render(){
    let { activeSlide, slides } = this.props;
    let slide = slides[activeSlide];
    return (
      <section className='main'>
        <Slide slide={slide}/>
      </section>
    )
  }
}
Main.propTypes = {
  activeSlide: React.PropTypes.number,
  slides: React.PropTypes.array.isRequired
}


export default Main;
