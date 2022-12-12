import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private metaTagService:Meta,private title:Title){
    this.metaTagService.addTags([
      {name:'Keywords',content: 'Eshop - a SetNext.io Opensource Ecommerce Project'},
      {name:'robots', content:'index,follow'},
      {name:'author', content:'Nithyanantha Babu'},
      {name:'viewport', content:'width=device-width, intial-scale=1'},
      {name:'date', content:'18-11-2022', scheme:'DD-MM-YYYY'},
      {charset:'UTF-8'}
    ]);
    this.title.setTitle("Eshop - Opensource Ecommerce Project by SetNext.io")

  }
  ngOnInit() {
   
  }



 

  
    
}
