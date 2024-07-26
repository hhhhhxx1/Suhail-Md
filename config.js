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
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/32aea4866ae510a437603.jpg" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_55_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDM3LFxuICAgICAgICA1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDY4LFxuICAgICAgICAzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDcyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NixcbiAgICAgICAgODcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDg5LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDgsXG4gICAgICAgIDczLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUwLFxuICAgICAgICA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzgsXG4gICAgICAgIDk1LFxuICAgICAgICAyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgwLFxuICAgICAgICA3MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNixcbiAgICAgICAgOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNixcbiAgICAgICAgODQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYwLFxuICAgICAgICA1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDU2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAyMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDUsXG4gICAgICAgIDUzLFxuICAgICAgICAzMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDYyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJzaUZtZ0NtMXVOaWdYcmpRbzlHYithSndLSzJXcU02eFpTNmdJcVNZa0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImIzNHRmb2k1UzM2TC03clFLMjMzbXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjNlYjNkMDUtNDUwNi00Y2JiLWFiNGYtOGQxMWYwNDhiNDU3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNSxcbiAgICAgIDIyNCxcbiAgICAgIDI0MCxcbiAgICAgIDE1NyxcbiAgICAgIDE1MyxcbiAgICAgIDE2NCxcbiAgICAgIDE5NixcbiAgICAgIDg1LFxuICAgICAgNjMsXG4gICAgICAxMzgsXG4gICAgICAyNDUsXG4gICAgICAxMTMsXG4gICAgICAyMzUsXG4gICAgICAyMjgsXG4gICAgICA0LFxuICAgICAgMTcyLFxuICAgICAgMjAwLFxuICAgICAgNjEsXG4gICAgICAxNDIsXG4gICAgICAxMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc0LFxuICAgICAgMTcwLFxuICAgICAgMTU1LFxuICAgICAgMjA1LFxuICAgICAgMTQ1LFxuICAgICAgNjEsXG4gICAgICAxOTEsXG4gICAgICAyMTAsXG4gICAgICAyMTAsXG4gICAgICAxNTUsXG4gICAgICAxMTUsXG4gICAgICAyMDIsXG4gICAgICA3NSxcbiAgICAgIDIsXG4gICAgICAxOTEsXG4gICAgICA0MixcbiAgICAgIDEzMixcbiAgICAgIDEwNixcbiAgICAgIDE2NSxcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKOTFBWThMTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5MzMyNDQ2MDM3OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiflJJSlVcIixcbiAgICBcImxpZFwiOiBcIjEwMzI2NDQzNTU5NzQ4NDoyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLKzA4UElFRU5ycWliVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInkrQVp4bWp6U3NSVllxRVBjQnZrR3VzeDBTbVNyV0FyRUdvNjhyR1F3ejA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU3AwN1FsRm9nZEVwVzdCQVE1UVV5UnFRbWhSZ1lVNExydG8zclEydXkwOEVrNkJxaThnbGRScmZaMGlnaUE1ZVZKT1dxdzcyVitBUTliVUlKSTJsQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiamFiS3Q5RHRGWCsxZjRRckRSejJ4NlRYMVhMajF3eUFEU0J5TnhLV3I1Uk50dlo3dHZiZmo3YndNOU1odFQ1a1lZaS9IZW9Zdk5qQlVoQTVTaUQ1aHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5MzMyNDQ2MDM3OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTkyMjkxMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdvQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR29DLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ0hyZFRUSGhVeFNjc2hweXFnQWYzRXU2M3dyekFCbHhyTHB1c2tlNUhPZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzE0NjU4ODYxLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || " 𝑅𝛪𝐽𝑈-𝛸𝛭𝐷" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ  𝑅𝛪𝐽𝑈-𝛸 』```", //*『follow•』*https://www.instagram.com/riju_editz_1?igsh=dDJsdTlkOGVlbnAx"),
 
  author : process.env.PACK_AUTHER|| " 𝑅𝛪𝐽𝑈",
  packname: process.env.PACK_NAME || " 𝑅𝛪𝐽𝑈-𝛸",
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
