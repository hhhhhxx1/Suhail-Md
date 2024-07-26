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
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  SUHAIL_07_00_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MixcbiAgICAgICAgNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQzLFxuICAgICAgICA3NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTksXG4gICAgICAgIDU2LFxuICAgICAgICA2NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MSxcbiAgICAgICAgNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NixcbiAgICAgICAgMTczLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNixcbiAgICAgICAgMTU2LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDgzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4WG8wS3F2OVB6d3BrTzVaNDZJVWZoTCtOK20vSzg3Tmx6QjN3M0l0VEEwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMYjVtdmFHaFM4bVJXemk4T2tnTWRnXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ4ZjVhYzQ2LTU5NWQtNGIzOS04ZDFiLTQ1ZjJmYjM4YTVmNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjUsXG4gICAgICAyOSxcbiAgICAgIDEzOCxcbiAgICAgIDIzOSxcbiAgICAgIDgxLFxuICAgICAgNzEsXG4gICAgICAzMixcbiAgICAgIDE3OCxcbiAgICAgIDM2LFxuICAgICAgMTc1LFxuICAgICAgMjEzLFxuICAgICAgMjQ3LFxuICAgICAgMTA5LFxuICAgICAgMTQ5LFxuICAgICAgMTE1LFxuICAgICAgMjAzLFxuICAgICAgNzksXG4gICAgICA2MSxcbiAgICAgIDI1MyxcbiAgICAgIDc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OCxcbiAgICAgIDkwLFxuICAgICAgMTI5LFxuICAgICAgMTEsXG4gICAgICAyMjgsXG4gICAgICAyMTMsXG4gICAgICAxNTcsXG4gICAgICA3MSxcbiAgICAgIDE4NyxcbiAgICAgIDI0MCxcbiAgICAgIDE4NyxcbiAgICAgIDYyLFxuICAgICAgODksXG4gICAgICAxOTcsXG4gICAgICAxNTMsXG4gICAgICAxNTksXG4gICAgICAyMTEsXG4gICAgICA0OSxcbiAgICAgIDE3NyxcbiAgICAgIDI0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDNjVRQ0dQV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5ODMyMjIzNjExOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzQ2Njc3Mzg4MDg0NjM6MjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkRRMmJjQ0VKeVRqYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJEYTdiSnE3WnNRWFlvQUg1YkM0emppbkpVSVk5enVQODhKQzBPcGNoOUVnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkhWc0ppVWY2UXJ3dkl2aHB0dVM1aUpGQm1sb2c2S01oZXkvUW5VS1d3MlJtNHlYNjMrQmRyeXFvQlB6REw0QlA1YnN0OU92VVY0Nm9TdE1QdWRGUkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhBUHU1QStpaGF5TldVVER0c3pTNjBzTU9hR09VRzFtUGZBaHVCV216SnNSc0V2WGJmVFErMWxwUUJpT2J0blRpNEpWWXFrK213YVFpWnJQSzdqdERBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxOTgzMjIyMzYxMToyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5NzcyNDdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || " 𝑅𝛪𝐽𝑈-𝛸𝛭𝐷" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ  𝑅𝛪𝐽𝑈-𝛸 』```", //*『follow•』*https://www.instagram.com/riju_editz_1?igsh=dDJsdTlkOGVlbnAx"),
 
  author : process.env.PACK_AUTHER|| " 𝑅𝛪𝐽𝑈",
  packname: process.env.PACK_NAME || " 𝑅𝛪𝐽𝑈-𝛸𝛭",
  botname : process.env.BOT_NAME  || " 𝑅𝛪𝐽𝑈-𝛸𝛭𝐷",
  ownername:process.env.OWNER_NAME|| " 𝑅𝛪𝐽𝑈7-𝛸𝛭",


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
