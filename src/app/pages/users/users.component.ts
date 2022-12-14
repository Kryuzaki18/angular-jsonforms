import { Component, OnInit } from '@angular/core';
import usersUISchema from '../../core/models/users-ui-schema.json';
import usersSchema from '../../core/models/users-schema.json';
import users from '../../core/data/users';
import { angularMaterialRenderers } from "@jsonforms/angular-material";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  data = users;
  uischema = usersUISchema;
  schema = usersSchema;
  renderers = angularMaterialRenderers;

  constructor() { }

  ngOnInit(): void {
  }

}
