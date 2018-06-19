'use strict';

import BaseResource from './base-resource.js';
// import storage from '../lib/storage/data-store.js';
// import uuid from 'uuid/v1';

class Chores extend BaseResource { 

  constructor(config) {
    super(config);
    // this.id = uuid();
    // this.createdOn = new Date();
    this.choreName = config && config.title || '';
    this.assignedTo = config && config.assignedTo || '';
    this.completed = config && false || true;
  }
  
  save() {
    return storage.save(this);
  }

  static fetchAll() {
    return storage.getAll();
  }

  static findOne(id) {
    return storage.get(id);
  }

  static updateOne(criteria) {
    return storage.update(criteria);
  }

  static deleteOne(id) {
    return storage.delete(id);
  }

}

export default Chores;