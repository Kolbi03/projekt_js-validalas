function username(){
  let username = document.getElementById("username").value;
 if(username == "")
 {
  document.getElementById("usernameHiba").innerText = "Név megadása kötelező!";
 }
 else if (username.length < 5)
 {
  document.getElementById("usernameHiba").innerText = "Nem lehet rövidebb mint 5 karakter";
 }
 else if(username.length > 10)
 {
  document.getElementById("usernameHiba").innerText = "Nem lehet 10 karakternél nagyobb";
 }
 else if(username.includes("+", "-", "_"))
 {
  document.getElementById("usernameHiba").innerText = "Megfelel";
 }
 else
 {
  document.getElementById("usernameHiba").innerText = "Kell tartalmaznia valamilyen speciális karaktert! (_-+)";
 }
}

function email()
{
  let email = document.getElementById("email").value;
  if(email == "")
  {
    document.getElementById("emailHiba").innerText = "Email megadása kötelező!";
  }
  else if(email.includes("@") && email.includes("."))
  {
    document.getElementById("emailHiba").innerText = "Megfelel";
  }
  else
  {
    document.getElementById("emailHiba").innerText = "Érvénytelen formátum!";
  }
}

function password()
{
  let password = document.getElementById("password").value;
  let confirmpassword = document.getElementById("password2").value;

  if (confirmpassword == "")
  {
    document.getElementById("password2Hiba").innerText = "Jelszó megerősítése kötelező!";
  }
  if(password == "")
  {
    document.getElementById("passwordHiba").innerText = "Jelszó megadása kötelező!";
  }
  else if (password.length < 5)
 {
  document.getElementById("passwordHiba").innerText = "Nem lehet rövidebb mint 5 karakter";
 }
 else if(password.length > 10)
 {
  document.getElementById("passwordHiba").innerText = "Nem lehet 10 karakternél nagyobb";
 }
 else if (/[0-9]/.test(password))
 {
  if (password != password.toLowerCase())
  {
    if(password == confirmpassword)
    {
      document.getElementById("passwordHiba").innerText = "A jelszó megfelel!";
      document.getElementById("password2Hiba").innerText = "A jelszó egyezik";
    }
    else
    {
      document.getElementById("passwordHiba").innerText = "A jelszó nem egyezik";
      document.getElementById("password2Hiba").innerText = "A jelszó nem egyezik";
    }
  }
  else
  {
    document.getElementById("passwordHiba").innerText = "Kell egy nagybetű!";
  }
  //document.getElementById("passwordHiba").innerText = "Megfelel";
 }
 else
 {
  document.getElementById("passwordHiba").innerText = "Kell tartalmaznia egy nagybetűt és egy számot is!";
 }
}

function checkbox()
{
  //let checkbox = document.getElementById("checkbox").value;

  //document.getElementById("checkboxHiba").innerText = checkbox;

  if (document.getElementById("checkbox").checked == false)
  {
    document.getElementById("checkboxHiba").innerText = "Kötelező a bejelölés";
  }
  else
  {
    document.getElementById("checkboxHiba").innerText = "Megfelel";
  }


}

/*if (password == password.toLowerCase())
  {
    if(password == confirmpassword)
    {
      document.getElementById("passwordHiba").innerText = "A jelszó megfelel!";
      document.getElementById("password2Hiba").innerText = "A jelszó egyezik";
    }
    else
    {
      document.getElementById("passwordHiba").innerText = "A jelszó nem egyezik";
      document.getElementById("password2Hiba").innerText = "A jelszó nem egyezik";
    }
  }
*/
function init(){
  document.getElementById("submit").addEventListener("click", username);
  document.getElementById("submit").addEventListener("click", password);
  document.getElementById("submit").addEventListener("click", email);
  document.getElementById("submit").addEventListener("click", checkbox);
}



document.addEventListener("DOMContentLoaded", init)
