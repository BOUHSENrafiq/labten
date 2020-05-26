import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Assignments from '../models/assignments';

const url = 'http://localhost:3000/assignments';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor(private http: HttpClient) { }

  getAssignments(): Observable<Assignments[]>{
    return this.http.get<Assignments[]>(url);
  }

  addAssignment(assignments: Assignments): Observable<Assignments>{
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post<Assignments>(url, assignments, {headers});
  }

  deleteAssignments(id: number): Observable<any>{
    return this.http.delete(url + '/' + id);
  }

  updateAssignment(assignments: Assignments): Observable<Assignments>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http
      .put<Assignments>(url + '/' + assignments.id, assignments, {headers});
  }
}


