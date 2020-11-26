import React from 'react';
import ControlPannel from "./Components/ControlPannel";
import Calender from "./Components/Calender";
import PannelHide from 'Components/PannelHide';
import { connect } from 'react-redux';

function App() {
  const PannelHideContainer = connect(
    (state) => ({hide:state.pannelHide.hide}),
    (dispatch) => ({onClick: () => dispatch({type:'HIDE_PANNEL'})})
  )(PannelHide);
  const ControlPannelContainer = connect(
    (state) => ({hide:state.pannelHide.hide})
  )(ControlPannel);

  return (
    <div className="App">
      <ControlPannelContainer />
      <Calender />
      <PannelHideContainer />
    </div>
  );
}

export default App;
