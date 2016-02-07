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

education = {
  "schools": [
    {
      "name": "Baconversity",
      "location": "Denmark, København",
      "degree": "Ph.D.",
      "majors": [
        "Quantum Mechanics",
        "Cryptozoology",
        "Bagels"
      ],
      "dates": "2027",
      "url": "N/A"
    },
    {
      "name": "University of Tabletop",
      "location": "United States, California",
      "degree": "Ph.Deluxe",
      "majors": [
        "Terra Mystica",
        "Mage Knight",
        "Small World",
        "Munchkin: Apocalypse"
      ],
      dates: "2032",
      "url": "N/A"
    }
  ],
  "onlineCourses": [
    {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "date": "2016",
      "url": "https://www.udacity.com/courses/ud304"
    },
    {
      "title": "Responsive Web Design Fundamentals",
      "school": "Udacity",
      "date": "2016",
      "url": "https://www.udacity.com/courses/ud893"
    },
    {
      "title": "Responsive Images",
      "school": "Udacity",
      "date": "2016",
      "url": "https://www.udacity.com/courses/ud882"
    },
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "date": "2016",
      "url": "https://www.udacity.com/courses/ud804"
    },
    {
      "title": "Intro to jQuery",
      "school": "Udacity",
      "date": "2016",
      "url": "https://www.udacity.com/courses/ud245"
    }
  ]
};

work = {
  "jobs": [
    {
      "employer": "AC/DC",
      "title": "Destroyer of MACs",
      "location": "Australia, Canberra",
      "dates": "In progress",
      "description": "My job is to destroy MACs whilst listening to AC/DC!"
    },
    {
      "employer": "Penguin Hacking A/S",
      "title": "Bacon Lord",
      "location": "Greenland, Qasigiannguit",
      "dates": "3939",
      "description": "It's so cold..."
    }
  ]
};

projects = {
  "projects": [
    {
      "title": "Bacon",
      "dates": "2014-2095",
      "description": "How much bacon can a person eat a day?",
      "images": ["https://upload.wikimedia.org/wikipedia/commons/3/31/Made20bacon.png"]
    },
    {
      "title": "Cage",
      "dates": "666-1337",
      "description": "In search of Nicolas Cage",
      "images": [
        "https://www.placecage.com/400/400",
        "https://www.placecage.com/g/400/400",
        "https://www.placecage.com/c/400/400",
        "https://www.placecage.com/gif/400/400"
      ]
    }
  ]
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

education.display = function () {
  var educationId = "#education";
  var educationEntryClass = ".education-entry:last";

  if (education.schools.length > 0) {
    $(educationId).append(HTMLschoolStart);
    for (var school in education.schools) {
      $(educationEntryClass).append(
          HTMLschoolName.replace(data, education.schools[school].name) +
          HTMLschoolDegree.replace(data, education.schools[school].degree)
      );
      $(educationEntryClass).append(HTMLschoolDates.replace(data, education.schools[school].dates));
      $(educationEntryClass).append(HTMLschoolLocation.replace(data, education.schools[school].location));
      $(educationEntryClass).append(HTMLschoolMajor.replace(data, education.schools[school].majors));
    }
  }

  if (education.onlineCourses.length > 0) {
    $(educationId).append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {
      $(educationId).append(HTMLschoolStart);
      $(educationEntryClass).append(
          HTMLonlineTitle.replace(data, education.onlineCourses[course].title) +
          HTMLonlineSchool.replace(data, education.onlineCourses[course].school)
      );
      $(educationEntryClass).append(HTMLonlineDates.replace(data, education.onlineCourses[course].date));
      $(educationEntryClass).append(HTMLonlineURL.replace(data, education.onlineCourses[course].url) + "<br>");
    }
  }
};

work.display = function () {
  var workExperienceId = "#workExperience";
  var workEntryClass = ".work-entry:last";

  if (work.jobs.length > 0) {
    $(workExperienceId).append(HTMLworkStart);
    for (var job in work.jobs) {
      $(workEntryClass).append(
          HTMLworkEmployer.replace(data, work.jobs[job].employer) +
          HTMLworkTitle.replace(data, work.jobs[job].title)
      );
      $(workEntryClass).append(HTMLworkDates.replace(data, work.jobs[job].dates));
      $(workEntryClass).append(HTMLworkLocation.replace(data, work.jobs[job].location));
      $(workEntryClass).append(HTMLworkDescription.replace(data, work.jobs[job].description));
    }
  }
};

projects.display = function () {
  var projectsId = "#projects";
  var projectEntryClass = ".project-entry:last";
  if (projects.projects.length > 0) {
    for (var project in projects.projects) {
      $(projectsId).append(HTMLprojectStart);
      $(projectEntryClass).append(HTMLprojectTitle.replace(data, projects.projects[project].title));
      $(projectEntryClass).append(HTMLprojectDates.replace(data, projects.projects[project].dates));
      $(projectEntryClass).append(HTMLprojectDescription.replace(data, projects.projects[project].description));
      for (var image in projects.projects[project].images) {
        $(projectEntryClass).append(HTMLprojectImage.replace(data, projects.projects[project].images[image]));
      }
    }
  }
};

bio.display();
education.display();
work.display();
projects.display();