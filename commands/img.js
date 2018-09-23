var jimp = require('jimp');
const Discord = require("disocrd.js");

module.exports.run = (client, message, args) =>{

    var images = [`${message.author.avatarURL}` ,'./imagens/71f.png'];

    var jimps = [];

    for(var i =0; i<images.length; i++){
        jimps.push(jimp.read(images[i]));
    }

    Promise.all(jimps).then(function(data){
        return Promise.all(jimps);
    }).then(function(data) {
        data[0].composite(data[1],0,0);
        data[0].composite(data[2],0,0);

        message.channel.send(data[0]);
    });

}