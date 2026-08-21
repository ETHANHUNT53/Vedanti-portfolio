import * as THREE from "three";
import { GLTFLoader, DRACOLoader } from "three-stdlib";
import {
  AVATAR_MODEL_URL,
  AVATAR_POSITION,
  AVATAR_SCALE,
} from "../../../data/avatar";

export interface CharacterRefs {
  character: THREE.Group;
  headGroup?: THREE.Group;
  leftPupil?: THREE.Mesh;
  rightPupil?: THREE.Mesh;
  leftEyelid?: THREE.Mesh;
  rightEyelid?: THREE.Mesh;
  leftBrow?: THREE.Mesh;
  rightBrow?: THREE.Mesh;
  torso?: THREE.Object3D;
}

const isMobile = () =>
  /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
  (window.innerWidth <= 1024 && "ontouchstart" in window);

const AVATAR_MODEL = AVATAR_MODEL_URL;

export function createAvatarCharacter(
  onProgress?: (pct: number) => void,
  onLoaded?: () => void
): CharacterRefs {
  const character = new THREE.Group();
  character.name = "portfolio-avatar";
  const mobile = isMobile();

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");

  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);

  loader.load(
    AVATAR_MODEL,
    (gltf) => {
      const model = gltf.scene;
      model.traverse((obj) => {
        if ((obj as THREE.Mesh).isMesh) {
          const mesh = obj as THREE.Mesh;
          if (!mobile) {
            mesh.castShadow = true;
            mesh.receiveShadow = true;
          }
        }
      });
      model.scale.setScalar(AVATAR_SCALE);
      model.position.set(...AVATAR_POSITION);
      character.add(model);
      dracoLoader.dispose();
      onLoaded?.();
    },
    (xhr) => {
      if (xhr.lengthComputable && onProgress) {
        onProgress(Math.round((xhr.loaded / xhr.total) * 100));
      }
    },
    (error) => {
      console.error("Failed to load avatar model", error);
      dracoLoader.dispose();
      onLoaded?.();
    }
  );

  const headGroup = character;
  const torso = character;

  return {
    character,
    headGroup,
    torso,
  };
}
