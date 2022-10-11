import { PointerLockControls, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import shotSound from "../assets/sound/shot.mp3";
import { useEffect, useRef } from "react";
import { useStore } from "../hooks/useStore";

const FPV = () => {
  const lock = useRef<boolean>(false);
  const { camera, gl } = useThree();

  const listener = new THREE.AudioListener();
  const [setTotal] = useStore((state: any) => [state.setTotal]);
  camera.add(listener);

  useEffect(() => {
    const handleShot = () => {
      if (lock.current) {
        // create a global audio source
        setTotal();
        const sound = new THREE.Audio(listener);

        // load a sound and set it as the Audio object's buffer
        const audioLoader = new THREE.AudioLoader();
        audioLoader.load(shotSound, function (buffer) {
          sound.setBuffer(buffer);
          sound.setVolume(0.5);
          sound.play();
        });
      }
    };

    document.addEventListener("click", handleShot);

    return () => {
      document.removeEventListener("click", handleShot);
    };
  }, [lock.current]);

  // return <OrbitControls args={[camera, gl.domElement]} />;
  return (
    <PointerLockControls
      args={[camera, gl.domElement]}
      onLock={() => {
        lock.current = true;
      }}
      onUnlock={() => {
        lock.current = false;
      }}
    />
  );
};

export default FPV;
