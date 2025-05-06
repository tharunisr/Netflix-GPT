export const checkValidData =(email,password,isSignInForm,name)=>{


// const isNameValid=/^[A-Za-z]+$/.test(name); 
if (email === "" && password=== "") return "Enter Email ID & Password";

if(email === "" ) return "Enter Email";

const isEmailvalid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

if(password === "" ) return "Enter Password"

const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


if (!isSignInForm) {
    if (name.trim() === "") return "Enter name";
    if (!/^[a-zA-Z][a-zA-Z\s'-]{1,}$/.test(name)) return "Invalid name";
  }
  
 




 if (!isEmailvalid) return "Email ID is not valid";

 if(isEmailvalid === "") return "Email ID should not empty"

if (!isPasswordValid) return "Password is not valid";

return null;

}







