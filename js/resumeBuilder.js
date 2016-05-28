


var projects = {
    "projects": [
        {
            "title": "San Antonio Retirement Homes",
            "dates": "2014-2015",
            "description": "A retirement home application with interactive map and search list with KnockoutJS",
            "tools":["KnockoutJS", "google.maps", "ajax", "bootstrap", "jQuery", "Yelp API", "jsonp"],
            "image": "http://i.imgur.com/ztDG76q.jpg",
            "url": "http://zhangtreefish.github.io/Project-5-for-Front-End-Web-Developer-Nanodegree"
        },
        {
            "title": "therapeutic foods",
            "dates": "2016-2016",
            "description": "A Flask web app hosted in Amazon Web Service using Apache HTTP Server and PostgreSQL on Ubuntu system",
            "tools":["Amazon Web Service", "Apache2", "PostgreSQL", "Ubuntu", "Linux", "Flask", "Jinja2", "Python", "json", "sqlalchemy", "oauth2"],
            "image": "http://i.imgur.com/dd4d0fr.png",
            "url": "http://ec2-52-38-199-253.us-west-2.compute.amazonaws.com/"
        },
        {
            "title": "a Frogger game with a immunology twist",
            "dates": "2015-2015",
            "description": "Implemented a Frogger game using Object-Oriented javaScript and HTML5 Canvas",
            "tools":["javascript", "object-oriented programming", "canvas", "requestAnimationFrame"],
            "image": "http://i.imgur.com/TMw9w29.png",
            "url": "https://zhangtreefish.github.io/Project-3-for-Front-End-Web-Developer-Nanodegree"
        }
    ],
    displayProjects: function() {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
            formattedTitle=formattedTitle.replace("#",projects.projects[project].url);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedTools=HTMLprojectTools.replace("%data%",projects.projects[project].tools.toString());
            $(".project-entry:last").append(formattedTools);
            var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);
            var formattedImage=HTMLprojectImage.replace("%data%",projects.projects[project].image);
            $(".project-entry:last").append(formattedImage);
        }
    }
};
projects.displayProjects();




//var formattedLink = $('<div> <a href="http://www.onetreefish.com/"> </a> Website </div>');
//$(".project-entry:last").append(formattedLink);
$("#header").css("background-color","teal");
$("#projects").css("background-color","#fc0");
//var myHeading = document.querySelector('h2');
//myHeading.innerHTML = 'Hello world!';
//alert("May the peace be with you");
