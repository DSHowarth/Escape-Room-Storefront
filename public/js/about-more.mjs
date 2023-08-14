// importing in three js an helpers
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// select a dom element
const canvas = document.getElementById('more-canvas')

// create a scene
const scene = new THREE.Scene()

// set up a camera
const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth/canvas.clientHeight, 0.1, 2000)
camera.position.z = 35

// setting up a renderer
const renderer = new THREE.WebGL1Renderer({canvas: canvas, alpha: true})

renderer.setSize(canvas.clientWidth, canvas.clientHeight)

renderer.setClearColor(0x000000, 0)

// // setting light
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.75)
// scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
directionalLight.position.set(1, 1, 1)
scene.add(directionalLight)

// setting controls
const control = new OrbitControls(camera, renderer.domElement)
control.update()

// importing a 3d model

const loader = new GLTFLoader();

let chest

loader.load( 'treasure_chest.glb', function ( gltf ) {

	chest = gltf

	scene.add( gltf.scene );

	const pointLight = new THREE.PointLight(0x00ff00, 70, 100); 
    pointLight.position.set(1, 10, 1);
    scene.add(pointLight);
	
	chest.scene.rotation.x = Math.PI / 10;
} );

function animate() {
	// if(chest){
	// 		chest.scene.rotation.y += 0.001
	// 	}
	
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();
