import AppDispatcher from '../dispatcher/AppDispatcher';
import AppStateConstants from '../constants/AppStateConstants'

let Actions = {
  padPushed(padId){
    AppDispatcher.handleViewAction({
      actionType: AppStateConstants.PAD_PUSHED,
      padId: padId
    });
  },
  toggleAutoPlay(){
    AppDispatcher.handleViewAction({
      actionType: AppStateConstants.TOGGLE_AUTOPLAY,
    });
  }
};

export default Actions;

