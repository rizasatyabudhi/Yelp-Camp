var express = require('express');
var app = express();

app.set("view engine","ejs");

app.get('/',function(req,res){
   res.render("landing"); 
});


app.get('/campgrounds', function(req,res){
    var campgrounds = [
        {name:"Salmon Greek", image:"https://www.google.co.id/imgres?imgurl=http%3A%2F%2Fwww.nationalparks.nsw.gov.au%2F~%2Fmedia%2FDF58734103EF43669F1005AF8B668209.ashx&imgrefurl=http%3A%2F%2Fwww.nationalparks.nsw.gov.au%2Fcamping-and-accommodation%2Fcampgrounds%2Ffreemans-campground&docid=qY_QuGP8aclyAM&tbnid=ElaglfnJkqrYoM%3A&vet=10ahUKEwj9mZKjgt7UAhXGuY8KHaOdBgwQMwhtKAIwAg..i&w=2000&h=1300&bih=868&biw=1778&q=campground&ved=0ahUKEwj9mZKjgt7UAhXGuY8KHaOdBgwQMwhtKAIwAg&iact=mrc&uact=8"},
        {name:"Granite Hill", image:"https://www.google.co.id/imgres?imgurl=https%3A%2F%2Fwww.nhstateparks.org%2Fuploads%2Fimages%2FDry-River_Campground_02.jpg&imgrefurl=https%3A%2F%2Fwww.nhstateparks.org%2FActivities%2FCamping%2F&docid=gs9V_8f7aHR5vM&tbnid=xjRLcB95uTIqDM%3A&vet=10ahUKEwj9mZKjgt7UAhXGuY8KHaOdBgwQMwhzKAgwCA..i&w=576&h=384&bih=868&biw=1778&q=campground&ved=0ahUKEwj9mZKjgt7UAhXGuY8KHaOdBgwQMwhzKAgwCA&iact=mrc&uact=8"},
        {name:"Mountain Goat's Rest", image:"https://www.google.co.id/imgres?imgurl=https%3A%2F%2Fpcacdn.azureedge.net%2F~%2Fmedia%2F802FD4AF791F4C6886E18CBF4A2B81B2.ashx%3Fmodified%3D20174521310%26w%3D595%26h%3D396%26as%3D1%26hash%3D60BF3446AAD68FA74187218136F9C27819AF48F8&imgrefurl=https%3A%2F%2Fwww.pc.gc.ca%2Fen%2Fpn-np%2Fab%2Fbanff%2Factiv%2Fcamping%2Fmosquito&docid=a3cLbBsuJVZfYM&tbnid=VqNHV3a7WzM9fM%3A&vet=10ahUKEwj9mZKjgt7UAhXGuY8KHaOdBgwQMwhxKAYwBg..i&w=595&h=396&bih=868&biw=1778&q=campground&ved=0ahUKEwj9mZKjgt7UAhXGuY8KHaOdBgwQMwhxKAYwBg&iact=mrc&uact=8"}
        ];
        
   res.render("campgrounds",{campgrounds:campgrounds}); 
});

app.listen(process.env.PORT,process.env.IP, function(){
    console.log("Yelp Camp Server has Started");
});


