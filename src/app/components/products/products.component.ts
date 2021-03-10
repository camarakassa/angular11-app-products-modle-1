import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/product.model';
import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import {ActionEvent, AppDataState, DataStateEnum, ProductQueryActions} from '../../state/product.state';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Observable<AppDataState<Product[]>> | null = null;
  readonly DataStateEnum = DataStateEnum;

  constructor(
    private productService: ProductService,
    private router: Router,
    private toastrService:ToastrService) {
  }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    this.products$ =
      this.productService.getAllProducts().pipe(
        map(data => {
          console.log(data);
          return ({dataState: DataStateEnum.LOADED, data: data});
        }),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({
          dataState: DataStateEnum.ERROR,
          errorMessage: err.message
        }))
      );
  }

  onGetSelectedProducts() {
    this.products$ =
      this.productService.getSelectedProducts().pipe(
        map(data => {
          console.log(data);
          return ({dataState: DataStateEnum.LOADED, data: data});
        }),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({
          dataState: DataStateEnum.ERROR,
          errorMessage: err.message
        }))
      );
  }

  onGetAvailableProducts() {
    this.products$ =
      this.productService.getAvailableProducts().pipe(
        map(data => {
          console.log(data);
          return ({dataState: DataStateEnum.LOADED, data: data});
        }),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({
          dataState: DataStateEnum.ERROR,
          errorMessage: err.message
        }))
      );
  }

  onSearch(dataForm: any) {
    this.products$ =
      this.productService.searchProducts(dataForm.keyword).pipe(
        map(data => {
          console.log(data);
          return ({dataState: DataStateEnum.LOADED, data: data});
        }),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({
          dataState: DataStateEnum.ERROR,
          errorMessage: err.message
        }))
      );
  }

  onSelect(product: Product) {
    this.productService.select(product)
      .subscribe(data => {
        product.selected = data.selected;
      });
  }

  onDeleteProduct(product: Product) {
    let verify = confirm('Etes-vous sure de vouloir supprimer?');
    if (verify) {
      this.productService.delete(product)
        .subscribe(data => {
          this.onGetAllProducts();
          this.toastrService.error('Le produit a bien été supprimé !');
        });
    }

  }

  onNewProduct() {
    this.router.navigateByUrl('/newProduct');
  }

  onEditProduct(product: Product) {
    this.router.navigateByUrl('/editProduct/' + product.id);
  }

  onActionEvent($event: ActionEvent<ProductQueryActions, any>) {
    switch ($event.type) {
      /*Les events pour product nav-bar*/
      case ProductQueryActions.GET_ALL_PRODUCTS:
        this.onGetAllProducts();
        break;
      case ProductQueryActions.GET_SELECTED_PRODUCTS:
        this.onGetSelectedProducts();
        break;
      case ProductQueryActions.GET_AVAILABLE_PRODUCTS:
        this.onGetAvailableProducts();
        break;
      case ProductQueryActions.SEARCH_PRODUCT:
        this.onSearch($event.payload);
        break;
      case ProductQueryActions.NEW_PRODUCT:
        this.onNewProduct();
        break;
      /*  les events pour product list */
      case ProductQueryActions.SELECT_PRODUCT:
        this.onSelect($event.payload);
        break;
      case ProductQueryActions.DELETE_PRODUCT:
        this.onDeleteProduct($event.payload);
        break;
      case ProductQueryActions.EDIT_PRODUCT:
        this.onEditProduct($event.payload);
        break;
    }
  }
}
