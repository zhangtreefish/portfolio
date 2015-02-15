var bio = {
    "name": "Shuyu Zhang",
    "role": "course developer and educator",
    "contacts": {
        "phone": "210-479-2565",
        "email": "zhangtreefish@yahoo.com",
        "gitHub": "https://github.com/zhangtreefish",
        "twitter":"https://twitter.com/ZhangTreefish",
        "location": "San Antonio"
        },
    "welcomeMessage": "Welcome! Now get off the desk and do 10 jumping jacks!",
    "skills": [
        "design and instruction of science courses",
        "coaching of healthful living",
        "front-end web development"
    ],
    "biopic": "images/fry.jpg",
    displayBio: function() {

        var formattedPicture=HTMLbioPic.replace("%data%",bio.biopic);
        $("#header").append(formattedPicture);
        var formattedName=HTMLheaderName.replace("%data%",bio.name);
        $("#header").append(formattedName);
        var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
        $("#header").append(formattedRole);
        var formattedContact=HTMLcontactGeneric.replace("%data%",bio.contacts.phone);
        $("#topContacts").append(formattedContact);
        var formattedGithub=HTMLgithub.replace("%data%",bio.contacts.gitHub);
        $("#topContacts").append(formattedGithub);
        var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        $("#header").append(HTMLskillsStart);
        var num=bio.skills.length;
        if (num>0) {
            for (var j=0; j<num; j++){
                var formattedSkill=HTMLskills.replace("%data%",bio.skills[j]);
                $("#skills").append(formattedSkill);
                }
            }
        }
    };
    bio.displayBio();

var work = {
    "jobs": [
        {
            "employer": "Our Lady of the Lake University",
            "title": "adjunct lecturer of biology",
            "location": "San Antonio, Texas",
            "dates": "Jan. 2015 to present",
            "description": "instruction of Introduction to Biology lab session"
        },
        {
            "employer": "Hallmark University",
            "title": "instructor of general education",
            "location": "San Antonio, Texas",
            "dates": "June 2011-October 2014",
            "description": "Design and instruction of courses including Microbiology(theory and lab), Anatomy and Physiology (lab), Nutrition and Wellness (both on-ground and online versions), and character education course Dependability; establishing and maintaining the life science lab at Hallmark College."
        },
        {
            "employer": "University of Texas Health Science Center at San Antonio",
            "title": "postdoctoral fellow/research instructor",
            "location": "San Antonio, Texas",
            "dates": "Sept. 1998 to March 2006",
            "description": "Investigation of general stress response of Bacillus subtilis; cancer and DNA repair"
        },
        {
            "employer": "East Harbor Co.",
            "title": "staff",
            "location": "Jinan, China",
            "dates": "Aug. 1991 to Dec. 1991",
            "description": "responsible for business operation"
        }
    ],
    displayWork: function() {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
            var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
            var formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
            var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
            var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
            $(".work-entry:last").append(formattedEmployer+formattedTitle+formattedLocation+formattedDates+formattedDescription)
            }
        }
    };
    work.displayWork();

var projects = {
    "projects": [
        {
            "title": "Mockup to Website",
            "dates": "Jan. 2015",
            "description": "design a web page starting from a mockup, achieving 2.44% mismatch",
            "image": "images/197X148.gif"
        },
        {
            "title": "onetreefish.com",
            "dates": "2014-present",
            "description": "website promoting healthful living, learning, and my interpretation business",
            "image": "images/197X148.gif"
        }
    ],
    displayProjects: function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        var formattedImage=HTMLprojectImage.replace("%data%",projects.projects[project].image);
        $(".project-entry:last").append(formattedImage);
       }
    }
    };
    projects.displayProjects();

var education = {
    "schools": [
        {
            "school": "Hallmark University",
            "location": "San Antonio, Texas",
            "major": "GlobalManagement",
            "degree": "MBA",
            "graduate": "June2014",
            "url": "http: //www.hallmarkuniversity.edu"
        },
        {
            "school": "UniversityofTexasatAustin",
            "location": "Austin, Texas",
            "major": "Microbiology",
            "degree": "Ph.D.",
            "graduate": "August1998",
            "url": "http: //www.utexas.edu"
        },
        {
            "school": "TsinghuaUniversity",
            "location": "Beijing",
            "major": "B.S.inBiologicalSciencesandBiotechnology",
            "degree": "B.S.",
            "graduate": "July1991",
            "url": "http: //www.tsinghua.edu.cn/publish/newthuen/index.html"
        }
    ],

    "onlineCourses": [
        {
            "title": "front-endWebDesigneNanodegree",
            "school": "Udacity",
            "graduate": "May2015",
            "url": "https: //www.udacity.com"
        },
        {
            "title": "ComputerProgramming",
            "school": "KahnAcademy",
            "url": "https: //www.udacity.com"
        }
    ]
};




$(document).click(function(loc) {
    var x=loc.pageX;
    var y=loc.pageY;
    logClicks(x,y);// your code goes here
});

function locationizer(work_obj) {
  var workLocations=[];
    for (job in work.jobs) {
        locationArray.push(work_obj.jobs[job].location);
        }
    return locationArray;
};


function inName(twoNames) {
    var newName=twoNames.trim().split(" ");
    var nameOne=newName[0].slice(0,1).toUpperCase()+newName[0].slice(1).toLowerCase();
    var nameTwo=newName[1].toUpperCase();
    return nameOne+" "+nameTwo;
};

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
