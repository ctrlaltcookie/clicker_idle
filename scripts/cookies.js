window.addEventListener("load", () => {
  let fullOfCookies = document.cookie.split(";").find((row) => row.startsWith("acceptedCookies"))
  console.log("this happened")
  if(fullOfCookies) {
    console.log("no more cookies")
    let popup = document.getElementById("cookie-popup");
    popup.remove();
  }

})

const saveCookie = () => {
  document.cookie = "acceptedCookies=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure"
  let popup = document.getElementById("cookie-popup");
  popup.remove();
};