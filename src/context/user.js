const { createContext } = require("react")

const userContext = createContext({
  userData: {
    authorization: '',
    user: null,
  },
  setUserData: () => console.log('implement'),
  logout: () => console.log('implement')
});

export { userContext };