export class Clock {
  constructor() {
    this.start = performance.now();
    this.last = this.start;
    this.elapsed = 0;
    this.delta = 0;
  }
  tick() {
    const now = performance.now();
    this.delta = now - this.last;
    this.last = now;
    this.elapsed = now - this.start;
    return this.delta;
  }
}
