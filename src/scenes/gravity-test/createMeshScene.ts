import { Mesh } from "babylonjs";
import { gravityScene } from "./gravityScene";

export function createMeshScene(meshes: any[]): void {
  meshes.forEach((mesh) => {
    Mesh.Parse(mesh, gravityScene, mesh.name);
  });
}

//TODO - add physics, make reusable
