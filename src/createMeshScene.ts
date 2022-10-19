import { Mesh } from "babylonjs";
import { scene } from "./scene";

export function createMeshScene(meshes: any[]): void {
  meshes.forEach((mesh) => {
    Mesh.Parse(mesh, scene, mesh.name);
  });
}

//TODO - add physics, make reusable
