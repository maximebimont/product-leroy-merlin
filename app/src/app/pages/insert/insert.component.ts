import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { PostProduct } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css'
})
export class InsertComponent {

  @ViewChild(FormGroupDirective) public formDirective!: FormGroupDirective;

  protected form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required])
  })

  public constructor(
    private readonly productService: ProductService
  ) {}

  private get _formValues(): PostProduct {
    return this.form.value;
  }

  protected async onSubmit(): Promise<void> {
    const product: PostProduct = this._formValues; 
    await firstValueFrom(this.productService.postProduct(product));
    this.formDirective.resetForm();
  }

  protected get formValid(): boolean {
    const isNameValid: boolean = this._verifSpace(this._formValues.name) !== '';
    const isPriceValid: boolean = this._formValues.price >= 0;
    return this.form.valid && isNameValid && isPriceValid;
  }

  private _verifSpace(string: string): string {
    return string?.replace(/ /g, '') ?? '';
  }

}
