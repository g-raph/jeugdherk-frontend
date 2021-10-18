import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';
import { Team } from '../team';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  teams$: Observable<Team[]>;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.teams$ = this.api.getTeams();
  }

  catImageUrl(path: string) {
    return environment.apiUrl + path;
  }

}
