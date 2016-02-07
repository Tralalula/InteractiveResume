/*
 This is empty on purpose! Your code to build the resume will go here.
 */
var data = "%data%";

bio = {
  "name": "Tobias",
  "role": "Student",
  "contacts": {
    "mobile": "+45 13 37 13 37",
    "email": "example@example.com",
    "github": "tralalula",
    "twitter": "@example",
    "location": "Denmark"
  },
  "welcomeMessage": "Welcome aboard!",
  "skills": [
    "Python",
    "Java",
    "Android",
    "Ruby/Rails",
    "JavaScript/jQuery",
    "HTML/CSS"
  ],
  bioPic: "https://www.placecage.com/c/387/315"
};

bio.display = function () {
  var headerId = "#header";
  $(headerId).prepend(HTMLheaderRole.replace(data, bio.role));
  $(headerId).prepend(HTMLheaderName.replace(data, bio.name));
  $(headerId).append(HTMLwelcomeMsg.replace(data, bio.welcomeMessage));
  $(headerId).append(HTMLbioPic.replace(data, bio.bioPic));

  if (bio.skills.length > 0) {
    $(headerId).append(HTMLskillsStart);

    var skillsId = "#skills";
    for (var skill in bio.skills) {
      $(skillsId).append(HTMLskills.replace(data, bio.skills[skill]));
    }
  }

  var contactInfo = [];
  contactInfo.push(HTMLmobile.replace(data, bio.contacts.mobile));
  contactInfo.push(HTMLemail.replace(data, bio.contacts.email));
  contactInfo.push(HTMLgithub.replace(data, bio.contacts.github));
  contactInfo.push(HTMLtwitter.replace(data, bio.contacts.twitter));
  contactInfo.push(HTMLlocation.replace(data, bio.contacts.location));

  var topContactsId = "#topContacts";
  var footerContactsId = "#footerContacts";

  for (var info in contactInfo) {
    $(topContactsId).append(contactInfo[info]);
    $(footerContactsId).append(contactInfo[info]);
  }
};

bio.display();