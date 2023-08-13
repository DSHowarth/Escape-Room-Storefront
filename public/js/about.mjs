import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

const canvas = document.getElementById('scene-canvas');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 2000);

const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true }); // Use the canvas element
renderer.setSize(canvas.clientWidth, canvas.clientHeight);
renderer.setClearColor(0x000000, 0);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.update();

const controls = new PointerLockControls(camera, renderer.domElement)
const firstKey = true

canvas.addEventListener('click', function(e){
	controls.lock()
	document.addEventListener('keydown', function(e){
		if(firstKey){
			firstKey = false
			const interval = setInterval(() => {
				if(camera.position.z > -280){
					camera.position.z -= 1
				}else {
					if(camera.position.x > -200){
						camera.position.x -=1
					}else {
						camera.position.x -=1
						camera.position.z -=1
					}
					console.log(camera.position.z)
				}

				if(camera.position.z < -830){
					clearInterval(interval)
				}
			}, 10);
		}
	})
	
})

const ambientLight = new THREE.AmbientLight(0xffffff, 0.75); // White light with intensity
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 3); // White directional light
directionalLight.position.set(1, 1, 1); // Set the direction of the light


scene.add(directionalLight);

const loader = new GLTFLoader();

// let chest

// loader.load( 'treasure_chest.glb', function ( gltf ) {

// 	chest = gltf

// 	scene.add( gltf.scene );

// 	const pointLight = new THREE.PointLight(0x00ff00, 70, 100); 
//     pointLight.position.set(1, 10, 1); // Set light's position to match chest's position
//     scene.add(pointLight);
	
// } );

let jungleSetting

loader.load( 'jungle_environment.glb', function ( gltf ) {

	jungleSetting = gltf

	scene.add( gltf.scene );
	jungleSetting.scene.position.copy(camera.position);
	jungleSetting.scene.position.y -= 500
	jungleSetting.scene.position.x += 460
	jungleSetting.scene.position.z -= 200
	jungleSetting.scene.rotation.y = Math.PI / -4;
	
	
} );

camera.position.z = 20
camera.position.y = 5



function animate() {
	// if(chest){
	// 	chest.scene.rotation.y += 0.001
	// }
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();