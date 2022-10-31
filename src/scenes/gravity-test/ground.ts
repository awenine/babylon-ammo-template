import { Mesh, MeshBuilder, PhysicsImpostor } from "babylonjs";
import { gravityScene } from "./gravityScene";

export function createGround(): Mesh {
  const size = 4;
  const ground = MeshBuilder.CreateGround(
    "ground",
    {
      width: size,
      height: size,
    },
    gravityScene
  );

  ground.physicsImpostor = new PhysicsImpostor(
    ground,
    PhysicsImpostor.BoxImpostor,
    {
      mass: 0,
      restitution: 0.9,
    },
    gravityScene
  );

  return ground;
}
