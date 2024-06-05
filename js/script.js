document.getElementById("generate").addEventListener("click", generatePassword);

function generatePassword() {
  const length = 12; // Change the desired password length
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
    console.log("random Index: ", randomIndex);
    console.log("Password: ", password);
  }
  console.log("Outside password: ", password);

  var final = (document.getElementById("password").value = password);
  console.log("final data: ", final);
}
