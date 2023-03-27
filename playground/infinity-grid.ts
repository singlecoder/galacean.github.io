/**
 * @title Infinity Grid
 * @category Toolkit
 */

import { Camera, GLTFResource, Vector3, WebGLEngine } from "oasis-engine";
import { GridControl, OrbitControl } from "oasis-engine-toolkit";

WebGLEngine.create({ canvas: "canvas" }).then((engine) => {
  engine.canvas.resizeByClientSize();
  engine.sceneManager.activeScene.ambientLight.diffuseSolidColor.set(
    1,
    1,
    1,
    1
  );

  const rootEntity = engine.sceneManager.activeScene.createRootEntity();

  const cameraEntity = rootEntity.createChild("camera");
  const camera = cameraEntity.addComponent(Camera);
  cameraEntity.transform.setPosition(6, 6, 6);
  cameraEntity.transform.lookAt(new Vector3());
  cameraEntity.addComponent(OrbitControl);

  const grid = rootEntity.addComponent(GridControl);
  grid.camera = camera;

  engine.resourceManager
    .load<GLTFResource>(
      "https://gw.alipayobjects.com/os/OasisHub/267000040/9994/%25E5%25BD%2592%25E6%25A1%25A3.gltf"
    )
    .then((gltf) => {
      rootEntity.addChild(gltf.defaultSceneRoot);
    });

  engine.run();
});
