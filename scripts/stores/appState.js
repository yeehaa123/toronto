import BaseStore from './BaseStore';
import AppStateConstants from '../constants/AppStateConstants';
import R from 'ramda';
import slideShow from '../../content/cth-of-different-cultures.yml';

let assignIndex = R.mapIndexed((item, index) => {
  item.index = index + 1;
  return item;
});

let slides = assignIndex(slideShow.slides);

slideShow.slides = slides;

class AppState extends BaseStore {

  constructor(){
    super();
    this.slideShow = slideShow;
    this.activeSlide = 1;
    this.stop = this._stop.bind(this);
    this.play = this._play.bind(this);
    this.playing = undefined;
    // this.play();
    this.toggle = this._toggle.bind(this);
  }

  _toggle(){
    !this.playing ? this.play() : this.stop();
    this.update();
  }

  _stop(intervalId){
    clearInterval(this.playing);
    this.playing = undefined;
  }

  _play(){
    this.playing = setInterval(()=> {
      this.activeSlide = getRandomInt(1, 24);
      this.update();
    }, 2000);
  }

  setActiveSlide(padId){
    this.activeSlide = padId;
    this.update();
  }

  update(){
    this.emitChange();
  }

  handleAction({ action }){
    switch(action.actionType) {
      case AppStateConstants.PAD_PUSHED:
        let { padId } = action;
        this.setActiveSlide(padId);
        break;
      case AppStateConstants.TOGGLE_AUTOPLAY:
        this.toggle();
        break;
    }
    return true;
  }
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export default AppState;
