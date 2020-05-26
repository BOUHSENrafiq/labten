/**
 * By BOUHSEN RAFIQ
 * project: LAB 10
 * model: teachers.
 * service for CRUD operations.
 */


import { Injectable } from '@angular/core';
import Teachers from '../models/teachers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000/teachers'; // json-server url
@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  constructor(private http: HttpClient) { }

  /**
   * Get a list of all the teachers
   */
  getListOfTeachers(): Observable<Teachers[]>{
    return this.http.get<Teachers[]>(url);
  }

  /**
   * delete teacher with this id
   * @param id
   */
  deleteTeacher(id: number): Observable<any>{
    return this.http.delete(url + '/' + id);
  }

  /**
   * add a new teacher of type Teachers
   * @param teachers
   */
  addTeacher(teachers: Teachers): Observable<Teachers>{
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post<Teachers>(url, teachers, {headers: headers});
  }

  /**
   * Edit information about a teacher and save the new values
   * @param teachers
   */
  updateTeacher(teachers: Teachers): Observable<Teachers>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http
      .put<Teachers>(url + '/' + teachers.id, teachers, {headers: headers});
  }
}
