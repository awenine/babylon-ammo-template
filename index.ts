import { engine, scene } from "./src/scene";
import "regenerator-runtime/runtime";
import Ammo from "ammojs-typed";
import {
  AmmoJSPlugin,
  PhysicsImpostor,
  StandardMaterial,
  Vector3,
} from "babylonjs";
import { createGround } from "./src/ground";
import { createCube } from "./src/cube";
import { createPhysicsMesh } from "./src/createPhysicsMesh";

async function main(): Promise<void> {
  const ammo = await Ammo();
  const physics = new AmmoJSPlugin(true, ammo);

  scene.enablePhysics(new Vector3(0, -9.81, 0), physics);

  createGround();
  const cube = createCube();

  for (let i = 0; i < 4; i++) {
    createPhysicsMesh(
      `cube-${i}`,
      createCube(),
      new StandardMaterial("material", scene),
      new Vector3(0 - i / 3, i, 0 + i / 4),
      PhysicsImpostor.BoxImpostor,
      { mass: 1, restitution: 0.3, friction: 2 }
    );
  }

  // testing how to apply a force to an object
  // setInterval(() => {
  //   cube.physicsImpostor?.applyImpulse(cube.up.scale(2), Vector3.Zero())
  // }, 1400)

  engine.runRenderLoop(() => scene.render());
}

main();
