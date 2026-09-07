function getMessage() {
  return "Hello from Node.js Jenkins CI!";
}

if (require.main === module) {
  console.log(getMessage());
}

module.exports = { getMessage };
