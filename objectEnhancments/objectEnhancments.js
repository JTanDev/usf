/* Write an ES2015 Version */
function createInstructor(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}

function createInstructor2(firstName, lastName) {
  return {
    [firstName]: firstName,
    [lastName]: lastName,
  };
}

/* Write an ES2015 Version */
let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

/* Write an ES2015 Version */
const instructor2 = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};

// Write a function which generates an animal object. The function should accepts 3 arguments:

// species: the species of animal (‘cat’, ‘dog’)
// verb: a string used to name a function (‘bark’, ‘bleet’)
// noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

function createAnimal(species, verb, noise) {
  return {
    species: species,
    [verb]: noise,
  };
}
