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

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.update();

// const controls = new PointerLockControls(camera, renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.75); // White light with intensity
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0x00ff00, 1); // White directional light
directionalLight.position.set(1, 1, 3); // Set the direction of the light

directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 100;

scene.add(directionalLight);

const anotherlight = new THREE.DirectionalLight(0xffffff, 5); // White directional light
anotherlight.position.set(1, 1, 1); // Set the direction of the light

scene.add(anotherlight)

const loader = new GLTFLoader();

let model

loader.load( 'treasure_chest.glb', function ( gltf ) {

	model = gltf

	gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.castShadow = true;
        }
    });

	

	scene.add( gltf.scene );

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