const Discord = require('discord.js');
const Canvas = require('canvas')
const { registerFont } = require('canvas');
registerFont('./Fonts/BeVietnamPro-Bold.ttf', { family: 'BeVietnamPro' });
registerFont('./Fonts/Almarai-Bold.ttf', { family: 'Almarai' });
module.exports = {
  name:"-kt",
  description:"",
  aliases:["كت"],
  async run (message,args){
    if (!message.member.hasPermission("ADMINSTRATOR")) return
  if (!args[0]) return message.reply("**عليك ان تكتب الرسالة اللتي تريد ارسالها!!**")
  message.delete()
  const ktChannel = message.guild.channels.cache.get("هنا تحط ايدي الروم")
  const canvas = Canvas.createCanvas(4000, 1290);
	const context = canvas.getContext('2d');
  const applyText = (canvas, text) => {


	var fontSize = 350;

	do {
    
		context.font = `${fontSize -= 10}px Almarai`;
    
	} while (context.measureText(text).width > canvas.width - 300);


	return context.font;
  };




	const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/904000914036260941/930892217294405642/EC8F9697-B390-4FD0-85A3-B8D0B90F5CEA-1.png');

  
	context.drawImage(background, 0, 0, canvas.width, canvas.height);
  // context.strokeRect(0, 0, canvas.width, canvas.height);





  context.font = applyText(canvas,args.join(" "));
  const textColor = "#000000"
	context.fillStyle = textColor;
  // if (args.join(" ").length > 15)
  // {
  	context.fillText(args.join(" "),  canvas.width/11, canvas.height/1.8 );
  // } 
  // else
  // {
  // 	context.fillText(args.join(" "),  3000 , 722 );
  // }
	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'profile-image.png');

	message.channel.send("@here",{ files: [attachment] });
  
  }
}