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
/**
 * @class [export ListComponent]
 */
export class ListComponent implements OnInit {
  // Tie the icon to the property
  /**
   * @property faplus
   * @property famoins
   * @property famodifier
   */
  faplus = faUserPlus; // icon add new user
  famoins = faUserMinus; // icon delete user
  famodifier = faUserEdit; // icon edit user

  participants: Participants[];

  /**
   * @param {ParticipantsService} participantsService
   * @param {NgbModal} modalService
   */
  constructor(private participantsService: ParticipantsService, private modalService: NgbModal) {
  }

  /**
   * Get the modal AddComponent
   * @method [openFormAddParticipant]
   */
  openFormAddParticipant() {
    const modalRef = this.modalService.open(AddComponent);
    modalRef.result.then( participant => {
      console.log('result of module', participant);
    });
  }

  /**
   * show the list of participants
   * @callback
   */
  ngOnInit(): void {
    this.participantsService.getListOfParticipants().subscribe((participants: Participants[]) => {
      this.participants = participants;
      console.log('Participants: ', JSON.stringify(this.participants));
    });
  }

  /**
   * Delete participants
   * @method [deleteParticipants]
   * @param {string} id
   */
  deleteParticipants(id: number){
    this.participantsService.deleteParticipants(id).subscribe(() => {
      console.log('paricipant: ', id, ' is deleted from the list');
    });
  }

  /**
   * Show the modal EditComponent Update/Edit participants
   * @method [editParticipant]
   * @param {number} id
   */

  editParticipant(id: number) {
    const participant = this.participants.find((part) => part.id === id);
    console.log('Update participant: ', JSON.stringify(participant));
    if (participant === undefined) {
      console.log('There is no participant with this', id);
      return;
    }
    const modalRef = this.modalService.open(EditComponent);
    modalRef.componentInstance.participants = participant;
    modalRef.result.then(participant => {
      console.log('result: ', participant);
    });
  }
}
