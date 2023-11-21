import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';



var faced = document.querySelector(".face");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, faced.clientWidth / faced.clientHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( faced.clientWidth, faced.clientHeight );


// const light = new THREE.AmbientLight( 0x404040 , 5 ); // soft white light
// scene.add( light );

// light = new THREE.PointLight(0xff00ff);
// light.position.set(15, 15, 15);
// scene.add(light);

const light = new THREE.PointLight( 0xffffff, 1,150 );
light.position.set( 1, 20, 30 );
// light.castShadow = true; 
scene.add( light );

// var lightAmb = new THREE.AmbientLight(0x000000 , 5);
// scene.add(lightAmb);

var mouse = {
    x: 0,
    y: 0
  };
document.addEventListener('mousemove', onMouseMove, false);



function onMouseMove(event) {
  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  console.log(mouse.x, mouse.y);

  var vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
  vector.unproject(camera);
  var dir = vector.sub(camera.position).normalize();
  var distance = -camera.position.z / dir.z;
  var pos = camera.position.clone().add(dir.multiplyScalar(distance));
  //mouseMesh.position.copy(pos);

  light.position.copy(new THREE.Vector3(pos.x, pos.y, pos.z + 2));
};



function render() {

    renderer.render( scene, camera );
    console.log("render");

}

const loader = new GLTFLoader();
loader.load( 'face.glb', function ( gltf ) {
    gltf.scene.scale.set(0.5,0.5,0.5)
    scene.add( gltf.scene );
    scene.background = new THREE.Color("rgb(34, 34, 42)");

    // render();
    faced.appendChild( renderer.domElement );
    const controls = new OrbitControls( camera, renderer.domElement );


    controls.minDistance = 2;
    controls.maxDistance = 10;
    controls.target.set( 0, 0, - 0.2 );
    controls.update();

}
, undefined, function ( error ) {

	console.error( error );

} );

function animate() {
    requestAnimationFrame(animate);
    render();
  }

  animate();




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

