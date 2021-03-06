import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import{autocompleteStringValidator} from './Autovalidator';
@Component({
  selector: 'app-patient-medication-details',
  templateUrl: './patient-medication-details.component.html',
  styleUrls: ['./patient-medication-details.component.scss']
})
export class PatientMedicationDetailsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }


  myControl = new FormControl();
  options: string[] = ['Ayahuasca', 'Cocaine', 'Hallucinogens'];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit(): void {

    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }




  patientmedForm: FormGroup = this.fb.group({
    DrugId: ['', [Validators.required]],
    DrugName: ['', [Validators.required]],
    DrugGenericName: ['', [Validators.required]],
    DrugBrandedName: ['', [Validators.required]],
    DrugForm: ['', [Validators.required]]
  })


  

  public phoneLabelAutocompleteControl = new FormControl('', 
  { 
    validators: [autocompleteStringValidator(this.options), Validators.required] 
  })

  public validation_msgs = {
     'phoneLabelAutocompleteControl': [
  { type: 'invalidAutocompleteString', message: 'Phone label not recognized. Click one of the autocomplete options.' }
     // { type: 'required', message: 'This field cannot be empty' }
    ]
  }




  onSubmit(){

  }


// keyword='name';
// public countries=[
// {
//   id:1,
//   name:'India',
// },
// {
//   id:2,
//   name:'Aus',
// },
// {
//   id:3,
//   name:'bangaladesh',
// },
// {
//   id:4,
//   name:'US',
// }
// ];

//  selectEvent(item){

//  }
// onChangeSearch(search:string){

// }
// onFocused(e){

// }


// selectEvent(item:any) {
//   // do something with selected item
// }

// onChangeSearch(val: string) {
//   // fetch remote data from here
//   // And reassign the 'data' which is binded to 'data' property.
// }

// onFocused(e:any){
//   // do something when input is focused
// }


}
