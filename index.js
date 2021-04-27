/**
 * Copyright © 2017 Leonard Wong
 * Licensed under Apache License 2.0
 * Check License.md for details
 */

/**
 * Check Node app running */
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

/** Database Connection **/
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

// Create connection to database
var config = {
  userName:'',
  password: '',
  server: '',
  options: {
    database: '',
    encrypt: true
  }
}
function updateHelp() {
 console.log("Updating /help");
  //Reading
  console.log("Reading rows from ''Table...Please wait...");
  // Read all rows from table
  request2 = new Request(
    "Update '' Set help = (Select help From ''" +
    " Where ID = 1) + 1 Where ID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection2 = new Connection(config);

  connection2.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection2.execSql(request2);
      console.log("Data Updated");
    }
  });
  connection2.end;
}

function updateWho() {
  console.log("Updating /who");
  //Reading
  console.log("Reading rows from Table...Please wait...");
  // Read all rows from table
  request3 = new Request(
    "Update Table Set who = (Select who From Table" +
    " Where ID = 1) + 1 Where ID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection3 = new Connection(config);

  connection3.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection3.execSql(request3);
      console.log("Data Updated");
    }
  });
  connection3.end;
}

function updateSummary() {
  console.log("Updating /summary");
  //Reading
  console.log("Reading rows from Table...Please wait...");
  // Read all rows from table
  request4 = new Request(
    "Update Table Set summary = (Select summary From Table" +
    " Where ID = 1) + 1 Where ID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection4 = new Connection(config);

  connection4.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection4.execSql(request4);
      console.log("Data Updated");
    }
  });
  connection4.end;
}

function updateWebsite() {
  console.log("Updating /website");
  //Reading
  console.log("Reading rows from Table...Please wait...");
  // Read all rows from table
  request5 = new Request(
    "Update Table Set website = (Select website From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection5 = new Connection(config);

  connection5.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection5.execSql(request5);
      console.log("Data Updated");
    }
  });
  connection5.end;
}

function updateVolunteer() {
  console.log("Updating /volunteer");
  //Reading
  console.log("Reading rows from Table...Please wait...");
  // Read all rows from table
  request6 = new Request(
    "Update Table Set volunteer = (Select volunteer From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection6 = new Connection(config);

  connection6.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection6.execSql(request6);
      console.log("Data Updated");
    }
  });
  connection6.end;
}

function updateEducation() {
  console.log("Updating /education");
  //Reading
  console.log("Reading rows from Table Table...Please wait...");
  // Read all rows from table
  request6 = new Request(
    "Update Table Set education = (Select education From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection6 = new Connection(config);

  connection6.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection6.execSql(request6);
      console.log("Data Updated");
    }
  });
  connection6.end;
}

function updateExperience() {
  console.log("Updating /experience");
  //Reading
  console.log("Reading rows from Table Table...Please wait...");
  // Read all rows from table
  request7 = new Request(
    "Update Table Set experience = (Select experience From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection7 = new Connection(config);

  connection7.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection7.execSql(request7);
      console.log("Data Updated");
    }
  });
  connection7.end;
}

function updateSkills() {
  console.log("Updating /skills");
  //Reading
  console.log("Reading rows from Table Table...Please wait...");
  // Read all rows from table
  request8 = new Request(
    "Update Table Set skills = (Select skills From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection8 = new Connection(config);

  connection8.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection8.execSql(request8);
      console.log("Data Updated");
    }
  });
  connection8.end;
}

function updatehonors() {
  console.log("Updating /honors");
  //Reading
  console.log("Reading rows from Table Table...Please wait...");
  // Read all rows from table
  request9 = new Request(
    "Update Table Set honors = (Select honors From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection9 = new Connection(config);

  connection9.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection9.execSql(request9);
      console.log("Data Updated");
    }
  });
  connection9.end;
}

function updateCertifications() {
  console.log("Updating /certifications");
  //Reading
  console.log("Reading rows from Table Table...Please wait...");
  // Read all rows from table
  request10 = new Request(
    "Update Table Set certifications = (Select certifications From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection10 = new Connection(config);

  connection10.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection10.execSql(request10);
      console.log("Data Updated");
    }
  });
  connection10.end;
}

function updateProjects() {
  console.log("Updating /projects");
  //Reading
  console.log("Reading rows from Table Table...Please wait...");
  // Read all rows from table
  request11 = new Request(
    "Update Table Set projects = (Select projects From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection11 = new Connection(config);

  connection11.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection11.execSql(request11);
      console.log("Data Updated");
    }
  });
  connection11.end;
}


function updateCourses() {
  console.log("Updating /courses");
  //Reading
  console.log("Reading rows from Table Table...Please wait...");
  // Read all rows from table
  request12 = new Request(
    "Update Table Set courses = (Select courses From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection12 = new Connection(config);

  connection12.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection12.execSql(request12);
      console.log("Data Updated");
    }
  });
  connection12.end;
}

function updateSocial() {
  console.log("Updating /social");
  //Reading
  console.log("Reading rows from Table Table...Please wait...");
  // Read all rows from table
  request13 = new Request(
    "Update Table Set social = (Select social From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection13 = new Connection(config);

  connection13.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection13.execSql(request13);
      console.log("Data Updated");
    }
  });
  connection13.end;
}

function updateFacebook() {
  console.log("Updating /facebook");
  //Reading
  console.log("Reading rows from Table Table...Please wait...");
  // Read all rows from table
  request14 = new Request(
    "Update Table Set facebook = (Select facebook From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection14 = new Connection(config);

  connection14.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection14.execSql(request14);
      console.log("Data Updated");
    }
  });
  connection14.end;
}

function updateTwitter() {
  console.log("Updating /projects");
  //Reading
  console.log("Reading rows from Table Table...Please wait...");
  // Read all rows from table
  request15 = new Request(
    "Update Table Set twitter = (Select twitter From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection15 = new Connection(config);

  connection15.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection15.execSql(request15);
      console.log("Data Updated");
    }
  });
  connection15.end;
}

function updateInstagram() {
  console.log("Updating /instagram");
  //Reading
  console.log("Reading rows from Table Table...Please wait...");
  // Read all rows from table
  request16 = new Request(
    "Update Table Set instagram = (Select instagram From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection16 = new Connection(config);

  connection16.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection16.execSql(request16);
      console.log("Data Updated");
    }
  });
  connection16.end;
}

function updateSnapchat() {
  console.log("Updating /snapchat");
  //Reading
  console.log("Reading rows from Table Table...Please wait...");
  // Read all rows from table
  request17 = new Request(
    "Update Table Set snapchat = (Select snapchat From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection17 = new Connection(config);

  connection17.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection17.execSql(request17);
      console.log("Data Updated");
    }
  });
  connection17.end;
}

function updateLinkedin() {
  console.log("Updating /linkedin");
  //Reading
  console.log("Reading rows from Table Table...Please wait...");
  // Read all rows from table
  request18 = new Request(
    "Update Table Set linkedin = (Select linkedin From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection18 = new Connection(config);

  connection18.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection18.execSql(request18);
      console.log("Data Updated");
    }
  });
  connection18.end;
}

function updateEmail() {
  console.log("Updating /email");
  //Reading
  console.log("Reading rows from Table Table...Please wait...");
  // Read all rows from table
  request19 = new Request(
    "Update Table Set email = (Select email From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection19 = new Connection(config);

  connection19.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection19.execSql(request19);
      console.log("Data Updated");
    }
  });
  connection19.end;
}

function updateTelegram() {
  console.log("Updating /telegram");
  //Reading
  console.log("Reading rows from Table Table...Please wait...");
  // Read all rows from table
  request20 = new Request(
    "Update Table Set telegram = (Select telegram From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection20 = new Connection(config);

  connection20.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection20.execSql(request20);
      console.log("Data Updated");
    }
  });
  connection20.end;
}

function updateUnidentified() {
  console.log("Updating unidentified");
  //Reading
  console.log("Reading rows from Table Table...Please wait...");
  // Read all rows from table
  request21 = new Request(
    "Update Table Set unidentified = (Select unidentified From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection21 = new Connection(config);

  connection21.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection21.execSql(request21);
      console.log("Data Updated");
    }
  });
  connection21.end;
}

function updatePortfolio() {
  console.log("Updating portfolio");
  //Reading
  console.log("Reading rows from Table Table...Please wait...");
  // Read all rows from table
  request22 = new Request(
    "Update Table Set portfolio = (Select portfolio From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection22 = new Connection(config);

  connection22.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection22.execSql(request22);
      console.log("Data Updated");
    }
  });
  connection22.end;
}

function updatePMD() {
  console.log("Updating PMD");
  //Reading
  console.log("Reading rows from Table Table...Please wait...");
  // Read all rows from table
  request23 = new Request(
    "Update Table Set pmd = (Select pmd From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection23 = new Connection(config);

  connection23.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection23.execSql(request23);
      console.log("Data Updated");
    }
  });
  connection23.end;
}

function updateFYP() {
  console.log("Updating FYP");
  //Reading
  console.log("Reading rows from Table Table...Please wait...");
  // Read all rows from table
  request24 = new Request(
    "Update Table Set fyp = (Select fyp From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection24 = new Connection(config);

  connection24.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection24.execSql(request24);
      console.log("Data Updated");
    }
  });
  connection24.end;
}
  
function updateEbusiness() {
  console.log("Updating Ebusiness");
  //Reading
  console.log("Reading rows from Table Table...Please wait...");
  // Read all rows from table
  request25 = new Request(
    "Update Table Set ebusiness = (Select ebusiness From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection25 = new Connection(config);

  connection25.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection25.execSql(request25);
      console.log("Data Updated");
    }
  });
  connection25.end;
}

function updateOOP() {
  console.log("Updating OOP");
  //Reading
  console.log("Reading rows from Table Table...Please wait...");
  // Read all rows from table
  request26 = new Request(
    "Update Table Set oop = (Select oop From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection26 = new Connection(config);

  connection26.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection26.execSql(request26);
      console.log("Data Updated");
    }
  });
  connection26.end;
}

function updateWebApp() {
  console.log("Updating WebApp");
  //Reading
  console.log("Reading rows from Table Table...Please wait...");
  // Read all rows from table
  request27 = new Request(
    "Update Table Set webapp = (Select webapp From Table" +
    " Where logID = 1) + 1 Where logID = 1",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) updated ');
    }
  );

  var connection27 = new Connection(config);

  connection27.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection27.execSql(request27);
      console.log("Data Updated");
    }
  });
  connection27.end;
}

//Telegram credentials
var TelegramBot = require('node-telegram-bot-api'),
    telegram = new TelegramBot("", { polling: true });

telegram.on("text", (message) => {

  console.log("Inserting Comment...");
  request22 = new Request(
    "INSERT INTO TableComment (comment) VALUES('" + message.text + "')",
    function (err, rowCount, rows) {
      console.log(rowCount + ' row(s) inserted');
    }
  );

  var connection22 = new Connection(config);

  connection22.on('connect', function (err) {
    if (err) {
      console.log(err)
    }
    else {
      connection22.execSql(request22);
      console.log("Data Inserted");
    }
  });
  connection22.end;

  //Commands /help & /start
  if ((message.text.toLowerCase().indexOf("/help") == 0) || (message.text.toLowerCase().indexOf("/start") == 0)) {
    
    telegram.sendMessage(message.chat.id, 
    "Hi, I am Tablebot. I can help you understand Leonard better. 🙂"
    + "\n\nYou can control me by sending these commands:" + 
    "\n\n/help - List of commands you can send" +
    "\n/who - A short introduction of who Leonard is" +
    "\n/summary - A summary of who Leonard is" +
    "\n/website - URL to Leonard's Portfolio" +
    "\n/education - List of education Leonard goes through" +
    "\n/volunteer - List of volunteer experience Leonard has" +
    "\n/experience - List of job experience Leonard has" +
    "\n/skills - List of skills Leonard has" +
    "\n/honors - List of honors Leonard has" +
    "\n/certifications - List of certifications Leonard has" +
    "\n/projects - List of projects Leonard has done" + 
    "\n/courses - List of courses Leonard has completed" +
    "\n/social - List of social network Leonard has" + 
    "\n/facebook - Leonard's Facebook profile link" +
    "\n/twitter - Leonard's Twitter profile link" +
    "\n/instagram - Leonard's Instagram profile link" +
    "\n/snapchat - Leonard's Snapchat profile link" +
    "\n/linkedin - Leonard's Linkedin profile link" +
    "\n/email - Leonard's emaill address" +
    "\n/telegram - Leonard's telegram account" +
    "\n/projectportfolio - Description of Personal Portfolio" +
    "\n/projectpmd - Description of PMD Platform" +
    "\n/projectfyp - Description of Final Year Project" +
    "\n/projectebusiness - Description of E- Business & Project" +
    "\n/projectoop - Description of Object- Oriented Programming Project" +
    "\n/projectwebapp - Description of Web Applications Development");
    updateHelp()
  }
  else if(message.text.toLowerCase().indexOf("/who") == 0){
    telegram.sendMessage(message.chat.id, "Leonard is a full-time student at Singapore Management University." +
    "He will concurrently read Bachelor of Science (Information Systems): Information Systems Major & Master of Applied Information Systems: Software & Cyber-Physical Systems track." +
    "\nHe like technology a lot.\n\nType /social to connect with him. 😆");
    updateWho()
  }
  else if (message.text.toLowerCase().indexOf("/summary") == 0) {
  telegram.sendMessage(message.chat.id, "Leonard is a full-time student at Singapore Management University (SMU)" +
  ", reading Bachelor of Science (Information Systems): Information Systems Major. " +
  "Concurrently, he will read Master of Applied Information Systems: Software & Cyber Physical Systems track, under SMU SIS Local Fast-Track Scholarship. " +
  "\n\nPrior to SMU, he was a student at Nanyang Polytechnic (NYP), where he attained Diploma in Business Informatics with Merit." +
  " At the same time, he found passion in Information Technology that led him to achieved 4 Distinctions & 14 A's throughout his studies" +
  " at NYP while achieved 3 A+, 1 A0 & 1 B0 during his studies in Gachon University as an Exchange Programme Student. During his studies in NYP," +
  " he was honored to be given the responsibility to lead the team for most of the assignments and all projects, while acquiring skills that are" +
  " commonly used in the workplace such as Java, PHP, SQL, HTML, CSS & C#. In addition to that, he attained GPA 4.0 in Y1S1 & Y3S1 while attained GPA 3.98 in Y1S2." +
  " Leonard is a driven person and always seek to produce high-quality work that he is proud to call it his own. He is also conscientiously striving to acquire new knowledge and skills as and when he can." + 
  "\n\nOther than his education, he deeply believes everyone in the world has the rights to learn, regardless of country, race, religion, gender & financial capabilities." +
  " Moreover, preserving our environment should not be a policy, a law or a program but a norm." +
  "\n\nLeonard would love to work in a company that continuously strive to do better and see challenges & obstacles as opportunities." +
  " But most importantly, the company values its employees and provides essential care and training to ensure their employees stay ahead of the competitions." +
  " In addition to that, it will be great if the company is relentlessly contributing to the environment and education.");
  updateSummary()
}
else if(message.text.toLowerCase().indexOf("/website") == 0) {
  telegram.sendMessage(message.chat.id, "You can visit the website at: https://Table.tech");
  updateWebsite()
}
else if(message.text.toLowerCase().indexOf("/education") == 0) {
  telegram.sendMessage(message.chat.id, "Leonard is a full-time student at Singapore Management University (SMU) where he will read Bachelor of Science (Information Systems): Information Systems Major" +
  " & Master of Applied Information Systems: Software & Cyber-Physical Systems track" +
  "\n\nIn 2017, he graduated with a Diploma in Business Informatics with Merit from Nanyang Polytechnic (NYP)" +
  "\nDuring his studies in NYP, he was an overseas exchange student at Gachon University." +
  "\n\nHe graduated from Beatty Secondary School & Kheng Cheng School in 2013 & 2008 respectively");
  updateEducation()
}
else if (message.text.toLowerCase().indexOf("/volunteer") == 0) {
  telegram.sendMessage(message.chat.id, "Leonard had volunteered in NYP School of Information Technology Freshman Orientation in March 2015 as Publicity Member." +
  "He also volunteered at NYP Open House 2015, including visitng Beatty Secondary School as NYP representative");
  updateVolunteer()
}
else if (message.text.toLowerCase().indexOf("/experience") == 0) {
telegram.sendMessage(message.chat.id, "Leonard worked in Jobook Singapore Pte Ltd between July 2016 to October 2016 as an Intern." +
"\nHe also worked at SamMobile between July 2013 to December 2013 as Contributing Writer.");
updateExperience()
}
else if (message.text.toLowerCase().indexOf("/skills") == 0) {
  telegram.sendMessage(message.chat.id, "Leonard have these skills:\n" +
  "HTML" +
  "\nCSS" +
  "\nJavaScript" + 
  "\njQuery" +
  "\nPHP" +
  "\nC#" +
  "\nASP.NET" +
  "\nJava" +
  "\nSQL" +
  "\nNode.js" +
  "\nMicrosoft Azure" +
  "\nStripe" +
  "\nPayPal SDK" +
  "\nBraintree" +
  "\nAdobe Premiere" +
  "\nTwilio" +
  "\nMaterializeCSS" +
  "\nObject Oriented Programming" +
  "\nFinal Cut Pro" +
  "\nMobile Technology" +
  "\nStrategic Planning" +
  "\nComputational Thinking" +
  "\nTeam Leadership" +
  "\nTeam Player");
  updateSkills()
}
else if (message.text.toLowerCase().indexOf("/honors") == 0) {
telegram.sendMessage(message.chat.id, "Leonard have these Honors:\n" +
"SMU SIS Local Fast-Track Scholarship" +
"\nDirector's List AY2016/2017 Semester 2" +
"\nDirector's List AY2016/2017 Semester 1" +
"\nDirector's List AY2015/2016 Semester 1" +
"\nDirector's List AY2014/2015 Semester 2" +
"\nDirector's List AY2014/2015 Semester 1" +
"\nEdusave Good Progress Award" +
"\nBeattyian of the Term" +
"\nEdusave Merit Bursary");
updatehonors()
}
else if (message.text.toLowerCase().indexOf("/certifications") == 0) {
telegram.sendMessage(message.chat.id, "Leonard have these Certifications:\n" +
"Diploma in Business Informatics with Merit" +
"\nHackathon@SG 2015" +
"\nGCE O-Level" +
"\nGCE N-Level");
updateCertifications()
}
else if (message.text.toLowerCase().indexOf("/projects") == 0) {
  telegram.sendMessage(message.chat.id,"Leonard did these projects:\n" +
  "Personal Portfolio /projectportfolio" +
  "\nPersonal Mobility Devices Renting Platform /projectpmd" +
  "\nNYP Student Attendance System (Final Year Project) /projectfyp" +
  "\nE-Business & Project /projectebusiness" +
  "\nObject-Oriented Programming /projectoop" +
  "\nWeb Applications Development /projectwebapp");
  updateProjects()
}
else if (message.text.toLowerCase().indexOf("/courses") == 0) {
  telegram.sendMessage(message.chat.id, "Leonard went through these courses:\n" +
  "Principles of Accounting" +
  "\nEssentials of Marketing" +
  "\nComputing Mathematics" +
  "\nData Structure & Programming Techniques" +
  "\nWeb Applications Development" +
  "\nLaw & Ethics of IT" +
  "\nPillars of Life" +
  "\nEconomics & Everyday Life" +
  "\nBusiness Communication 1" +
  "\nBusiness Statistics" +
  "\nPrinciples of Economics" +
  "\nNetworking Essentials" +
  "\nObject-Oriented Programming & Project" +
  "\nBecoming An Entrepreneur" +
  "\nEffective Presentation Skills" +
  "\nBusiness Communication 2" +
  "\nBusiness Environment" +
  "\nFinancial Management" +
  "\nDatabase Management Systems" +
  "\nE-Business & Project" +
  "\nNational Education" +
  "\nDiscovering I&E Spirit in Beijing" +
  "\nCreating Short Films" +
  "\nInvestment Theory" +
  "\nInternet Business and E-Commerce" +
  "\nEvent Mangement" +
  "\nOrganisational Behaviour" +
  "\nHuman Resource Management" +
  "\nFinal Year Project" +
  "\nInternship Programme" +
  "\nCritical Lifeskills for Professional Success" +
  "\nService Science And Innovation" +
  "\nCloud Computing for Business Applications" +
  "\nServices Marketing Mangement" +
  "\nBusiness Informatics Project" +
  "\nInfosecurity Technology");
  updateCourses()
}
else if (message.text.toLowerCase().indexOf("/social") == 0) {
  telegram.sendMessage(message.chat.id, "You can find Leonard in these social networks:\n" +
  "Facebook: https://www.facebook.com/leothelion96" +
  "\nTwitter: https://twitter.com/leothelion96" +
  "\nInstagram: https://www.instagram.com/leothelion_96/" +
  "\nSnapchat: https://www.snapchat.com/add/leothelion2302" +
  "\nLinkedin: https://www.linkedin.com/in/leonard-wong-972612b8/" +
  "\nTelegram: @leothelion96");
  updateSocial()
}
else if (message.text.toLowerCase().indexOf("/facebook") == 0) {
  telegram.sendMessage(message.chat.id, "You can find Leonard's Facebook profile at "
  + "https://www.facebook.com/leothelion96");
  updateFacebook()
}
else if (message.text.toLowerCase().indexOf("/twitter") == 0) {
  telegram.sendMessage(message.chat.id, "You can find Leonard's Twitter profile at " +
  "https://twitter.com/leothelion96");
  updateTwitter()
}
else if (message.text.toLowerCase().indexOf("/instagram") == 0) {
  telegram.sendMessage(message.chat.id, "You can find Leonard's Instagram profile at " +
  "https://www.instagram.com/leothelion_96/");
  updateInstagram()
}
else if (message.text.toLowerCase().indexOf("/snapchat") == 0) {
  telegram.sendMessage(message.chat.id, "You can find Leonard's Snapchat at " +
  "https://www.snapchat.com/add/leothelion2302");
  updateSnapchat()
}
else if (message.text.toLowerCase().indexOf("/linkedin") == 0) {
  telegram.sendMessage(message.chat.id, "You can find Leonard's Linkedin profile at " +
  "https://www.linkedin.com/in/leonard-wong-972612b8/");
  updateLinkedin()
}
else if (message.text.toLowerCase().indexOf("/email") == 0) {
  telegram.sendMessage(message.chat.id, "You can send email to Leonard at " +
  "leonard@Table.tech");
  updateEmail()
} 
else if (message.text.toLowerCase().indexOf("/telegram") == 0) {
  telegram.sendMessage(message.chat.id, "You can find Leonard's Telegram at " +
  "@leothelion96");
  updateTelegram()
}
  else if (message.text.toLowerCase().indexOf("/projectportfolio") == 0) {
  telegram.sendMessage(message.chat.id,
      "Personal Portfolio is a site that show Leonard's resume in a professional way through his own creation" +
      "\n\nTools used to develop the site:" +
      "\n• Microsoft Visual Studio 2017 Preview" +
      "\n• MaterializeCSS framework" +
      "\n• Microsoft Azure" +
      "\n\nYou can visit the site at https://Table.tech");
      updatePortfolio()
}
else if (message.text.toLowerCase().indexOf("/projectpmd") == 0) {
    telegram.sendMessage(message.chat.id, "This project entails the idea of renting Personal Mobility Devices(PMD) through a consumer-to-consumer business model." +
      "\nThis platform provide a unified platform for renting all PMD.With this platform, user will have a platform to rent their PMDs to people who desire to use it but lack the capability to own it" +
      "\n\nTools used:" +
      "\n• Microsoft Visual Studio 2015" +
      "\n• Microsoft Azure" +
      "\n• Microsoft Storage" +
      "\n• MaterializeCSS framework" +
      "\n• Digits API" +
      "\n• Cloudinary API" +
      "\n• Twilio SMS API" +
      "\n• PayPal API" +
      "\n• Braintree API" +
      "\n• SimplifyCommerce API" +
      "\n• pdfSharp API" +
      "\n• Clarifal Image Recoginition API" +
      "\n• sweetalert API");
      updatePMD()
}
else if (message.text.toLowerCase().indexOf("/projectfyp") == 0) {
    telegram.sendMessage(message.chat.id, "The objective of this project is to overhaul the user interface by creating a responsive design language that will automatically resize the content based on the user's device. " +
      "Other than that, the design language is to complement the existing features found in existing Student Attendance System. " +
      "\n\nAchievements:" +
      "\nResponsible solely on all developemnt of the project" +
      "\nAcquired knowledge on materializeCSS framework" +
      "\nDeploy to Microsoft Azure and map it to my own domain for testing" +
      "\n\nTools used:" +
      "\n• Microsoft Visual Studio 2013" +
      "\n• SQL Server 2012 Management Studio" +
      "\n• MaterializeCSS framework" +
      "\n• Microsoft Azure" +
      "\n\n**Disclaimer: Due to the confidentiality of the project, I am not convenient to share further detailed information.***");
      updateFYP()
}
else if (message.text.toLowerCase().indexOf("/projectebusiness") == 0) {
    telegram.sendMessage(message.chat.id, "The objective of this project was to create an e-commerce website. A website that customer can browse through our wigs catalog and make purchase if they desired." +
      "\nWith this website, customers who need to buy a wig, no longer need to feel ashamed as they do not need to visit a store." +
      "\nSimply browse through our catalog, make a purchase and have it deliver to your doorstep." +
      "\n\nFeatures added in projects not taught in class includes:" +
      "\n• Microsoft Azure" +
      "\n• Stripe Payment System API" +
      "\n• Twilio SMS API," +
      "\n• PDFGenerated Receipt with customer & orders details" +
      "\n• Sending Email with the PDF Generated Receipt" +
      "\n\nIDE/Tools used:" +
      "\n• Microsoft Visual Studio 2010" +
      "\n• Microsoft Azure");
      updateEbusiness()
}
else if (message.text.toLowerCase().indexOf("/projectoop") == 0) {
    telegram.sendMessage(message.chat.id, "The aim of this project is to create a better shopping experience through a software system." +
      "\nOur team decided to create a pre- order system that allows customers to pre- order the items they want." +
      "\nCustomer will be able to choose to collect items themselves or have it deliver to their doorstep." +
      "\nFeatures added to the project that was not taught in class include read & write images to folder & sending email" +
      "\n\nIDE/Tools used:" +
      "\n• Eclipse" +
      "\n• mySQL");
      updateOOP()
}
else if (message.text.toLowerCase().indexOf("/projectwebapp") == 0) {
    telegram.sendMessage(message.chat.id, "The aim of this project is to create a responsive website of any company using HTML, CSS & JavaScript. Chose Marina Bay Sands as the company." +
      "Features added include scroll to top with smooth animation. " +
      "\n\nIDE/Tools used:" +
      "\n• Notepad++");
      updateWebApp()
}
else {
  telegram.sendMessage(message.chat.id,"Unidentified command. Please type /help for the list of commands.");
  updateUnidentified()
}
});

/*telegram.onText(/\/projectDetails/, function onProjectsDetailsText(msg, match) {
  telegram.sendMessage(msg.chat.id, "Select a project you want to know more" +
    "\n1. Personal Portfolio" +
    "\n2. Personal Mobility Devices Renting Platform" +
    "\n3. Final Year Project" +
    "\n4. E-Business & Project" +
    "\n5. Object-Oriented Programming" +
    "\n6. Web Applications Development", {
      "reply_markup": {
        "keyboard": [
          [{ text: "1" }],
          [{ text: "2" }],
          [{ text: "3" }],
          [{ text: "4" }],
          [{ text: "5" }],
          [{ text: "6" }]
        ],
        "one_time_keyboard": true
      }
    });
  telegram.onText(/1/, function (msg, match) {
    telegram.sendMessage(msg.chat.id, "You selected Personal Portfolio");
  });
  telegram.onText(/2/, function (msg, match) {
    telegram.sendMessage(msg.chat.id, "You selected Personal Mobility Devices Renting Platform");
  });
  telegram.onText(/3/, function (msg, match) {
    telegram.sendMessage(msg.chat.id, "You selected Final Year Project");
  });
  telegram.onText(/4/, function (msg, match) {
    telegram.sendMessage(msg.chat.id, "You selected E-Business & Project");
  });
  telegram.onText(/5/, function (msg, match) {
    telegram.sendMessage(msg.chat.id, "You selected Object-Oriented Programming");
  });
  telegram.onText(/6/, function (msg, match) {
    telegram.sendMessage(msg.chat.id, "You selected Web Applications Development");
  });
});*/