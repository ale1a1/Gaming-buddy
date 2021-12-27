// eslint-disable-next-line no-unused-vars
import { User } from "../models/User";
import { Repository } from "./Repository";

export class UserRepository {
  constructor() {
    this.repository = new Repository("storedSignupValues");
  }

  /**
   *
   * @param {User} user
   */
  save(user) {
    this.repository.addItem(user);
  }

  /**
   *
   * @param {string} email
   */
  delete(email) {
    this.repository.delete((x) => x.emailAddress !== email);
  }

  /**
   *
   * @param {string} email
   * @return {User} user
   */
  findByEmail(email) {
    this.repository.findOne((x) => x.emailAddress === email);
  }
}