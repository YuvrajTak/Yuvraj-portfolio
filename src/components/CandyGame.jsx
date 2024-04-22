import { Unity, useUnityContext,UnityProvider  } from "react-unity-webgl";
import React, { lazy, Suspense } from 'react';


const CandyGame = () => {

    const { unityProvider } = useUnityContext({
        loaderUrl: "/assets/candy-cream/candy-crush.loader.js",
        dataUrl: "/assets/candy-cream/webgl.data",
        frameworkUrl: "/assets/candy-cream/build.framework.js",
        codeUrl: "/assets/candy-cream/build.wasm",
      });

    return (
      <>
      <p>child folder</p>
      <Suspense fallback={<div>Loading Unity...</div>}>
      <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }}/>
      </Suspense>
      </>
    );
  };
  
  export default CandyGame;
  