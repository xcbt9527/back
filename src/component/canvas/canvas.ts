/**
 * Created by baird on 18/1/15.
 */
/**
 * Created by momo on 2018/1/4.
 */
/**
 * Created by momo on 2017/11/13.
 */

import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import htmltepl from "./canvas.html";
@Component({
  template: htmltepl,
  name: 'Mcanvas',
  components: {}
})

export default class updatets extends Vue {

  docWidth: number = 0;    //画布宽
  docHeight: number = 0;      //画布高
  context: any = null;  //canvasDomd的执行上下文
  circleArr: Array<any> = [];      //圆点数组
  timer: any = null;    //定时器对象
  @Prop({ default: 500 }) width: number;   //线颜色
  @Prop({ default: 500 }) height: number;   //星星颜色
  @Prop({ default: 25 }) point: Number; //生成的星星（点）的个数
  @Prop({ default: 'rgba(45,140,210,0.2)' }) lineColor: string;   //线颜色
  @Prop({ default: 'rgba(45,140,210,0.1)' }) roundColor: string;   //星星颜色
  mounted() {
    this.init();
    // 初始化
    this.createCircleArr()       // 设置星星数组
    this.draw() // 首屏绘制
    this.cycleDraw() // 循环绘制
  }

  beforeDestory() {
    // 记得摧毁定时器
    let vm = this;
    clearInterval(vm.timer);
  }

  init() {
    const canvasDom: any = this.$refs.canvas;

    // 取画布的高宽来设置显示分辨率
    this.docWidth = canvasDom.offsetWidth
    this.docHeight = canvasDom.offsetHeight

    // 设置画布分辨率
    canvasDom.width = canvasDom.offsetWidth
    canvasDom.height = canvasDom.offsetHeight

    // 初始化canvas上下文
    this.context = canvasDom.getContext('2d')

    // 设置线条和星星颜色
    this.context.strokeStyle = this.lineColor;
    this.context.lineWidth = 1;
    this.context.fillStyle = this.roundColor;
  }

  drawImg(obj) {
    this.context.drawImage(obj, 0, 0);
  }

  /**
   * 生成min和max之间随机数
   */
  rangeRadom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  drawStar(context, r, R, width, height) {
    context.beginPath();
    let opacity = Math.random();
    context.starStyle = `rgba(255,255,255,${opacity})`;
  }
  /**
   * 绘制原点
   */
  drawCircle(context, x, y, r, moveX, moveY) {
    let circle = {
      x,
      y,
      r,
      moveX,
      moveY,
    }
    context.beginPath()
    context.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI)
    context.closePath()
    context.fill()
    return circle
  }

  /**
   * 绘制线条
   */
  drawLine(context, beginX, beginY, closeX, closeY, opacity) {
    context.beginPath()
    context.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
    context.moveTo(beginX, beginY)
    context.lineTo(closeX, closeY)
    context.closePath()
    context.stroke()
  }

  /**
   * 生成圆点数组
   */
  createCircleArr() {
    for (let i = 0; i < this.point; i++) {
      this.circleArr.push(this.drawCircle(
        this.context,
        this.rangeRadom(this.docWidth, 0),
        this.rangeRadom(this.docHeight, 0),
        this.rangeRadom(15, 2),
        this.rangeRadom(10, -10) / 40,
        this.rangeRadom(10, -10) / 40
      ))
    }
  }

  /**
   * 每一帧绘制
   */
  draw() {
    const circleArr = this.circleArr
    this.context.clearRect(0, 0, this.docWidth, this.docHeight)
    // 循环绘制点
    for (let i = 0; i < this.point; i++) {
      this.drawCircle(this.context, circleArr[i].x, circleArr[i].y, circleArr[i].r, 0, 0);
    }
    // 循环绘制线
    for (let i = 0; i < this.point; i++) {
      for (let j = 0; j < this.point; j++) {
        if (i + j < this.point) {
          let A = Math.abs(circleArr[i + j].x - circleArr[i].x)
          let B = Math.abs(circleArr[i + j].y - circleArr[i].y)
          let lineLength = Math.sqrt(A * A + B * B)
          let C = 1 / lineLength * 7 - 0.009
          let lineOpacity = C > 0.3 ? 0.1 : C;
          if (lineOpacity > 0) {
            this.drawLine(
              this.context,
              circleArr[i].x,
              circleArr[i].y,
              circleArr[i + j].x,
              circleArr[i + j].y,
              lineOpacity,
            )
          }
        }
      }
    }
  }

  /**
   * 循环绘制
   */
  cycleDraw() {
    this.timer = setInterval(() => {
      for (let i = 0; i < this.point; i++) {
        let cir = this.circleArr[i]
        cir.x += cir.moveX
        cir.y += cir.moveY
        if (cir.x > this.docWidth) {
          cir.x = 0
        } else if (cir.x < 0) {
          cir.x = this.docWidth
        }
        if (cir.y > this.docHeight) {
          cir.y = 0
        } else if (cir.y < 0) {
          cir.y = this.docHeight
        }
      }
      this.draw()
    }, 10)
  }
}
