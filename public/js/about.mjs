import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
const canvas = document.getElementById('scene-canvas');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true }); // Use the canvas element
renderer.setSize(canvas.clientWidth, canvas.clientHeight);
renderer.setClearColor(0x000000, 0);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.update();

// const controls = new PointerLockControls(camera, renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.75); // White light with intensity
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // White directional light
directionalLight.position.set(1, 1, 1); // Set the direction of the light


scene.add(directionalLight);

const loader = new GLTFLoader();

let model

loader.load( 'treasure_chest.glb', function ( gltf ) {

	model = gltf

	scene.add( gltf.scene );

	const pointLight = new THREE.PointLight(0x00ff00, 50, 100); 
    pointLight.position.set(1, 8, 1); // Set light's position to match chest's position
    scene.add(pointLight);

} );

camera.position.z = 20
camera.position.y = 5



function animate() {
	if(model){
		model.scene.rotation.y += 0.001
	}
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();