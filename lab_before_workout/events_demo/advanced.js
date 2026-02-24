export class Device {
  constructor(id, name, lat, lng) {
    this.id = id;
    this.name = name;
    this.lat = Number(lat);
    this.lng = Number(lng);
    this.createdAt = new Date();
  }

  toSummary() {
    return `${this.name} (${this.lat.toFixed(4)}, ${this.lng.toFixed(4)})`;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      lat: this.lat,
      lng: this.lng,
      createdAt: this.createdAt.toISOString(),
    };
  }
}

export class DeviceManager extends EventTarget {
  constructor() {
    super();
    this._items = new Map();
    this._next = 1;
  }

  addDevice(name, lat, lng) {
    const id = `dev-${this._next++}`;
    const d = new Device(id, name, lat, lng);
    this._items.set(id, d);
    const ev = new CustomEvent('deviceAdded', { detail: d });
    this.dispatchEvent(ev);
    return d;
  }

  getDevice(id) {
    return this._items.get(id) || null;
  }

  list() {
    return Array.from(this._items.values());
  }

  removeDevice(id){
    const existed = this._items.delete(id);
    if(existed) this.dispatchEvent(new CustomEvent('deviceRemoved',{detail:{id}}));
    return existed;
  }
}
