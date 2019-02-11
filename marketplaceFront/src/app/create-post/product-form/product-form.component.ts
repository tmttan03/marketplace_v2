import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import {} from "googlemaps";

import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @ViewChild('search')
  public searchElementRef:ElementRef;
  public zoom: number;
  public latitude: number;
  public longitude: number;
  public latlongs: any = [];
  public latlong: any = {};
  public searchControl: FormControl;

  nestedProductForms : any = FormGroup;

  products = [{name : 'name'}];
  categories = [{title : 'title'}];
  selectedproduct;
  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private fb: FormBuilder, private api:ApiService){
    this.nestedProductForms = this.fb.group({
      productforms: this.fb.array([this.productForm()])
    });
    this.getCategories();
    //this.selectedproduct = { id:-1, name: '' , description: '', price: 0, location:'', category:'', is_draft:true, seller:''};
  }

  productForm(): FormGroup{
    return this.fb.group({
      is_draft: [],
      name : ['' , [
        Validators.required
      ]],
      price : ['' , [
        Validators.required
      ]],
      location : ['Davao City' , [
        Validators.required
      ]],
      category : ['' , [
        Validators.required
      ]],
      description : [''],
      stocks : ['1', [
        Validators.required
      ]],
      images : this.fb.array([], [Validators.required]),
    });
  }

 

  fileuploads(evt:any, index:any) {
    const files = evt.target.files;
    const control = <FormArray> this.nestedProductForms.controls.productforms['controls'][index].controls['images'];
    for(let i = 0; i < files.length; i++){
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = reader.result + '';
        control.push(this.fb.control(base64));
      };
      reader.readAsDataURL(files[i]);
   
    }
    evt.srcElement.value = null;
  }


  removeImage(formIndex: number, imageIndex: number){
    const control = <FormArray> this.nestedProductForms.controls.productforms['controls'][formIndex].controls['images'];
    control.removeAt(imageIndex);
  }

  getCategories = () => {
    this.api.getAllCategories().subscribe(
      data => {
        this.categories = data;
      }, 
      error => {
        console.log(error);
      }
    )
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.nestedProductForms.value);
  }


  ngOnInit() {
   
  }
  
}



function newFunction(data: any) {
  console.log(data);
}

