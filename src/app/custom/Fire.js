import gsap from "gsap/all";

/**
 * Creates a new animated fire.
 * @class
 */
export default class Fire {
  /**
   * Loads the fire sprite sheet image and caches it.
   * @private
   * @static
   */
  _loadFireSpritesheet() {
    const img = new Image();
    img.src = this._imageUrl;
    Fire.image = img;
    return new Promise((resolve) => (img.onload = resolve));
  }

  static set image(element) {
    this._image = element;
  }

  static get image() {
    return this._image;
  }

  /**
   * Initializes the animation canvas.
   * @constructor
   */
  constructor(imageUrl) {
    this.container = document.createElement("div");
    this._canvas = document.createElement("canvas");
    this._canvas.height = 339;
    this._canvas.width = 220;
    this.container.appendChild(this._canvas);
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

    this._imageUrl = imageUrl;
    this._image = null;
    this._onCanvasClick = this._animateFlare.bind(this);
  }

  /**
   * Returns whether the animation is running.
   * @private
   */
  get _isAnimationRunning() {
    return this._ctx !== null;
  }

  /**
   * Animates the fire brighter, then animates the fire brightness back to it's initial state.
   * @method
   * @private
   */
  _animateFlare() {
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
  /**
   * Draws fire frame by frame index, then schedules the next frame.
   * @method
   * @private
   * @param {number} frameIndex
   */
  _drawFrame(frameIndex) {
    if (!this._isAnimationRunning) return;
    if (frameIndex > 16) frameIndex = 0;

    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

    this._ctx.drawImage(
      Fire._image,
      this._frames[frameIndex].x,
      this._frames[frameIndex].y,
      220,
      339,
      0,
      0,
      220,
      339
    );
    requestAnimationFrame(() => this._drawFrame(frameIndex + 1));
  }
  /**
   * Starts the fire animation.
   * @method
   * @async
   * @returns {Promise.<void>} Promise which resolves after the animation has been started.
   */
  async start() {
    if (!Fire._image) await this._loadFireSpritesheet();
    this._ctx = this._canvas.getContext("2d");
    this._canvas.addEventListener("click", this._onCanvasClick);
    this._drawFrame(0);
  }

  /**
   * Stops the fire animation.
   * @method
   */
  stop() {
    this._canvas.removeEventListener("click", this._onCanvasClick);
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._ctx = null;
  }
}
