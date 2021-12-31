// eslint-disable-next-line no-unused-vars
// import { User } from "../models/User";
import { Repository } from "./Repository";

export class LogoutRepository {
  constructor() {
    this.repository = new Repository("LoginToken");
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
  retrieve() {
    return this.repository.retrieve();
  }

  /**
   *
   * @param {string} email
   */
  delete(token) {
    this.repository.delete((x) => x !== token);
  }

  //   NOT IN USE FOR NOW!!!!!!!!!!!!!!!!!!!!
  // /**
  //  *
  //  * @param {string} email
  //  * @return {User} user
  //  */
  // findByEmail(email) {
  //   this.repository.findOne((x) => x.emailAddress === email);
  // }
}
