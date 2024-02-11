import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = typeof range === 'string' ? range : '';
  }

  get range() {
    return this._range;
  }

  set range(newRange) {
    if (typeof newRange === 'string') {
      this._range = newRange;
    } else {
      console.error('Range must be a string.');
    }
  }

  cloneCar() {
    const clonedCar = new Car(this.brand, this.motor, this.color);
    return clonedCar;
  }
}
