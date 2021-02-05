import gsap from "gsap/all";

export default class Fire {
  constructor(container) {
    this._container = container;
    this._canvas = document.createElement("canvas");
    this._canvas.height = 339;
    this._canvas.width = 220;
    container.appendChild(this._canvas);
    this._ctx = this._canvas.getContext("2d");
    this._frames = [
      {
        frame: {
          x: 379,
          y: 391,
          w: 309,
          h: 202,
        },
        rotated: false,
        trimmed: true,
        spriteSourceSize: {
          x: 84,
          y: 17,
          w: 309,
          h: 202,
        },
        sourceSize: {
          w: 444,
          h: 239,
        },
      },
      {
        frame: {
          x: 690,
          y: 402,
          w: 306,
          h: 198,
        },
        rotated: false,
        trimmed: true,
        spriteSourceSize: {
          x: 94,
          y: 10,
          w: 306,
          h: 198,
        },
        sourceSize: {
          w: 444,
          h: 239,
        },
      },
      {
        frame: {
          x: 719,
          y: 200,
          w: 314,
          h: 200,
        },
        rotated: false,
        trimmed: true,
        spriteSourceSize: {
          x: 86,
          y: 16,
          w: 314,
          h: 200,
        },
        sourceSize: {
          w: 444,
          h: 239,
        },
      },
      {
        frame: {
          x: 692,
          y: 1,
          w: 342,
          h: 197,
        },
        rotated: false,
        trimmed: true,
        spriteSourceSize: {
          x: 51,
          y: 22,
          w: 342,
          h: 197,
        },
        sourceSize: {
          w: 444,
          h: 239,
        },
      },
      {
        frame: {
          x: 1685,
          y: 300,
          w: 287,
          h: 207,
        },
        rotated: true,
        trimmed: true,
        spriteSourceSize: {
          x: 113,
          y: 11,
          w: 287,
          h: 207,
        },
        sourceSize: {
          w: 444,
          h: 239,
        },
      },
      {
        frame: {
          x: 998,
          y: 408,
          w: 292,
          h: 195,
        },
        rotated: false,
        trimmed: true,
        spriteSourceSize: {
          x: 97,
          y: 20,
          w: 292,
          h: 195,
        },
        sourceSize: {
          w: 444,
          h: 239,
        },
      },
      {
        frame: {
          x: 1035,
          y: 205,
          w: 319,
          h: 201,
        },
        rotated: false,
        trimmed: true,
        spriteSourceSize: {
          x: 78,
          y: 16,
          w: 319,
          h: 201,
        },
        sourceSize: {
          w: 444,
          h: 239,
        },
      },
      {
        frame: {
          x: 1036,
          y: 1,
          w: 338,
          h: 202,
        },
        rotated: false,
        trimmed: true,
        spriteSourceSize: {
          x: 60,
          y: 18,
          w: 338,
          h: 202,
        },
        sourceSize: {
          w: 444,
          h: 239,
        },
      },
      {
        frame: {
          x: 1356,
          y: 401,
          w: 300,
          h: 197,
        },
        rotated: false,
        trimmed: true,
        spriteSourceSize: {
          x: 95,
          y: 22,
          w: 300,
          h: 197,
        },
        sourceSize: {
          w: 444,
          h: 239,
        },
      },
      {
        frame: {
          x: 1376,
          y: 188,
          w: 307,
          h: 211,
        },
        rotated: false,
        trimmed: true,
        spriteSourceSize: {
          x: 93,
          y: 8,
          w: 307,
          h: 211,
        },
        sourceSize: {
          w: 444,
          h: 239,
        },
      },
      {
        frame: {
          x: 1,
          y: 1,
          w: 344,
          h: 211,
        },
        rotated: false,
        trimmed: true,
        spriteSourceSize: {
          x: 52,
          y: 8,
          w: 344,
          h: 211,
        },
        sourceSize: {
          w: 444,
          h: 239,
        },
      },
      {
        frame: {
          x: 1,
          y: 214,
          w: 354,
          h: 186,
        },
        rotated: true,
        trimmed: true,
        spriteSourceSize: {
          x: 46,
          y: 23,
          w: 354,
          h: 186,
        },
        sourceSize: {
          w: 444,
          h: 239,
        },
      },
      {
        frame: {
          x: 1376,
          y: 1,
          w: 348,
          h: 185,
        },
        rotated: false,
        trimmed: true,
        spriteSourceSize: {
          x: 45,
          y: 26,
          w: 348,
          h: 185,
        },
        sourceSize: {
          w: 444,
          h: 239,
        },
      },
      {
        frame: {
          x: 347,
          y: 1,
          w: 343,
          h: 197,
        },
        rotated: false,
        trimmed: true,
        spriteSourceSize: {
          x: 48,
          y: 14,
          w: 343,
          h: 197,
        },
        sourceSize: {
          w: 444,
          h: 239,
        },
      },
      {
        frame: {
          x: 189,
          y: 214,
          w: 341,
          h: 188,
        },
        rotated: true,
        trimmed: true,
        spriteSourceSize: {
          x: 53,
          y: 28,
          w: 341,
          h: 188,
        },
        sourceSize: {
          w: 444,
          h: 239,
        },
      },
      {
        frame: {
          x: 379,
          y: 200,
          w: 338,
          h: 189,
        },
        rotated: false,
        trimmed: true,
        spriteSourceSize: {
          x: 51,
          y: 29,
          w: 338,
          h: 189,
        },
        sourceSize: {
          w: 444,
          h: 239,
        },
      },
      {
        frame: {
          x: 1726,
          y: 1,
          w: 297,
          h: 185,
        },
        rotated: true,
        trimmed: true,
        spriteSourceSize: {
          x: 101,
          y: 31,
          w: 297,
          h: 185,
        },
        sourceSize: {
          w: 444,
          h: 239,
        },
      },
    ];
    this.h = this._canvas.height;
    this.w = this._canvas.width;
    this._frames2 = [
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
        filter: "brightness(300%)",
        duration: 4,
        repeat: 1,
        yoyo: true,
      }
    );
  }

  // async start(i = 0) {
  //   let url = "./src/assets/fire.png";
  //   let img = new Image();
  //   img.src = url;
  //   await new Promise((r) => (img.onload = r));
  //   this._canvas.addEventListener("click", () => {
  //     this._brighter();
  //   });

  //   this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
  //   if (i > 16) i = 0;
  //   if (this._frames[i].rotated) {
  //     console.log("zavartqno");
  //     this._ctx.save();
  //     const rad = 135 * (Math.PI / 2);
  //     this._ctx.translate(444 / 2, 239 / 2);
  //     this._ctx.rotate(rad);
  //     this._ctx.beginPath();
  //     this._ctx.moveTo(0, 0);
  //     this._ctx.lineTo(444 / 2, 239 / 2);
  //     this._ctx.strokeStyle = "red";
  //     this._ctx.stroke();

  //     this._ctx.drawImage(
  //       img,
  //       this._frames[i].frame.x,
  //       this._frames[i].frame.y,
  //       this._frames[i].frame.w,
  //       this._frames[i].frame.h,
  //       this._frames[i].spriteSourceSize.x - 239,
  //       this._frames[i].spriteSourceSize.y - 100,
  //       this._frames[i].spriteSourceSize.w,
  //       this._frames[i].spriteSourceSize.h
  //     );
  //     this._ctx.restore();
  //   } else {
  //     this._ctx.drawImage(
  //       img,
  //       this._frames[i].frame.x,
  //       this._frames[i].frame.y,
  //       this._frames[i].frame.w,
  //       this._frames[i].frame.h,
  //       this._frames[i].spriteSourceSize.x,
  //       this._frames[i].spriteSourceSize.y,
  //       this._frames[i].spriteSourceSize.w,
  //       this._frames[i].spriteSourceSize.h
  //     );
  //   }

  //   requestAnimationFrame(() => this.start(i + 1));
  // }

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
      this._frames2[i].x,
      this._frames2[i].y,
      220,
      339,
      0,
      0,
      220,
      339
    );

    setTimeout(() => requestAnimationFrame(() => this.start(i + 1)), 1);
  }

  stop() {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._ctx = null;
  }
}
