/**
 * Created by baird on 18/1/15.
 */

import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
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
    this.link();
  }

  init() {
    //创建一个场景
    const scene: any = new THREE.Scene(); //场景
    /**
     * 相机
     * 第一个属性是视野。FOV是在任何给定时刻在显示器上看到的场景的范围。该值以度为单位。
     * 第二个是宽高比。您几乎总是希望使用元素的宽度除以高度，否则将获得与在宽屏幕电视机上播放老电影时相同的结果 - 图像看起来很凹陷。
     * 近端剪切平面,远端剪切平面 （对象远离相机比的数值远或近于附近将不会被渲染）
     */
    const camera: any = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    /**
     * 渲染器
     */
    const renderer: any = new THREE.WebGLRenderer();
    /**
     * 渲染大小   canvas 大小
     * setSize（window.innerWidth / 2，window.innerHeight / 2，false） 第三参数是以较低分辨率渲染
     */
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2, true);
    /**
     * 插入canvas
     */
    document.getElementById('three').appendChild(renderer.domElement);
    /**
     * 多维数据集  顶点，填充面对象
     */
    const geometry: any = new THREE.BoxGeometry(1, 1, 1);
    /**
     * 给对象添加颜色
     */
    const material: any = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    /**
     * 需要的第三件事是一个Mesh。网格是一个对象，它需要一个几何体，并将一个材质应用到它，然后我们可以将其插入到我们的场景中，并自由移动。
     */
    const cube: any = new THREE.Mesh(geometry, material);
    /**
     * 把网格对象添加入场景
     */
    scene.add(cube);

    camera.position.z = 5;
    /**
     * 动画循环
     */
    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }
  //绘制图线
  link() {
    /**
     * 场景
     */
    let renderer: any = new THREE.WebGLRenderer();

    /**
     * 创建相机
     * 近端剪切平面,远端剪切平面 （对象远离相机比的数值远或近于附近将不会被渲染）
     */
    let camera: any = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    /**
   * 网格对象
   */
    let scene: any = new THREE.Scene();
    /**
   * 线条颜色
   */
    let material: any = new THREE.LineBasicMaterial({ color: 0x0000ff });
    /**
     * 创建顶点
     */
    let geometry: any = new THREE.Geometry();
    /**
    * 渲染大小   canvas 大小
    * setSize（window.innerWidth / 2，window.innerHeight / ) 第三参数是以较低分辨率渲染
    */
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    /**
     * 插入canvas
     */
    document.getElementById('three').appendChild(renderer.domElement);
    /**
     * X,Y,Z线
     */
    camera.position.set(0, 0, 100);
    /**
     * 创建3d
     */
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    /**
     * 画一个箭头 x,y,z
     */
    geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
    geometry.vertices.push(new THREE.Vector3(0, 10, 0));
    geometry.vertices.push(new THREE.Vector3(10, 0, 0));
    /**
     * 创建线条
     */
    let line:any = new THREE.Line(geometry, material);
    scene.add(line);
    // renderer.render(scene, camera); //添加网格和相机
    
    /**
     * 动画循环
     */
    const animate = function () {
      requestAnimationFrame(animate);

      line.rotation.x += 0.01;
      line.rotation.y += 0.01;
      line.rotation.z += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }
}
