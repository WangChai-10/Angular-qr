import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GeneralService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  createList(title: string, payload: Object) {
    // We want to send a web request to create a list
    console.log('dfdfdf');
    return this.http.post(`${this.ROOT_URL}/lists`, {title});
  }

  getLists() {
    return this.http.get(`${this.ROOT_URL}/lists`);
  }

  getList(listId: string) {
    return this.http.get(`${this.ROOT_URL}/lists/${listId}`);
  }

  updateList(id: string, title: string) {
    // We want to send a web request to update a list
    console.log(title);
    return this.http.patch(`${this.ROOT_URL}/lists/${id}`, {title});
  }

  deleteList(id: string) {
    return this.http.delete(`${this.ROOT_URL}/lists/${id}`);
  }
}

