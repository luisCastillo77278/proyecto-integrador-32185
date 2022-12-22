const cnxStrLocal = 'mongodb://root:mongopassword@localhost?authSource=admin'
const cnxStrRemota = 'mongodb+srv://xxxxx:xxxxx@xxxxx/coderhouse'


export const CNX_STR = process.env.NODE === "dev" ? cnxStrLocal : cnxStrRemota

export const DB = "FILE"