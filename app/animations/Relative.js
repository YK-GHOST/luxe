import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default class Relative {
  constructor() {
    this.createScene();
    this.createCamera();
    this.createRenderer();

    this.scroll = {
      x: 0,
      y: 0,
    };

    this.mouseDown = false;
  }

  // createScene() {
  //   this.scene = new THREE.Scene();
  // }
  // createCamera() {
  //   this.camera = new THREE.PerspectiveCamera(
  //     104,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );

  //   this.camera.position.z = 5;
  // }

  // createRenderer() {
  //   this.renderer = new THREE.WebGLRenderer();
  //   this.renderer.setSize(window.innerWidth, window.innerHeight);
  //   document.body.appendChild(this.renderer.domElement);

  //   this.createMesh();
  // }

  // createMesh() {
  //   this.geometry = new THREE.PlaneGeometry(2, 2);
  //   this.texture = new THREE.TextureLoader().load(
  //     'https://images.unsplash.com/photo-1690282419530-f908158270da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80'
  //   );

  //   this.material = new THREE.MeshBasicMaterial({ map: this.texture });

  //   this.mesh = new THREE.Mesh(this.geometry, this.material);
  //   this.mesh1 = new THREE.Mesh(this.geometry, this.material);
  //   this.scene.add(this.mesh);

  //   this.createControls();
  // }

  // createControls() {
  //   this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  //   this.controls.enablePan = false;
  //   this.controls.enableZoom = false;
  // }

  // update() {
  //   this.controls.update();

  //   this.renderer.render(this.scene, this.camera);
  // }
}

//let TEXTURE = new TextureLoader().load('supaAmazingImage.jpg');
//let mesh = new Mesh(
// 	new PlaneBufferGeometry(),
// 	new MeshBasicMaterial({map: TEXTURE})
// )
