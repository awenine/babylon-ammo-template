import { engine, scene } from "./src/scene"
import "regenerator-runtime/runtime"
import Ammo from "ammojs-typed"
import { AmmoJSPlugin, Vector3 } from "babylonjs"
import { createGround } from "./src/ground"
import { createCube } from "./src/cube"

async function main(): Promise<void> {
  const ammo = await Ammo()
  const physics = new AmmoJSPlugin(true, ammo)

  scene.enablePhysics(new Vector3(0, -9.81, 0), physics)
  
  createGround()
  const cube = createCube()

  // testing how to apply a force to an object
  setInterval(() => {
    cube.physicsImpostor?.applyImpulse(cube.up.scale(2), Vector3.Zero())
  }, 1400)
  

  engine.runRenderLoop(() => scene.render())
}

main()