import { Mesh, MeshBuilder, PhysicsImpostor, Vector3 } from "babylonjs";
import { scene } from "./gravityScene";

export function createCube(): Mesh {
  const size = 0.3;
  const cube = MeshBuilder.CreateBox(
    "cube",
    {
      size,
    },
    scene
  );

  cube.position = new Vector3(0, 1, 0);

  cube.physicsImpostor = new PhysicsImpostor(
    cube,
    PhysicsImpostor.BoxImpostor,
    {
      mass: 1,
      restitution: 0.9,
    },
    scene
  );

  return cube;
}
