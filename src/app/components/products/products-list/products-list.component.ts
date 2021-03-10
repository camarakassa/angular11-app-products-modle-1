import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ActionEvent, AppDataState, DataStateEnum} from '../../../state/product.state';
import {Product} from '../../../model/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() productsInput$: Observable<AppDataState<Product[]>> | null = null;
  //@Output() productEventEmitter: EventEmitter<ActionEvent<ProductQueryActions, any>> = new EventEmitter();
  readonly DataStateEnum = DataStateEnum;

  constructor() {
  }

  ngOnInit(): void {
  }

  /*onSelect(product: Product) {
    this.productEventEmitter
      .emit({type: ProductQueryActions.SELECT_PRODUCT, payload: product});
  }

  onEditProduct(product: Product) {
    this.productEventEmitter
      .emit({type: ProductQueryActions.EDIT_PRODUCT, payload: product});
  }

  /*onDeleteProduct(product: Product) {
    this.productEventEmitter
      .emit({type: ProductQueryActions.DELETE_PRODUCT, payload: product});
  }

  onActionEvent($event: ActionEvent<ProductQueryActions, any>) {
    this.productEventEmitter.emit($event);
  }*/
}
