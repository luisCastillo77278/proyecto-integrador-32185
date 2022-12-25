export const enviroment = {
 databases: {
    mongo: {
      url: process.env.NODE === "dev" 
        ? "mongodb://lc77278:lc77278@localhost:27017" 
        : "mongodb+srv://lc77278:lc77278@cluster0.vkqhkh4.mongodb.net",
      nameDB:  "coderhouse"
    },
    firebase: {
      connection: "",
    }
  },
  persistence: "mongo"

}