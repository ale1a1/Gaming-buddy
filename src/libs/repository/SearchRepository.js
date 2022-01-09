import { Repository } from "./Repository";

export class SearchRepository {
  constructor() {
    this.repository = new Repository("FoundBuddies");
  }

  /**
   *
   * @param {User} user
   */
  save(user) {
    this.repository.add(user);
  }

  list() {
    return this.repository.list();
  }

  /**
   *
   * @param {string} email
   */
  delete(gamebuddyUsername) {
    this.repository.delete((x) => x.gamebuddyUsername !== gamebuddyUsername);
  }

  findUser({ gamebuddyUsername}) {
    return this.repository.findOne(
      (item) =>
        item.gamebuddyUsername === gamebuddyUsername
    );
  }

  // NOT IN USE FOR NOW!!!!!!!!!!!!!!!!!!!!

  // /**
  //  *
  //  * @param {string} email
  //  * @return {User} user
  //  */
  // findByEmail(email) {
  //   this.repository.findOne((x) => x.emailAddress === email);
  // }
}
