import "regenerator-runtime/runtime";
import Ammo from "ammojs-typed";
import {
  AmmoJSPlugin,
  PhysicsImpostor,
  StandardMaterial,
  Scene,
  Vector3,
} from "babylonjs";
import { createCube } from "./src/scenes/gravity-test/cube";
import { createMeshScene } from "./src/scenes/gravity-test/createMeshScene";
import { GravitySceneMesh } from "./src/scenes/gravity-test/GravitySceneMesh";
import { gravityScene } from "./src/scenes/gravity-test/gravityScene";
import { engine } from "./src/engine";

async function main(): Promise<void> {
  const ammo = await Ammo();
  const physics = new AmmoJSPlugin(true, ammo);

  gravityScene.enablePhysics(new Vector3(0, -9.81, 0), physics);

  // createGround();

  //TODO move to scene file
  const cube = createCube();

  // for (let i = 0; i < 1; i++) {
  //   createPhysicsMesh(
  //     `cube-${i}`,
  //     createCube(),
  //     new StandardMaterial("material", scene),
  //     new Vector3(1, 1, 1),
  //     PhysicsImpostor.BoxImpostor,
  //     { mass: 1, restitution: 0.9 }
  //   );
  // }

  //TODO move to scene file
  createMeshScene(GravitySceneMesh);

  // testing how to apply a force to an object
  // setInterval(() => {
  //   cube.physicsImpostor?.applyImpulse(cube.up.scale(2), Vector3.Zero())
  // }, 1400)

  //* CHANGE SCENE HERE
  const displayScene: Scene = gravityScene;

  engine.runRenderLoop(() => displayScene.render());
}

main();
