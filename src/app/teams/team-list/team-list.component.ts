import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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

  constructor(
    private api: ApiService,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.teams$ = this.api.getTeams();
    
    this.title.setTitle("JVGH | Ploegen");
    const keywords = "JVGH, ploegen";
    const description = "JVGH | Ploegen";

    this.meta.updateTag(
      {
        name: "keywords",
        content: keywords,
      },
      'name="keywords"'
    );
    this.meta.updateTag(
      {
        name: "description",
        content: description,
      },
      'name="description"'
    );
    this.meta.updateTag(
      {
        property: "og:title",
        content: "JVGH | Ploegen",
      },
      'property="og:title"'
    );
    this.meta.updateTag(
      {
        property: "og:description",
        content: "JVGH | Ploegen",
      },
      'property="og:description"'
    );
    this.meta.updateTag(
      {
        property: "og:image",
        content: "https://www.jeugdherk.be/assets/logo.png",
      },
      'property="og:image"'
    );
    this.meta.updateTag(
      {
        property: "og:type",
        content: "website",
      },
      'property="og:type"'
    );
    this.meta.updateTag(
      {
        property: "og:url",
        content: window.location.href,
      },
      'property="og:url"'
    );
  }

  catImageUrl(path: string) {
    return environment.apiUrl + path;
  }

}
