import {
  Material,
  Mesh,
  MeshBuilder,
  PhysicsImpostor,
  PhysicsImpostorParameters,
  Vector3,
} from "babylonjs";
import { scene } from "./scene";

/*
Purpose
- create a mesh (passed in)
- apply a material to it (passed in)
- give it a name (work out naming conventions for scene objects)
- initialise physics imposter on it
- pass in physical options
- ...

*/

export function createPhysicsMesh(
  name: string,
  mesh: Mesh,
  material: Material,
  initialPosition: Vector3,
  collisionMeshType: number,
  physicalProperties: PhysicsImpostorParameters
): Mesh {
  mesh.name = name;
  mesh.material = material;
  mesh.position = initialPosition;
  mesh.physicsImpostor = new PhysicsImpostor(
    mesh,
    collisionMeshType,
    physicalProperties,
    scene
  );

  return mesh;
}
