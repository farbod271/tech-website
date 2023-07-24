import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';



var faced = document.querySelector(".face");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, faced.clientWidth / faced.clientHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( faced.clientWidth, faced.clientHeight );
const light = new THREE.AmbientLight( 0x404040 , 5 ); // soft white light
scene.add( light );
function render() {

    renderer.render( scene, camera );

}

const loader = new GLTFLoader();
loader.load( 'face.glb', function ( gltf ) {
    gltf.scene.scale.set(0.5,0.5,0.5)
    scene.add( gltf.scene );
    scene.background = new THREE.Color(0x161616);

    render();
    faced.appendChild( renderer.domElement );
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.addEventListener( 'change', render ); // use if there is no animation loop
    controls.minDistance = 2;
    controls.maxDistance = 10;
    controls.target.set( 0, 0, - 0.2 );
    controls.update();

}
, undefined, function ( error ) {

	console.error( error );

} );




// faced.appendChild( renderer.domElement );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// const controls = new OrbitControls( camera, loader.domElement );
// camera.position.z = 5;
// controls.update();


// function animate() {
//     requestAnimationFrame( animate );

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

//     controls.update();




// }

// animate();

