import { Component, OnInit } from '@angular/core';
import { User } from './user-interface';
import { UserService } from './core/services/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  users: User[] = [];
  cityFilter: string = '';
  loading: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();

  }

  loadUsers(): void {
    this.loading = true;
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar los usuarios:', error);
        this.loading = false;
      }
    });
  }

}
