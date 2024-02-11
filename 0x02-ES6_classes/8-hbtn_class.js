export default class HolbertonClass {
  constructor(size, location) {
    this._size = typeof size === 'number' ? size : 0;
    this._location = typeof location === 'string' ? location : '';
  }

  get size() {
    return this._size;
  }

  set size(newSize) {
    if (typeof newSize === 'number') {
      this._size = newSize;
    } else {
      console.error('Size must be a number.');
    }
  }

  get location() {
    return this._location;
  }

  set location(newLocation) {
    if (typeof newLocation === 'string') {
      this._location = newLocation;
    } else {
      console.error('Location must be a string.');
    }
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
