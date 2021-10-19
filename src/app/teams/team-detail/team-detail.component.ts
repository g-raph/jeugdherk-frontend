import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';
import { Team } from '../team';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {

  page$: Observable<Team>;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.page$ = this.api.getTeam(this.route.snapshot.params.slug);
  }

  teamDetailImgUrl(path: string) {
    return environment.apiUrl + path;
  }

}
