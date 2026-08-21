/**
 * 3D avatar settings.
 *
 * To use a female avatar:
 * 1. Create one at https://readyplayer.me (choose female body/style).
 * 2. Download as .glb (optional: add ?meshLod=0 for higher quality).
 * 3. Replace public/models/avatar.glb with your file (keep the same name).
 * 4. Tune scale and position below if framing looks off, then refresh.
 */
export const AVATAR_MODEL_URL = "/models/avatar.glb";

/** Uniform scale applied after the model loads. */
export const AVATAR_SCALE = 1.6;

/** Position offset: x, y, z */
export const AVATAR_POSITION: [number, number, number] = [0, -0.9, 0];
