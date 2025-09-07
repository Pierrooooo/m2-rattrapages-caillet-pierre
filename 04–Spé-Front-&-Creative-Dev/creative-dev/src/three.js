import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import wall_e from "/assets/wall_e.glb?url";

const width = window.innerWidth;
const height = window.innerHeight;

// Canvas
const canvas = document.getElementById("canvas");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(width, height);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0a0a);
const camera = new THREE.PerspectiveCamera(90, width / height, 0.1, 1000);
camera.position.set(8, 7, 10);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableRotate = false;
controls.enableZoom = false;
scene.add(new THREE.AmbientLight(0xffffff, 1));
let model;
new GLTFLoader().load(wall_e, (gltf) => {
  model = gltf.scene;
  model.scale.set(2, 2, 2);
  model.position.set(0, -5, 0);
  scene.add(model);
});
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Window Resize
window.addEventListener("resize", () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
});

// Animate
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
