import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shehriyar Qureshi | 🦁 Full Stack Software Engineer';

  public constructor(private titleService: Title) {
    this.setTitle();
  }

  // ngOnInit() {
  //   this.setTitle();
  // }

  public setTitle(): void {
    this.titleService.setTitle(this.title);
  }
}