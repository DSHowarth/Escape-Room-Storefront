// importing in three js an helpers
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


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

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9)
directionalLight.position.set(1, 1, 1)
scene.add(directionalLight)

// importing a 3d model

const loader = new GLTFLoader();

let chest

const pointLight = new THREE.PointLight(0x00ff00, 50, 100); 

loader.load( 'treasure_chest.glb', function ( gltf ) {

	chest = gltf

	scene.add( gltf.scene );

	// places point light on the chest
    pointLight.position.set(1, 1, 1);
    scene.add(pointLight);
	
	chest.scene.rotation.x = Math.PI / 10;
} );

function animate(time) {

	if(chest){
		// then applies animation
		if(chest.scene.rotation.y > -0.864){
			chest.scene.rotation.y -= 0.005
			pointLight.position.y += 0.05
		}

		if(camera.position.z > 22.45){
			camera.position.z -= 0.05
		}

		if(camera.position.x > -12.55){
			camera.position.x -= 0.05
		}else{
			// finished animating camera => starts rendering 
			
		}

	}
	
	renderer.render( scene, camera );
}

function constructHtml(){
	
}

renderer.setAnimationLoop(animate)