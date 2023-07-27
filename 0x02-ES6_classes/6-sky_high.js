import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Calling the parent class constructor using super()
    super(sqft);

    // Storing floor attributes with underscores in child class
    this._floors = floors;
  }

  // Getter method for attribute
  get floors() {
    return this._floors;
  }

  // Overiding evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
