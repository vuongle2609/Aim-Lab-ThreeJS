import { mappingObject } from "./images";
import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

const wallTexture = (xReapeat: number, yReapeat: number) => {
  const objectTexture = new TextureLoader().load(mappingObject);
  objectTexture.magFilter = NearestFilter;
  objectTexture.wrapS = RepeatWrapping;
  objectTexture.wrapT = RepeatWrapping;
  objectTexture.repeat.set(xReapeat, yReapeat);

  return objectTexture;
};

export { wallTexture };
