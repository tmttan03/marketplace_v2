import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import {} from "googlemaps";


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

  productForm : FormGroup;
  
  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private fb: FormBuilder){
    this.productForm = this.fb.group({
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
    });
  }

  get is_draft(){
    return this.productForm.get('is_draft');
  }

  get name(){
    return this.productForm.get('name');
  }

  get price(){
    return this.productForm.get('price');
  }

  get location(){
    return this.productForm.get('location');
  }

  get category(){
    return this.productForm.get('category');
  }

  get description(){
    return this.productForm.get('description');
  }

  get stock(){
    return this.productForm.get('stock');
  }

  ngOnInit() {
    this.zoom = 8;
    this.latitude = 39.8282
    this.longitude = -98.5795;
    this.searchControl = new FormControl();
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: []
      });

      autocomplete.addListener('place_changed', () =>{
        this.ngZone.run(() =>{
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null){
            return ;
          }  

          const latlong = {
            latitude: place.geometry.location.lat,
            longitude: place.geometry.location.lng
          };

          this.latlongs.push(latlong);
          this.searchControl.reset();
        });
      });
    }) 
  }

  private setCurrentPosition(){
    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
      });
    }
  }
  
}



