export class Repository {
  /**
   * Name of object that will be managed in local storage
   * @param {string} repositoryName
   */
  constructor(repositoryName) {
    this.repositoryName = repositoryName;
  }

  /**
   *
   * @returns {Array<Object>}
   */
  list() {
    const storedValues = localStorage.getItem(this.repositoryName);
    const stored = JSON.parse(storedValues);
    return stored === null ? [] : stored;
  }

  /**
   *
   * @param {Object} object
   */
  add(object) {
    const objects = this.list();
    objects.push(object);
    localStorage.setItem(this.repositoryName, JSON.stringify(objects));
  }

  //CREATED BY ME!!!!!!!!!!!!!!!!!!!!!!!!!!!
  retrieve() {
    return JSON.parse(localStorage.getItem(this.repositoryName));
  }

  // NOT IN USE FOR NOW !!!!!!!!
  // /**
  //  *
  //  * @param {Function} filter
  //  * @return {Array<Object>}
  //  */
  // get(filter) {
  //   return this.list.filter(filter);
  // }

  // /**
  //  * @param {Function}
  //  * @return {Object}
  //  */
  // findOne(filter) {
  //   const filtered = this.get(filter);
  //   if (filtered && filtered.length > 0) {
  //     return filtered[0];
  //   }
  // }

  // /**
  //  * Objects that doesn't match the filter function will be deleted from repository
  //  * @param { Function } filter
  //  */
  // delete(filter) {
  //   const objects = this.list();
  //   const filteredObjects = objects.filter(filter);
  //   localStorage.setItem(this.repositoryName, JSON.stringify(filteredObjects));
  // }
}
