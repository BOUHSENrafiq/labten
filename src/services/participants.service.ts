import { Injectable } from '@angular/core';
import Participants from '../models/participants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const url = 'http://localhost:3000/participants';
@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  constructor(private http: HttpClient) { }

  getListOfParticipants(): Observable<Participants[]>{
    return this.http.get<Participants[]>(url);
  }
  deleteParticipants(id: number): Observable<any>{
    return this.http.delete(url + '/' + id);
  }
  addParticipant(participant: Participants): Observable<Participants>{
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post<Participants>(url, participant, {headers: headers});
  }
  updateParticipant(participants: Participants): Observable<Participants>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http
      .put<Participants>(url + '/' + participants.id, participants, {headers: headers});
  }
  getParticipantsById(id: number): Observable<Participants>{
    return this.http.get<Participants>(url + '/' + id);
  }
}
