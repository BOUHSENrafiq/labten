import {Component, OnInit} from '@angular/core';
import Participants from '../../models/participants';
import {ParticipantsService} from '../../services/participants.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent} from '../add-list/add.component';
import { faUserPlus, faUserMinus, faUserEdit} from '@fortawesome/free-solid-svg-icons';
import {EditComponent} from '../edit-list/edit.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  faplus = faUserPlus;
  famoins = faUserMinus;
  famodifier = faUserEdit;
  participants: Participants[];
  constructor(private participantsService: ParticipantsService, private modalService: NgbModal) {
  }

  openFormAddParticipant() {
    const modalRef = this.modalService.open(AddComponent);
    modalRef.result.then( participant => {
      console.log('result of module', participant);
    });
  }

  ngOnInit(): void {
    this.participantsService.getListOfParticipants().subscribe((participants: Participants[]) => {
      this.participants = participants;
      console.log('Participants: ', JSON.stringify(this.participants));
    });
  }
  deleteParticipants(id: number){
    this.participantsService.deleteParticipants(id).subscribe(() => {
      console.log('paricipant: ', id, ' is deleted from the list');
    });
  }

  editParticipant(id: number) {
    const participant = this.participants.find((part) => part.id === id);
    console.log('update participant: ', JSON.stringify(participant));
    if (participant === undefined) {
      console.log('there is no participant with this', id);
      return;
    }
    const modalRef = this.modalService.open(EditComponent);
    modalRef.componentInstance.participants = participant;
    modalRef.result.then(participant => {
      console.log('result of module', participant);
    });
  }
}
