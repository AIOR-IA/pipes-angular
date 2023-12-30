import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  title = "los angeles azules desde argentina para el mundo";

  person = {
    name: 'Lenar',
    age: '29',
    address: 'Ottawa, Canada'
  }

  //async Pipes
  myObservableTimer = interval(2000).pipe(
    // tap( data => console.log('tap:', data) )
  )


}
