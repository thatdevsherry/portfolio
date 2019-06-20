import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about: any = {
    "name": "Muhammad Shehriyar Qureshi",
    "status": "Full Stack Software Engineer",
    "introduction":
      `
    I've been learning and coding for over the past 2 years. I started learning
    with Python and then worked with Java. Now, I'm working with both Java and
    Angular. I love being a Back-End Engineer but I'm now becoming comfortable
    with Front-End. So now I'm a Full Stack Software Engineer.
    `
  };

  frontendSkills: any = [
    "Angular",
    "HTML",
    "CSS",
    "TypeScript",
    "pyGTK"
  ];

  backendSkills: any = [
    "Java",
    "Spring Boot",
    "Spring Security",
    "Python",
    "JDBC",
    "Hibernate ORM",
  ];

  databaseSkills: any = [
    "PostgreSQL",
    "SQLite3",
    "PostGIS",
    "pgAdmin"
  ];

  otherSkills: any = [
    "RESTful Web Services",
    "Geographic Information System",
    "Leaflet",
    "Linux",
    "Bash Scripting",
    "Version Control (Git/GitHub/Bitbucket)",
    "Apache Tomcat",
    "JSON",
    "XML",
    "Regular Expressions",
    "Vim/Neovim"
  ];

  workExperience: any = [
    {
      "name": "TPL Maps (Private) Ltd",
      "role": "Full Stack Software Engineer",
      "date": "April 2019 - Present",
      "website": "https://tplmaps.com",
      "image": "assets/images/tplmaps_logo.png"
    },
    {
      "name": "Ufone",
      "role": "Software Developer Intern",
      "date": "December 2018 - February 2019",
      "website": "https://www.ufone.com",
      "image": "assets/images/ufone_logo.jpg"
    },
    {
      "name": "PTCL",
      "role": "Software Developer Intern",
      "date": "September 2018 - November 2018",
      "website": "https://ptcl.com.pk",
      "image": "assets/images/ptcl_logo.png"
    }
  ];

  laptopSetup: any = {
    "operatingSystem": "btw I use Arch Linux",
    "textEditor": "Neovim",
    "IDE": "Netbeans for Java, VS Code for Angular",
    "desktopEnvironment": "Gnome 3"
  }

  constructor() { }

  ngOnInit() {
  }

}
