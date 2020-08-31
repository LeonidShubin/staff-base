import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'staff-base';
  public isDarkMode: boolean;

  ngOnInit(): void {
    this.isDarkMode = this.isPrefersDark();
    if (this.isDarkMode) {
      document.querySelector('body').classList.add('dark-mode');
    }
  }

  isPrefersDark(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  switchTheme(): void {
      document.querySelector('body').classList.toggle('dark-mode');
  }
}
