'use strict';

import storage from '../lib/storage/data-store.js';
import uuid from 'uuid/v1';

class Chores{

  constructor(config) {
    this.id = uuid();
    this.createdOn = new Date();
    this.choreName = config && config.title || '';
    this.assignedTo = config && config.assignedTo || '';
    this.completed = config && false || true;
  }
  
  save() {
    return storage.save(this);
  }

  /**
   * The functions below are all "static" methods on this model.
   * Simply put, that means that you can't use them on instances of this model, but
   * rather use them as top level functions.
   * i.e.
   *    This will use the instance method "save" to save the note we just created
   *    let myNote = new Note({title:'Hi',content:'There'});
   *    myNote.save();
   *
   *    To view a single note you would call the method on the constructor istelf:
   *    Note.fetchOne(id)
   *
   * Note that all of the below methods contain calls on our external storage mechanism
   * to perform their operations
   *
   * @returns {*}
   */
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