import React from 'react';
import MPC from './MPC.jsx';
import { AppState } from '../stores/index.js';

class MPCContainer extends React.Component {

  constructor(props){
    super(props);
    let { activePad, allPads, playing, slideShow, activeSlide } = AppState;
    this.state = { activePad, allPads, playing, slideShow, activeSlide };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AppState.addChangeListener(this.onChange);
    this.onChange();
  }

  componentWillUnmount() {
    AppState.removeChangeListener(this.onChange);
  }

  onChange(){
    let { activePad, allPads, playing, slideShow, activeSlide } = AppState;
    this.setState({ activePad, allPads, playing, slideShow, activeSlide });
  }

  render(){
    let { activePad, allPads, playing, slideShow, activeSlide} = this.state;
    return (
      <MPC slideShow={ slideShow } allPads={ allPads } playing={ !!playing } activeSlide={ activeSlide } activePad={ activePad } />
    )
  }
}


export default MPCContainer;
