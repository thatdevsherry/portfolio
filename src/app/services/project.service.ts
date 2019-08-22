import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: any = [
    {
      name: 'TPL Project',
      description: `NA`,
      link: 'NA',
      image: 'assets/images/tpl_project.jpg'
    },
    {
      name: 'historia',
      description: ``,
      link: '',
      image: 'assets/images/historia.jpg'
    }
  ];

  constructor() { }
}
