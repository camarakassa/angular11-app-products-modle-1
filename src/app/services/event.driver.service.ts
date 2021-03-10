import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ActionEvent} from '../state/product.state';

@Injectable({providedIn: 'root'})
export class EventDriverService {

  sourceEventSubject: Subject<ActionEvent<any, any>> = new Subject<ActionEvent<any, any>>();
  sourceEventSubjectObservable = this.sourceEventSubject.asObservable();


  sourceEventSubject2: Subject<ActionEvent<any, any>> = new Subject<ActionEvent<any, any>>();
  sourceEventSubjectObservable2 = this.sourceEventSubject.asObservable();


  publishEvent(event:ActionEvent<any, any>){
    this.sourceEventSubject.next(event);
  }
}
