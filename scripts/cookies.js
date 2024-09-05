window.addEventListener("load", () => {
  let fullOfCookies = document.cookie.split(";").find((row) => row.startsWith("acceptedCookies"))
  if(fullOfCookies) {
    
  }

})

const saveCookie = () => {
  document.cookie = "acceptedCookies=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure"
};