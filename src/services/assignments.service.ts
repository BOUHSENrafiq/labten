/**
 * By BOUHSEN RAFIQ
 * project: LAB 10
 * service that ensure CRUD operations.
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Assignments from '../models/assignments';

const url = 'http://localhost:3000/assignments'; // json-server url

@Injectable({
  providedIn: 'root'
})
/**
 * @class [export AssignmentsService]
 */
export class AssignmentsService {
  /**
   * @function
   * @param {HttpClient} http
   */
  constructor(private http: HttpClient) { }
  /**
   * Get a list of all the Assignments
   * @method [getAssignments]
   */
  getAssignments(): Observable<Assignments[]>{
    return this.http.get<Assignments[]>(url);
  }
  /**
   * add a new Assignments
   * @method [addAssignment]
   * @param {Assignments} assignments
   */
  addAssignment(assignments: Assignments): Observable<Assignments>{
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post<Assignments>(url, assignments, {headers});
  }
  /**
   * delete a teacher with this id
   * @method [deleteAssignments]
   * @param {number} id
   */
  deleteAssignments(id: number): Observable<any>{
    return this.http.delete(url + '/' + id);
  }
  /**
   * Update/Edit information about Assignments and save the new values
   * @method [updateAssignment]
   * @param {Assignments} assignments
   */
  updateAssignment(assignments: Assignments): Observable<Assignments>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<Assignments>(url + '/' + assignments.id, assignments, {headers});
  }
}


