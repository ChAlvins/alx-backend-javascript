class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Custom valueOf() method
  valueOf() {
    return this._size;
  }

  // Custom toString() method
  toString() {
    return this._location;
  }
}
export default HolbertonClass;
