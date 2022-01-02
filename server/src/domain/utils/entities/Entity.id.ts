export class EntityId {
  private readonly _value: String;

  constructor(value: String) {
    this._value = value;
  }

  get value(): String {
    return this._value;
  }

  equals(obj: any): boolean {
    if (!obj) {
      return false;
    }
    if (obj.constructor !== this.constructor) {
      return false;
    }
    return this._value === obj._value;
  }
}
