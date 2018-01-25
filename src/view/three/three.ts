/**
 * Created by baird on 18/1/15.
 */

import Vue from 'vue';
import {Component, Watch, Prop} from 'vue-property-decorator';
import htmltepl from "./three.html";
import * as THREE from "three";
@Component({
  template: htmltepl,
  name: 'three',
  components: {}
})

export default class threeclass extends Vue {

  mounted() {
    this.init();
  }

  init() {
    const scene: any = new THREE.Scene();
    const camera: any = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const canvasDom: any = this.$refs.canvas;
    const renderer: any = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('three').appendChild(renderer.domElement);

    const geometry: any = new THREE.BoxGeometry(1, 1, 1);
    const material: any = new THREE.MeshBasicMaterial({color: 0x00ff00});
    material.map()
    const cube: any = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.1;
      cube.rotation.y += 0.1;

      renderer.render(scene, camera);
    };

    animate();
  }
}
