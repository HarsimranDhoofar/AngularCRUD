import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  list: Employee[];
  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(actionArray =>{
    this.list = actionArray.map(item => 
      {
        const data = item.payload.doc.data();
      return {
        id: item.payload.doc.id,
        ...data
      } as Employee;
    })
    });
  }

}
