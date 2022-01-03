//create a logic to push the profile token in local storage for the conditional rendering in profile and searcha a buddy...
//vedi anche trello


//create a logic to push the profile inside an array nel local storage (associandolo a warzone username e gamingBuddy user name..);
// probabilmente devi creare uno state che ti dica quale è l user loggato, da qui puoi darlo a schermo sul navbar
// e puoi prendere i dati da associare ai dati del profile nell oggetto che va nell array del local storage
// questo array sara l array da cui search andra a pescare


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
  retrieve() {
    return this.repository.retrieve();
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
