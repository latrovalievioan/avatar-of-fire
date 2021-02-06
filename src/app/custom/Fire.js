import gsap from "gsap/all";

export default class Fire {
  constructor() {
    this.container = document.createElement("div");
    this._canvas = document.createElement("canvas");
    this._canvas.height = 339;
    this._canvas.width = 220;
    this.container.appendChild(this._canvas);
    this._ctx = this._canvas.getContext("2d");
    this._frames = [
      { y: 160, x: 50 },
      { y: 545, x: 47 },
      { y: 927, x: 61 },
      { y: 1350, x: 65 },
      { y: 1773, x: 67 },
      { y: 2200, x: 57 },
      { y: 2640, x: 67 },
      { y: 3063, x: 65 },
      { y: 3465, x: 60 },
      { y: 3910, x: 65 },
      { y: 4323, x: 67 },
      { y: 4705, x: 64 },
      { y: 5137, x: 69 },
      { y: 5583, x: 57 },
      { y: 6018, x: 63 },
      { y: 6464, x: 58 },
      { y: 6873, x: 59 },
    ];
  }

  _brighter() {
    gsap.fromTo(
      this._ctx,
      {
        filter: "brightness(100%)",
        duration: 4,
      },
      {
        filter: "brightness(170%)",
        duration: 3,
        repeat: 1,
        yoyo: true,
      }
    );
  }

  async start(i = 0) {
    if (i > 16) i = 0;
    let url = "./src/assets/pewpew.png";
    let img = new Image();
    img.src = url;
    await new Promise((r) => (img.onload = r));
    this._canvas.addEventListener("click", () => {
      this._brighter();
    });

    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

    this._ctx.drawImage(
      img,
      this._frames[i].x,
      this._frames[i].y,
      220,
      339,
      0,
      0,
      220,
      339
    );

    requestAnimationFrame(() => this.start(i + 1));
  }

  stop() {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._ctx = null;
  }
}
