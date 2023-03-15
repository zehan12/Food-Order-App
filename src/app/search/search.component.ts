import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchItem: string = '';

  constructor(private route: ActivatedRoute, router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchItem']) {
        this.searchItem = params['searchItem'];
      }
    })
  }

  search(): void {

  }

}
