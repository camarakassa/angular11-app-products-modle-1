import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {EventDriverService} from '../../services/event.driver.service';
import {CommandActions} from '../../state/product.state';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productId: number;
  submitted: boolean = false;

  productFormGroup?: FormGroup;

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private toastrService:ToastrService,
    private router:Router,
    private eventDriverSercive:EventDriverService) {
    this.productId = activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.productService.getProduct(this.productId)
      .subscribe(product => {
        this.productFormGroup = this.formBuilder.group({
          id: [product.id],
          name: [product.name, [Validators.required, Validators.minLength(5)]],
          price: [product.price, [Validators.required, Validators.min(100)]],
          quantity: [product.quantity, [Validators.required, Validators.min(1)]],
          selected: [product.selected, Validators.required],
          available: [product.available, Validators.required]
        });
      });
  }

  onUpdateProduct() {
    this.submitted = true;
    if (this.productFormGroup?.invalid) {
      return;
    }
    this.productService.updateProduct(this.productFormGroup?.value)
      .subscribe(data => {
        this.eventDriverSercive.publishEvent({type:CommandActions.PRODUCT_UPDATED});
          this.router.navigateByUrl('/products');
          this.toastrService.warning('Le produit a été mise à jour avec succès !');
        },
        error => {
          console.log(error);
        });
  }
}
