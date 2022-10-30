import { PointerLockControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import shotSound from "../assets/sound/shot.mp3";
import { useStore } from "../hooks/useStore";

const listener = new THREE.AudioListener();

const audioLoader = new THREE.AudioLoader();

let bufferSound: AudioBuffer | null = null;
audioLoader.load(shotSound, (buffer) => {
  bufferSound = buffer;
});

const FPV = () => {
  const lock = useRef<boolean>(false);
  const { camera, gl, controls } = useThree();

  const [setTotal, countDown] = useStore((state: any) => [
    state.setTotal,
    state.countDown,
  ]);
  camera.add(listener);

  useEffect(() => {
    if (!countDown) {
      //@ts-ignore
      controls?.lock();
    }
  }, [countDown, controls]);

  useEffect(() => {
    const handleShot = () => {
      if (lock.current && bufferSound) {
        setTotal();
        const soundGun = new THREE.Audio(listener);
        soundGun.setBuffer(bufferSound);
        soundGun.setVolume(0.5);
        soundGun.play();
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
      makeDefault
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
