// Business logic for AddressBook
function AddressBook() {
  this.contacts = [];
  console.log(this.contacts)
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  // newContact gets an id attached to it
  contact.id = this.assignId();
  // Pushes newContact (plus id) to the prototype "AddressBook"
  this.contacts.push(contact);
}

AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i < this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id === id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

// Creates id to assign to argument passing through addContact
AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  // Loops through contact array until it finds the matching id
  for (var i=0; i < this.contacts.length; i++) {
    // if nothing is found, returns false as seen below
    if (this.contacts[i]) {
      if (this.contacts[i].id === id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

// Business logic for Contacts
// Contact prototype
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber,
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// User Interface Logic

// Constructs a var out of empty prototype
var addressBook = new AddressBook();

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    // Creates variables from user input to use as arguments
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();

    // Constructs new contact object with user input arguments
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);

    // Runs constructed object through addContact function
    addressBook.addContact(newContact);
    console.log(addressBook.contacts);
  })
})
