/*
Object containing personal bio information, which can be used to display on resume.
 */
var bio = {
    "name": "Christoffel Hiltermann",
    "role": "Partner Technology Manager",
    "contacts": {
        "mobile": "+65 9186 7054",
        "email": "hiltermann@gmail.com",
        "github": "hiltermann",
        "twitter": "@chiltermann",
        "location": "Singapore"
    },
    "welcomeMessage": "Welcome on my resume!",
    "skills": [
        "Teamwork", "programming", "web design", "Online marketing"
    ],
    "biopic": "images/biopic.jpg"
};

/*
Object containing personal work experience, which can be used to display on resume.
 */
var work = {
    "jobs": [{
        "employer": "Google",
        "title": "Partner Operations Manager",
        "dates": "2016 - present",
        "location": "Singapore",
        "description": "Heel veel werk"
    }, {
        "employer": "Google",
        "title": "Payroll Operations Analyst",
        "dates": "2014 - 2016",
        "location": "Singapore",
        "description": "Nog meer werk"
    }, {
        "employer": "Google",
        "title": "Webmaster Outreach Specialist",
        "dates": "2012 - 2014",
        "location": "Dublin",
        "description": "Nog meer werk"
    }]
};

/*
Object containing information on completed projects, which can be used to display on resume.
 */
var projects = {
    "projects": [{
        "title": "Digital Resume",
        "dates": "2016",
        "description": "Created digital resume as part of the Introduction to Programming NanoDegree",
        "image": "images/donald.png"
    }, {
        "title": "Wedding Website",
        "dates": "2013",
        "description": "Designed and created our wedding website",
        "image": "images/dagobert.png"
    }]
};

/*
Object containing educational history, which can be used to display on resume.
 */
var education = {
    "schools": [{
        "name": "Erasmus University",
        "location": "Rotterdam",
        "degree": "MSc General Management",
        "majors": ["Global Business and Stakeholder Management"],
        "dates": "2009",
        "url": "https://www.rsm.nl/master/msc-programmes/mscba-master-in-management/overview/"
    }, {
        "name": "Utrecht University",
        "location": "Utrecht",
        "degree": "BSc Sociology",
        "majors": ["Communication"],
        "dates": "2006",
        "url": "https://www.uu.nl/en/bachelors/bachelor/sociologie"
    }],
    "onlineCourses": [{
        "title": "Introduction to Programming",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }, {
        "title": "Codecademy",
        "school": "Python 101",
        "dates": "2016",
        "url": "https://www.codecademy.com/"
    }]
};

bio.display = function() {
    /*
	The display method in the bio object, function inserts all available information in 
	the bio object into the resume (index.html) header. 
 	*/

    $("#header").prepend(formatInput(bio.name, HTMLheaderName) +
        formatInput(bio.role, HTMLheaderRole));

    bio.displayContact("#topContacts");

    $("#header").append(formatInput(bio.biopic, HTMLbioPic) +
        formatInput(bio.welcomeMessage, HTMLwelcomeMsg));

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
    }
};
bio.displayContact = function(htmlId) {
    /* 
    The displayContact method in the bio object, function inserts all available contact information in 
    the specified DOM element (id). 
    */
    $(htmlId).append(formatInput(bio.contacts.email, HTMLemail) +
        formatInput(bio.contacts.mobile, HTMLmobile) +
        formatInput(bio.contacts.github, HTMLgithub) +
        formatInput(bio.contacts.twitter, HTMLtwitter) +
        formatInput(bio.contacts.location, HTMLlocation));
};
work.display = function() {
    /* 
    The display method in the work object, inserts all available information in 
    the work object into the resume (index.html) work experience section. 
    */
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formatInput(work.jobs[i].employer, HTMLworkEmployer) +
            formatInput(work.jobs[i].title, HTMLworkTitle) +
            formatInput(work.jobs[i].dates, HTMLworkDates) +
            formatInput(work.jobs[i].location, HTMLworkLocation) +
            formatInput(work.jobs[i].description, HTMLworkDescription));
    }
};

projects.display = function() {
    /* 
    The display method in the projects object, inserts all available information in 
    the projects object into the resume (index.html) projects  section. 
    */
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formatInput(projects.projects[i].title, HTMLprojectTitle) +
            formatInput(projects.projects[i].dates, HTMLprojectDates) +
            formatInput(projects.projects[i].description, HTMLprojectDescription) +
            formatInput(projects.projects[i].image, HTMLprojectImage));
    }
};

education.display = function() {
    /* 
    The display method in the education object, inserts all available information in 
    the eduction object into the resume (index.html) education history section. 
    */
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formatInput(education.schools[i].name, HTMLschoolName) +
            formatInput(education.schools[i].degree, HTMLschoolDegree) +
            formatInput(education.schools[i].dates, HTMLschoolDates) +
            formatInput(education.schools[i].location, HTMLschoolLocation) +
            formatInput(education.schools[i].majors, HTMLschoolMajor));
    }

    // Check if any online courses specified, if yes insert 
    // the "Online courses" header into the HTML and add all 
    // online courses data to the section.
    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);

        for (i = 0; i < education.onlineCourses.length; i++) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formatInput(education.onlineCourses[i].title, HTMLonlineTitle) +
                formatInput(education.onlineCourses[i].school, HTMLonlineSchool) +
                formatInput(education.onlineCourses[i].dates, HTMLonlineDates) +
                formatInput(education.onlineCourses[i].url, HTMLonlineURL));
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();

// add the contact details to the bottom of the page.
bio.displayContact("#footerContacts");

// adding the google map with place locators for places lived and worked.
$("#mapDiv").append(googleMap);

function formatInput(inputStr, sourceHtml) {
    /* 
    Function that verifies whether an input is defined (has content) 
    and returns the respective formated HTML content or an empty string.
    */
    if (inputStr.length > 0) {
        return sourceHtml.replace("%data%", inputStr);
    }
    return "";
}