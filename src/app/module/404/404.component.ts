import { Component, OnInit } from '@angular/core';
import {tsCreateElement} from "@angular/compiler-cli/src/ngtsc/typecheck/src/ts_util";

@Component({
  selector: 'app-404',
  templateUrl: './404.component.html',
  styleUrls: ['./404.component.scss']
})

export class PageNotFoundComponent implements OnInit {

    constructor() { }


    ngOnInit(): void {
    }
}
