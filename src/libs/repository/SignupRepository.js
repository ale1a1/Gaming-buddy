// eslint-disable-next-line no-unused-vars
// import { User } from "../models/User";
import { Repository } from "./Repository";

export class SignupRepository {
  constructor() {
    this.repository = new Repository("storedSignupValues");
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

  //RETRIEVE CREATED BY ME!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  retrieve() {
    return this.repository.retrieve();
  }


  findUser({ gamebuddyUsername, password }) {
    return this.repository.findOne(
      (item) =>
        item.gamebuddyUsername === gamebuddyUsername &&
        item.password === password
    );
  }


  // NOT IN USE FOR NOW!!!!!!!!!!!!!!!!!!!!
  // /**
  //  *
  //  * @param {string} email
  //  */
  // delete(email) {
  //   this.repository.delete((x) => x.emailAddress !== email);
  // }

  // /**
  //  *
  //  * @param {string} email
  //  * @return {User} user
  //  */
  // findByEmail(email) {
  //   this.repository.findOne((x) => x.emailAddress === email);
  // }
}
