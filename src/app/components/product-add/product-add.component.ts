import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {EventDriverService} from '../../services/event.driver.service';
import {CommandActions} from '../../state/product.state';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productFormGroup?: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService,
    private router:Router,
    private eventDriverService:EventDriverService) {

  }

  ngOnInit(): void {
    this.productFormGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      price: [0, [Validators.required, Validators.min(100)]],
      quantity: [0, [Validators.required, Validators.min(1)]],
      selected: [true, Validators.required],
      available: [true, Validators.required]
    });
  }

  onSaveProduct() {
    this.submitted = true;
    if (this.productFormGroup?.invalid) {
      return;
    }
    this.productService.save(this.productFormGroup?.value)
      .subscribe(data => {
          this.eventDriverService.publishEvent({type:CommandActions.PRODUCT_ADDED});
          this.router.navigateByUrl('/products');
          this.toastrService.success('Le produit a été ajouté avec succès !');
        },
        error => {
          console.log(error);
        });
  }
}
