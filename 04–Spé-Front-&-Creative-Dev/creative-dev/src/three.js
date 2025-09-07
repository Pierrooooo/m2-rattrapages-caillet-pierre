import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import wall_e from "/assets/wall_e.glb?url";

function initWallE() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Regular Canvas
  const canvasRegular = document.getElementById("canvas-regular");
  const rendererRegular = new THREE.WebGLRenderer({ canvas: canvasRegular, antialias: true });
  rendererRegular.setSize(width, height);

  const sceneRegular = new THREE.Scene();
  sceneRegular.background = new THREE.Color(0xffffffde);

  const camera = new THREE.PerspectiveCamera(90, width / height, 0.1, 1000);
  camera.position.set(8, 7, 10);

  const controls = new OrbitControls(camera, rendererRegular.domElement);
  controls.enableRotate = false;
  controls.enableZoom = false;

  sceneRegular.add(new THREE.AmbientLight(0xffffff, 1));

  let modelRegular;
  new GLTFLoader().load(wall_e, (gltf) => {
    modelRegular = gltf.scene;
    modelRegular.scale.set(2, 2, 2);
    modelRegular.position.set(0, -5, 0);
    sceneRegular.add(modelRegular);
  });

  // Wireframe Canvas
  const canvasWire = document.getElementById("canvas-wireframe");
  const rendererWire = new THREE.WebGLRenderer({ canvas: canvasWire, antialias: true, alpha: true });
  rendererWire.setSize(width, height);

  const sceneWire = new THREE.Scene();
  sceneWire.background = new THREE.Color(0x0a0a0a);
  sceneWire.add(new THREE.AmbientLight(0xffffff, 1));

  let modelWire;
  new GLTFLoader().load(wall_e, (gltf) => {
    modelWire = gltf.scene;
    modelWire.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          wireframe: true,
        });
      }
    });
    modelWire.scale.set(2, 2, 2);
    modelWire.position.set(0, -5, 0);
    sceneWire.add(modelWire);
  });

  // Resize
  window.addEventListener("resize", () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    rendererRegular.setSize(w, h);
    rendererWire.setSize(w, h);
  });

  let lastMouseMove = Date.now();
  let clipRatio = 0;
  let direction = 1;

  window.addEventListener("mousemove", (e) => {
    lastMouseMove = Date.now();
    clipRatio = e.clientX / window.innerWidth;
    updateClipPath(clipRatio);
  });

  function updateClipPath(ratio) {
    const percent = ratio * 100;
    canvasWire.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
  }

  // Animation
  function animate() {
    requestAnimationFrame(animate);
    controls.update();

    // Infinite Rotation
    if (modelRegular) modelRegular.rotation.y += 0.001;
    if (modelWire) modelWire.rotation.y += 0.001;

    const now = Date.now();
    if (now - lastMouseMove > 1000) {
      clipRatio += direction * (1 / 480); // 4s in 30fps
      if (clipRatio >= 1) {
        clipRatio = 1;
        direction = -1; // Reverse direction
      } else if (clipRatio <= 0) {
        clipRatio = 0;
        direction = 1; // Reverse direction again
      }
      updateClipPath(clipRatio);
    }

    rendererRegular.render(sceneRegular, camera);
    rendererWire.render(sceneWire, camera);
  }

  animate();
}

initWallE();
