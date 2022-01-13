import { Repository } from "./Repository";

export class MyBuddiesRepository {
  constructor() {
    this.repository = new Repository("myBuddies");
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

  findUser(gamebuddyUsername) {
    return this.repository.findOne(
      (item) => item.gamebuddyUsername === gamebuddyUsername
    );
  }

    /**
     *
     * @param {string} email
     */
    delete(gamebuddyUsername) {
      this.repository.delete((x) => x.gamebuddyUsername !== gamebuddyUsername);
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
