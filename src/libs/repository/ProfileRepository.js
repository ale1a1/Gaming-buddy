import { Repository } from "./Repository";

export class ProfileRepository {
  constructor() {
    this.repository = new Repository("UsersFullProfiles");
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

  //CREATED BY ME!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // retrieve() {
  //   return this.repository.retrieve();
  // }


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
