import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';



class App extends Component {
    componentDidMount() {


        const scene = new THREE.Scene();
        scene.background = new THREE.Color( "white" );        
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        camera.position.z = 10;
        camera.position.y = 5 ;
        camera.position.x = -5 ; 

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.shadowMap.enabled = true;
        (document.getElementById("threediv") as any).appendChild( renderer.domElement );


        const planeGeometry = new THREE.PlaneGeometry(100, 100, 8, 8);
        const planeMaterial = new THREE.MeshPhongMaterial( {
            color: 0xcccccc,
            opacity: 0.3,
            transparent: true,            
        } );
        const plane = new THREE.Mesh( planeGeometry, planeMaterial );
        plane.rotateX( -Math.PI / 2);
        plane.position.y = -3;
        plane.receiveShadow = true;
        scene.add( plane );

        const size = 100;
        const divisions = 100;
        const gridHelper = new THREE.GridHelper( size, divisions );
        gridHelper.position.y = -3 ;
        gridHelper.receiveShadow = true ; 
        scene.add( gridHelper );
        

        const geometry = new THREE.BoxGeometry(2, 2, 2);
        const material = new THREE.MeshPhongMaterial( { color:  0x68d0fc  } );
        const cube = new THREE.Mesh( geometry, material );
        cube.castShadow = true; //default is false
        cube.position.y = 2 ; 
        scene.add( cube );



        const dirLight1 = new THREE.DirectionalLight( 0xffffff , 0.5);
        dirLight1.position.set( 0, 4, 0 );
        dirLight1.castShadow = true;
        scene.add( dirLight1 );


	const ambientLight = new THREE.AmbientLight( 0x444444 , 1 );
	scene.add( ambientLight );        


        const controls = new OrbitControls( camera, renderer.domElement );

        const animate = function () {
            requestAnimationFrame( animate );

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.007;

            plane.rotation.z += 0.001 ;
            gridHelper.rotation.y += 0.001 ;             

            renderer.render( scene, camera );
        };

        animate();


    }
    render() {
        return (
            <div id="threediv" />
        )
    }
}

export default App ; 
