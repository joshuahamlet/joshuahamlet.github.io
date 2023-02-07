import React from 'react'
import lottie from 'lottie-web';
import animationData from '../lottie/blob.json'
import './Blob.css'

class GirlLooking extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
    
    //call the loadAnimation to start the animation
      lottie.loadAnimation({
      container: this.animBox, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData // the path to the animation json
    });
  }
  
  render() {
    return (
      <>
        <div className="blob" ref={ ref => this.animBox = ref}/>
        
      </>
    );
  }
}

export default GirlLooking;