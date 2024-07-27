const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917364934516";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/32aea4866ae510a437603.jpg" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_58_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5NyxcbiAgICAgICAgODgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDkxLFxuICAgICAgICAzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU1LFxuICAgICAgICA5MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDUyLFxuICAgICAgICA3NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5NSxcbiAgICAgICAgODcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDMyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk0LFxuICAgICAgICA4MixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNixcbiAgICAgICAgODAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDUxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDMxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMixcbiAgICAgICAgMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5LFxuICAgICAgICAyOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDY0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiY0NsRFJZUXpvMVZYWFFONndTc3dTQXFNUStZNXpjTk42bHk2djRFWHlvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMSUFfSFdNX1JaQ2RkY1k4QlVnR2hRXCIsXG4gIFwicGhvbmVJZFwiOiBcImViYzAyMDgzLTBlNWEtNDE3OC1iODFhLWYzODdiODgxMjk1M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNixcbiAgICAgIDE4NixcbiAgICAgIDEyOCxcbiAgICAgIDIwMixcbiAgICAgIDIwNyxcbiAgICAgIDE1NCxcbiAgICAgIDAsXG4gICAgICAyNDMsXG4gICAgICA1MSxcbiAgICAgIDc2LFxuICAgICAgMjUyLFxuICAgICAgNTAsXG4gICAgICA3NSxcbiAgICAgIDIzMyxcbiAgICAgIDI1MixcbiAgICAgIDUxLFxuICAgICAgNTcsXG4gICAgICAxMDgsXG4gICAgICA5MSxcbiAgICAgIDcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNyxcbiAgICAgIDIyMCxcbiAgICAgIDIyNixcbiAgICAgIDYwLFxuICAgICAgMTQxLFxuICAgICAgMTYwLFxuICAgICAgNjcsXG4gICAgICAxOTAsXG4gICAgICAxNTksXG4gICAgICAxODMsXG4gICAgICAxMzgsXG4gICAgICAxMzksXG4gICAgICAyOSxcbiAgICAgIDg3LFxuICAgICAgMTg2LFxuICAgICAgMzMsXG4gICAgICAyMzMsXG4gICAgICAxODMsXG4gICAgICA3MixcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJKRDZFNkY0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTkzMzI0NDYwMzc6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJ+UklKVTwzXCIsXG4gICAgXCJsaWRcIjogXCIxMDMyNjQ0MzU1OTc0ODQ6MzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEMwOFBJRUVKN0tqYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5K0FaeG1qelNzUlZZcUVQY0J2a0d1c3gwU21TcldBckVHbzY4ckdRd3owPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlHSUtNdVVRTmJjUUNSRk1wb2ZKbjYxOW8rc1c3RUhtZW9mVHJtN0dXRG1DZUJKZndzb3FjM2pEWktiRUFIdHhqaXRKeWNnTCtRQW84UDVueWdTTkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlRsU2Y4dk9Nb0lpNEtmSVRJWlVCTGhwWi9Ra0NIMjBPOCtHMTlSQ0prT1R4RmZHSG4xV3hSNGhESERWZXN4bFo5eUR3bTFCK2I5QWNrRmJieUh0M0FBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxOTMzMjQ0NjAzNzozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5ODQyODksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHb0NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdvQy5qc29uIjogIntcImtleURhdGFcIjpcImdIcmRUVEhoVXhTY3NocHlxZ0FmM0V1NjN3cnpBQmx4ckxwdXNrZTVIT2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTMxNDY1ODg2MSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || " 𝑅𝛪𝐽𝑈-𝛸𝛭𝐷" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ  𝑅𝛪𝐽𝑈-𝛸 』```", //*『follow•』*https://www.instagram.com/riju_editz_1?igsh=dDJsdTlkOGVlbnAx"),
 
  author : process.env.PACK_AUTHER|| " 𝑅𝛪𝐽𝑈",
  packname: process.env.PACK_NAME || " 𝑅𝛪𝐽𝑈-𝛸𝛭𝐷",
  botname : process.env.BOT_NAME  || " 𝑅𝛪𝐽𝑈-𝛸𝛭𝐷",
  ownername:process.env.OWNER_NAME|| " 𝑅𝛪𝐽𝑈-𝛸𝛭",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEAPI : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "https://telegra.ph/file/32aea4866ae510a437603.jpg",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
