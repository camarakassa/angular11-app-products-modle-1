import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../../model/product.model';
import {ActionEvent, DataStateEnum, ProductQueryActions} from '../../../../state/product.state';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {

  @Input() productInput: Product | null = null;
  @Output() productEventEmitter: EventEmitter<ActionEvent<ProductQueryActions, any>> = new EventEmitter();
  readonly DataStateEnum = DataStateEnum;


  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
    this.productEventEmitter
      .emit({type: ProductQueryActions.SELECT_PRODUCT, payload: product});
  }

  onEditProduct(product: Product) {
    this.productEventEmitter
      .emit({type: ProductQueryActions.EDIT_PRODUCT, payload: product});
  }

  onDeleteProduct(product: Product) {
    this.productEventEmitter
      .emit({type: ProductQueryActions.DELETE_PRODUCT, payload: product});
  }
}
