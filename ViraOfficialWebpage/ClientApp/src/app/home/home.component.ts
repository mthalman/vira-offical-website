import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(() => {
      return [
        { title: 'GitHub', link: 'https://github.com/vira-software-solutions', asset: 'assets/Octocat.png' },
        { title: 'StackExchange', link: 'https://stackexchange.com/users/9293392/therealvira', asset: 'assets/se-logo.svg'  },
        { title: 'YouTube', link: 'https://github.com/vira-software-solutions', asset: 'assets/yt-logo.png'  }
      ];
    })
  );

  private breakpoint;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 3;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 500) ? 1 : 3;
  }

  constructor(private breakpointObserver: BreakpointObserver) {}

  redirect(link) {
    window.open(link, "_blank");
  }
}

