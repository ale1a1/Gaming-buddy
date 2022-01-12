import { Repository } from "./Repository";

export class SearchBuddyRepository {
  constructor() {
    this.repository = new Repository("SearchBuddyCriteria");
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
