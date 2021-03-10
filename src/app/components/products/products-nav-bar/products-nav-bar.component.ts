import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, CommandActions, QueryActions} from '../../../state/product.state';
import {EventDriverService} from '../../../services/event.driver.service';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  //@Output() productEventEmitter: EventEmitter<ActionEvent<ProductQueryActions, any>> = new EventEmitter();

  constructor(private eventDriverService: EventDriverService) {
  }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    //this.productEventEmitter.emit({type: ProductQueryActions.GET_ALL_PRODUCTS});
    this.eventDriverService.publishEvent({type: QueryActions.GET_ALL_PRODUCTS});
  }

  onGetSelectedProducts() {
    //this.productEventEmitter.emit({type: ProductQueryActions.GET_SELECTED_PRODUCTS});
    this.eventDriverService.publishEvent({type: QueryActions.GET_SELECTED_PRODUCTS});
  }

  onGetAvailableProducts() {
    //this.productEventEmitter.emit({type: ProductQueryActions.GET_AVAILABLE_PRODUCTS});
    this.eventDriverService.publishEvent({type: QueryActions.GET_AVAILABLE_PRODUCTS});
  }

  onNewProduct() {
    //this.productEventEmitter.emit({type: ProductQueryActions.NEW_PRODUCT});
    this.eventDriverService.publishEvent({type: CommandActions.NEW_PRODUCT});
  }

  onSearch(dataForm: any) {
    //this.productEventEmitter.emit({type: ProductQueryActions.SEARCH_PRODUCT, payload: dataForm});
    this.eventDriverService.publishEvent({type: QueryActions.SEARCH_PRODUCT, payload: dataForm});
  }
}
