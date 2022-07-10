import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'gender'];
  users: any;
  isLoading = true;
  dataSource = null as any;
  url: any;

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.loadUserPage();

  }

  getUserData() {
    this.url = 'http://127.0.0.1:8000/api/users';
    this.users = this.apiService.getUsers(this.url).subscribe(
      data => {
        this.isLoading = false;
        this.dataSource = data;
        this.dataSource = new MatTableDataSource(this.dataSource);
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource);
      },
      error => this.isLoading = false
    );
  }

  loadUserPage() {
    this.isLoading = true;
    this.getUserData();
  }
}
