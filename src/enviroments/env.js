export const enviroment = {
 databases: {
    mongo: {
      url: process.env.NODE === "dev" ? "mongodb://lc77278:lc77278@localhost:27017" : "",
      nameDB:  "coderhouse"
    },
    firebase: {
      connection: "",
    }
  },
  persistence: "mongo"

}