import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-tpl',
  templateUrl: './form-tpl.component.html',
  styleUrls: ['./form-tpl.component.css']
})
export class FormTplComponent implements OnInit {

  user : any  = {
    nome: "",
    sobrenome: ""
  }

  constructor() { }

  onSubmit(form){
    console.log(form)
  }

  ngOnInit() {
  }


  setClass(field){
    return {
      'has-error' :field.touched && !field.valid
    }    
  }

}
