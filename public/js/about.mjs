// importing in three js an helpers
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

// ================== basic setup ==================

// selecting a dom element for canvas
const canvas = document.getElementById('scene-canvas');

// creating a scene
const scene = new THREE.Scene();

// setting up a camera (fov, aspect ratio, near(object closer than this will not be rendered), far(how far can the camera see))
const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 2000);

// setting up the renderer to use canvas element, alpha true means setting up the pixels in model to have transparent background
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true }); 

// setting up the size equal to canvas height and width
renderer.setSize(canvas.clientWidth, canvas.clientHeight);

// setting color of the renderer's background to transparent
renderer.setClearColor(0x000000, 0);




// ================== setting the light ==================

// setting up the ambientlight (brightening object) (color, intensity)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
scene.add(ambientLight);

// setting up the directional light (color, intensity)
const directionalLight = new THREE.DirectionalLight(0xffb380, 3); // White directional light
directionalLight.position.set(1, 1, 1); // Set the direction of the light
scene.add(directionalLight);



// ================== importing a 3d model ==================

const loader = new GLTFLoader();

let jungleSetting

// imports (file path, callback)
loader.load( 'jungle_environment.glb', function ( gltf ) {

	// setting the model to the variable
	jungleSetting = gltf

	// adding it to our scene
	scene.add( gltf.scene );

	// positioning the object
	jungleSetting.scene.position.copy(camera.position);
	jungleSetting.scene.position.y -= 500
	jungleSetting.scene.position.x += 460
	jungleSetting.scene.position.z -= 200
	jungleSetting.scene.rotation.y = Math.PI / -4;
		
} );

// setting camera position
camera.position.z = 20
camera.position.y = 5



// ============================== setting controls ==============================

// adding controls to camera (moving camera with mouse)
const controls = new PointerLockControls(camera, renderer.domElement)
let firstKey = true

canvas.addEventListener('click', function(e){
	// without this event listener, you can't let your user move around the camera
	controls.lock()

	// zoom into the door when the user presses any key
	document.addEventListener('keydown', function(e){
	
		// only take them to the door the first time they press on a key
		if(firstKey){
			firstKey = false

			// setting time interval
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
					// TODO: Redirect the user to seperate page with treasure
				}
			}, 10);
		}
	})
	
})

function animate() {
	
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();