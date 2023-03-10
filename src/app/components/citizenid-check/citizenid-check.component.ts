import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CitizenidResponse } from 'src/app/models/model';

@Component({
  selector: 'app-citizenid-check',
  templateUrl: './citizenid-check.component.html',
  styleUrls: ['./citizenid-check.component.scss']
})
export class CitizenidCheckComponent implements OnInit {

  form: FormGroup;
  citizenResult: CitizenidResponse;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      citizen_id: ['', Validators.minLength(12)]
    })
  }



  checkCitizenId() {
    if (this.form.invalid) {
      return alert('กรุณากรอกให้ครบ 13 หลัก');
    }

    const citizen_id = this.form.get('citizen_id').value;
 
    if (citizen_id) {
      let arr = Array.from(String(citizen_id), num => +num).slice(0 , -1);
      let c = 0;
       for(let i = 13; i > 1; i--){
        c++
        arr[c - 1] = i * arr[c - 1];
      }
      const total = arr.reduce((x, y) => x + y, 0);
      const mod = total % 11;
      const digit = 11 - mod;
      const dStr = digit.toString();
      const result = dStr.length > 1 ? dStr.substring(1 , 2) : dStr;
      console.log(result);
      const lastChar = citizen_id.substring(12, 13);
      this.citizenResult = {
        success: result === lastChar ? true : false,
        error_cde: result === lastChar ? '200' : '001',
        error_msg: result === lastChar ? '' : 'citizen_id invalid'
      }
    } else {
      this.citizenResult = {
        success: false,
        error_cde: '001',
        error_msg: 'citizen_id require'
      }
    }
  }




  
  get f() {
    return this.form.controls;
  }

}
