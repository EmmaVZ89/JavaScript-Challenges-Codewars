// You need to write regex that will validate a password to make sure it meets the following criteria:
//
// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

function validate(password) {
  let regex = [/^[A-Za-z0-9]{6,}$/, /[a-z]+/, /[A-Z]+/, /[\d]+/];
  let result = [];
  for (let i = 0 ; i < regex.length; i++) {
    result.push(regex[i].test(password))
  }

  if (result.every(item => item === true)) {
    return true;
  } else {
    return false;
  }

}
