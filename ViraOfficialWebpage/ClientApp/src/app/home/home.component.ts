import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Github', link: 'https://github.com/vira-software-solutions', asset: 'assets/Octocat.png' },
          { title: 'Card 2', link: 'https://github.com/vira-software-solutions', asset: 'assets/Octocat.png'  },
          { title: 'Card 3', link: 'https://github.com/vira-software-solutions', asset: 'assets/Octocat.png'  },
          { title: 'Card 4', link: 'https://github.com/vira-software-solutions', asset: 'assets/Octocat.png'  }
        ];
      }

      return [
        { title: 'Github', link: 'https://github.com/vira-software-solutions', asset: 'assets/Octocat.png' },
        { title: 'Card 2', link: 'https://github.com/vira-software-solutions', asset: 'assets/Octocat.png'  },
        { title: 'Card 3', link: 'https://github.com/vira-software-solutions', asset: 'assets/Octocat.png'  },
        { title: 'Card 4', link: 'https://github.com/vira-software-solutions', asset: 'assets/Octocat.png'  }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  redirect(link) {
    window.open(link, "_blank");
  }
}
