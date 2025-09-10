function createLoginTracker({ username, password }) {
  var attemptCount = 0;
  var maxAttempts = 3;

  return (passwordAttempt) => {
    if (attemptCount >= maxAttempts) {
      return "Account locked due to too many failed login attempts";
    }

    if (passwordAttempt === password) {
      return "Login successful";
    }

    attemptCount++;
    return `Attempt ${attemptCount}: Login failed`;
  }
};

const login = createLoginTracker({ username: "user1", password: "pass1" });

console.log(login("user1", "wrongpass")); // Attempt 1: Login failed
console.log(login("user1", "wrongpass")); // Attempt 2: Login failed
console.log(login("user1", "wrongpass")); // Attempt 3: Login failed
console.log(login("user1", "pass1"));   // Account Locked , still locked


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};