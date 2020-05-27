/**
 * By BOUHSEN RAFIQ
 * project: LAB 10
 * service for CRUD operations.
 */

import { Injectable } from '@angular/core';
import Participants from '../models/participants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000/participants'; // json-server url
@Injectable({
  providedIn: 'root'
})
/**
 * @class [export ParticipantsService]
 */
export class ParticipantsService {
  /**
   * @constructor
   * @param {HttpClient} http
   */
  constructor(private http: HttpClient) { }
  /**
   * Get a list of all the Participants
   * @method [getListOfParticipants]
   */
  getListOfParticipants(): Observable<Participants[]>{
    return this.http.get<Participants[]>(url);
  }
  /**
   * delete Participants with this id
   * @method [deleteParticipants]
   * @param {number} id
   */
  deleteParticipants(id: number): Observable<any>{
    return this.http.delete(url + '/' + id);
  }
  /**
   * add a new Participants
   * @method [addParticipant]
   * @param {Participants} participant
   */
  addParticipant(participant: Participants): Observable<Participants>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Participants>(url, participant, {headers: headers});
  }
  /**
   * Update/Edit information about Participants and save the new values
   * @method [updateParticipant]
   * @param {Participants} participants
   */
  updateParticipant(participants: Participants): Observable<Participants>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<Participants>(url + '/' + participants.id, participants, {headers: headers});
  }
}
