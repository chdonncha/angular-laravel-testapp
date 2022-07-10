import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'first_name', 'full_name', 'email', 'gender'];
  users: any;
  isLoading = true;
  dataSource = null as any;
  url: any;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.loadUserPage();
    // this.getUserData();
    console.log(this.dataSource);

  }

  getUserData() {
    this.url = 'http://127.0.0.1:8000/api/users';
    this.users = this.apiService.getUsers(this.url).subscribe(
      data => {
        this.isLoading = false;
        this.dataSource = data;
        // this.dataSource = new MatTableDataSource(this.dataSource);
        // this.dataSource.paginator = this.paginator
      },
      error => this.isLoading = false
    );
  }

  loadUserPage() {
    this.isLoading = true;
    this.getUserData();
  }

}
