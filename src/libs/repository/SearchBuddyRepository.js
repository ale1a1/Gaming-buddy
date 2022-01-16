import { Repository } from "./Repository";

export class SearchBuddyRepository {
  constructor() {
    this.repository = new Repository("SearchBuddyCriteria");
  }

  list() {
    return this.repository.list();
  }

  /**
   *
   * @param {User} user
   */
  save(criteria) {
    this.repository.add(criteria);
  }

  findOne() {
    return this.repository.findOne(() => true);
  }

  clear() {
    this.repository.clear();
  }
}
