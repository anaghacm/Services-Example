import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit {

  public countryInfo!: any;
  public searchForm!: FormGroup;

  constructor(private ds: DataServiceService, private fb: FormBuilder) {
    this.getCountriesInfo();
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      category: ['', Validators.required],
      keyword: ['', Validators.required]
    })
  }

  getCountriesInfo() {
    this.ds.getCountryInfo().subscribe((result: any) => {
      this.countryInfo = result;
    })
  }

  searchByCategory() {
    if (this.searchForm.valid) {
      let category = this.searchForm.value.category;
      let keyword = this.searchForm.value.keyword;
      console.log(category, keyword)
      if (category == 'Region') {
        this.ds.getCountryRegion(keyword).subscribe((result: any) => {
          this.countryInfo = result;
        })
      }
      else if (category == 'Name') {
        this.ds.getCountryName(keyword).subscribe((result: any) => {
          this.countryInfo = result;
        })
      }
      else if (category == 'Language') {
        this.ds.getCountryLang(keyword).subscribe((result: any) => {
          this.countryInfo = result;
        })
      }
    }
  }
}
