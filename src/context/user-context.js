import { createContext, useState } from "react";

const UserContext = createContext({
  userName: "",
  email : "",
  logout: () => {},
  setUserName: (username) => {},
  setEmail : (email) => {},
  isLoggedIn: () => false,
});

export function UserContextProvider(props) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  function logoutHandler() {
    setUserName("");
    setEmail("");
  }

  function isLoggedIn() {
    return userName !== "";
  }

  const context = {
    userName: userName,
    setUserName: setUserName,
    setEmail : setEmail,
    logout: logoutHandler,
    isLoggedIn: isLoggedIn,
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;