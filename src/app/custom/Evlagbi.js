export default class Evlagbi {
  constructor() {
    this._container = document.getElementById("container");
    this._canvas = document.createElement("canvas");
    this._canvas.height = 600;
    this._canvas.width = 600;
    container.appendChild(this._canvas);

    this._ctx = this._canvas.getContext("2d");
  }

  async drawChar() {
    // let ctx = this._canvas.getContext("2d");
    let url = "./src/assets/avatar.png";
    let img = new Image();
    await new Promise((r) => (img.onload = r), (img.src = url));
    ctx.drawImage(img, 0, 0);
  }
}
