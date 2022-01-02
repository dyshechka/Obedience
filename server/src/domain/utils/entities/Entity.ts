import { EntityId } from './Entity.id';

export abstract class Entity<ID extends EntityId> {
  private id: ID;

  protected constructor(id: ID) {
    this.id = id;
  }

  equals(obj: any): boolean {
    if (!obj) {
      return false;
    }
    if (obj.constructor !== this.constructor) {
      return false;
    }
    return this.id.equals(obj.id);
  }
}
