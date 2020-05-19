import { Component, Input } from '@angular/core';

import { AdComponent }      from './ad.component';

@Component({
  template: `
    <div class="job-ad">
      <h3>------ hero-job-ad.component.ts ------</h3>
      <h4>{{data.headline}}</h4>

      {{data.body}}
    </div>
  `
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;

}

