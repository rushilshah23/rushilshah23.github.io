// components/MyLottieAnimation.js
import React from 'react';
import Lottie from 'lottie-react';

interface MyLottieAnimationInterface{
    path:string;
    height:number;
    width:number;
}


const MyLottieAnimation = ({ path, width, height }: MyLottieAnimationInterface) => {
  return (
    <div style={{ width: width, height: height }}>
      <Lottie
        animationData={require(path)}
        loop
        autoplay
      />
    </div>
  );
};

export default MyLottieAnimation;
