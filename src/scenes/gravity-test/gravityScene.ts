import {
  Vector3,
  Color4,
  HemisphericLight,
  Scene,
  ArcRotateCamera,
} from "babylonjs";
import { canvas } from "../../domItems";
import { engine } from "../../engine";

export const gravityScene = makeGravityScene();

function makeGravityScene(): Scene {
  const scene = new Scene(engine);
  createCamera(scene);
  createLight(scene);
  createBackground(scene);
  return scene;
}

//TODO extract to util
function createCamera(scene: Scene): void {
  //TODO - look at different cameras and how to control them
  const alpha = Math.PI / 4;
  const beta = Math.PI / 3;
  const radius = 8;
  const target = new Vector3(0, 0, 0);

  new ArcRotateCamera(
    "Camera",
    alpha,
    beta,
    radius,
    target,
    scene
  ).attachControl(canvas, true);
}

//TODO extract to util
function createLight(scene: Scene): void {
  new HemisphericLight("light", new Vector3(1, 1, 0), scene);
}

//TODO extract to util
function createBackground(scene: Scene): void {
  scene.clearColor = Color4.FromHexString("#23147a");
}
