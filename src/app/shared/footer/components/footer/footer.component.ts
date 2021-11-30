import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Router } from '@angular/router';
CUSTOM_ELEMENTS_SCHEMA

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

  export class FooterComponent implements OnInit {
    
    constructor(private router: Router) { }
  
    ngOnInit(): void {
    }
  
    navigateByUrl(path: string) {
      this.router.navigateByUrl(path);
    }

}
