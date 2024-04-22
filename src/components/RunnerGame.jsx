import { Unity, useUnityContext } from "react-unity-webgl";

const RunnerGame = () => {

    const { unityProvider } = useUnityContext({
        loaderUrl: "/assets/runner/Endless-standardShader.loader.js",
        dataUrl: "/assets/runner/webgl.data",
        frameworkUrl: "/assets/runner/build.framework.js",
        codeUrl: "/assets/runner/build.wasm",
      });

    return (
      <Unity unityProvider={unityProvider} style={{ width: "100%", height: "95%" }}/>
    );
  };
  
  export default RunnerGame;
  