import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testroute',
  templateUrl: './testroute.component.html',
  styleUrls: ['./testroute.component.css']
})
export class TestrouteComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ data }) => {
      ////console.log(data);
      ////console.log("here is the token " + data.data.token);
      // do something with your resolved data ...
    })
  }
    
  }


