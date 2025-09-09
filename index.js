function createLoginTracker({ username, password }) {
  let attemptCount = 0;
  const maxAttempts = 3;

  return (inputUser, inputPass) => {
    attemptCount++;

    if (attemptCount > maxAttempts) {
      return "Account locked due to, too many failed login attempts.";
    }

    if (inputUser === username && inputPass === password) {
      return 'Successful login! Welcome, ${username}!';
    } else {
      return 'Login failed. Attempt ${attemptCount} of ${maxAttempts}.';
    }
  };
}

const login = createLoginTracker({ username: "user1", password: "pass1" });

console.log(login("user1", "wrongpass")); //fail 1
console.log(login("user1", "wrongpass")); //fail 2
console.log(login("user1", "wrongpass")); //fail 3
console.log(login("user1", "pass1"));   //passed , still locked


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};