import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../../model/product.model';
import {ActionEvent, CommandActions, DataStateEnum,  QueryActions} from '../../../../state/product.state';
import {EventDriverService} from '../../../../services/event.driver.service';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {

  @Input() productInput: Product | null = null;
  //@Output() productEventEmitter: EventEmitter<ActionEvent<ProductQueryActions, any>> = new EventEmitter();
  readonly DataStateEnum = DataStateEnum;


  constructor(private eventDriverService:EventDriverService) {
  }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
    /*this.productEventEmitter
      .emit({type: ProductQueryActions.SELECT_PRODUCT, payload: product});*/
    this.eventDriverService.publishEvent({type: QueryActions.SELECT_PRODUCT, payload: product});
  }

  onEditProduct(product: Product) {
   /* this.productEventEmitter
      .emit({type: ProductQueryActions.EDIT_PRODUCT, payload: product});*/
    this.eventDriverService.publishEvent({type: CommandActions.EDIT_PRODUCT, payload: product});
  }

  onDeleteProduct(product: Product) {
    /*this.productEventEmitter
      .emit({type: ProductQueryActions.DELETE_PRODUCT, payload: product});*/
    this.eventDriverService.publishEvent({type: CommandActions.DELETE_PRODUCT, payload: product});
  }
}
