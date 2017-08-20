var bio = {
    name: 'Ramesh Selvam',
    role: 'Web Designer',
    contacts: {
        mobile: '+91 9842077127',
        email: 'rameshselvam@live.in',
        github: '@selvamglobal',
        twitter: '@iamrameshselvam',
        location: ' Connecticut'
    },
    welcomeMessage: 'Hello! Have a great day!',
    skills: ['HTML', 'CSS', 'Javascript', 'Jquery', 'Reactjs', 'AngularJs', 'Prototyping', 'front-end development'],
    biopic: './images/me.jpg',
    display: function () {
        $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage)).append(HTMLbioPic.replace('%data%', bio.biopic)).prepend(HTMLheaderRole.replace('%data%', bio.role)).prepend(HTMLheaderName.replace('%data%', bio.name));
        $('#topContacts,#footerContacts').prepend(HTMLmobile.replace('%data%', bio.contacts.mobile)).append(HTMLemail.replace('%data%', bio.contacts.email)).append(HTMLgithub.replace('%data%', bio.contacts.github)).append(HTMLtwitter.replace('%data%', bio.contacts.twitter)).append(HTMLlocation.replace('%data%', bio.contacts.location));
        if (bio.skills) {
            $('#header').append(HTMLskillsStart);
            var mySkills = '';
            bio.skills.forEach(function (element) {
                mySkills += element + ', ';
            });
            mySkills = mySkills.substr(0, mySkills.length - 2);
            $('#skills').append(HTMLskills.replace('%data%', mySkills));

        }
    }
};
var education = {
    schools: [{
        name: "AVS Coll",
        location: 'Salem',
        degree: 'BA',
        majors: ['Tamil', 'English'],
        dates: 'May - 13 - 2008',
        url: 'https://www.google.com'
    }, {
        name: "AVS Coll",
        location: 'Salem',
        degree: 'MA',
        majors: ['Tamil', 'English'],
        dates: 'May - 13 - 2008',
        url: 'https://www.google.com'
    }],
    onlineCourses: [{
        title: 'Front-end Developer',
        school: 'Free Code Camp',
        dates: 'june-23-2017',
        url: 'none'
    }, {
        title: 'Front-end Developer nanodegree',
        school: 'Udacity',
        dates: 'Aug-23-2017',
        url: 'none'
    }],
    display: function () {
        for (var school = 0; school < education.schools.length; school++) {
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(HTMLschoolName.replace('%data%', education.schools[school].name)).append(HTMLschoolDegree.replace('%data%', education.schools[school].degree)).append(HTMLschoolDates.replace('%data%', education.schools[school].dates)).append(HTMLschoolLocation.replace('%data%', education.schools[school].location)).append(HTMLschoolMajor.replace('%data%', education.schools[school].majors));
        }
        $('#education').append(HTMLonlineClasses);
        for (var course = 0; course < education.onlineCourses.length; course++) {
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title))
                .append(HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school)).append(HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates)).append(HTMLonlineURL.replace('%data%', education.onlineCourses[course].url));
        }

    }
};
var work = {
    jobs: [{
        employer: 'Humx',
        title: 'web designer',
        location: 'coimbatore',
        dates: '1.1.2010 t0 1.05.20',
        description: 'designing web sites and applications.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sunt voluptatibus aspernatur et reiciendis illum dolores repellendus neque veniam quis, voluptatem sint in soluta reprehenderit laudantium unde numquam cum. Aut.'
    }, {
        employer: 'Bosch',
        title: 'web designer',
        location: 'coimbatore',
        dates: '16.5.2011 t0 1.04.2017',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sunt voluptatibus aspernatur et reiciendis illum dolores repellendus neque veniam quis, voluptatem sint in soluta reprehenderit laudantium unde numquam cum. Aut.'
    }],
    display: function () {
        for (var job = 0; job < work.jobs.length; job++) {
            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(HTMLworkEmployer.replace('%data%', work.jobs[job].employer)).append(HTMLworkTitle.replace('%data%', work.jobs[job].title)).append(HTMLworkDates.replace('%data%', work.jobs[job].dates)).append(HTMLworkLocation.replace('%data%', work.jobs[job].location)).append(HTMLworkDescription.replace('%data%', work.jobs[job].description));

        }

    }
};
var projects = {
    projects: [{
            title: 'RKA Construction',
            dates: '1-May-2016 to 30-May-2016',
            description: 'designing web sites and applications.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sunt voluptatibus aspernatur et reiciendis illum dolores repellendus neque veniam quis, voluptatem sint in soluta reprehenderit laudantium unde numquam cum. Aut.',
            images: ['./images/197x148.gif', './images/197x148.gif', './images/197x148.gif']
        },
        {
            title: 'Jentex',
            dates: '1-May-2017 to 30-May-2017',
            description: 'designing web sites and applications.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sunt voluptatibus aspernatur et reiciendis illum dolores repellendus neque veniam quis, voluptatem sint in soluta reprehenderit laudantium unde numquam cum. Aut.',
            images: ['./images/197x148.gif', './images/197x148.gif', './images/197x148.gif']

        }
    ],
    display: function () {
        for (var project = 0; project < projects.projects.length; project++) {
            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(HTMLprojectTitle.replace('%data%', projects.projects[project].title)).append(HTMLprojectDates.replace('%data%', projects.projects[project].dates)).append(HTMLprojectDescription.replace('%data%', projects.projects[project].description));
            for (var image = 0; image < projects.projects[project].images.length; image++) {
                $('.project-entry:last').append(HTMLprojectImage.replace('%data%', projects.projects[project].images[image]));

            }

        }
    }
};
bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);