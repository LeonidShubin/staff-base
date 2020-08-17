import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  public title = 'staff-base';
  public isDarkMode: boolean;

  ngAfterViewInit(): void {
    this.isDarkMode = this.isPrefersDark();
  }

  isPrefersDark(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
