import { Component, OnDestroy, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Observable, Subject } from "rxjs";
import { map, takeUntil } from "rxjs/operators";
import { ApiService } from "src/app/api.service";
import { environment } from "src/environments/environment";
import { EventItem } from "../event-item";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.scss"],
})
export class EventListComponent implements OnInit, OnDestroy {
  events$: Observable<EventItem[]>;
  destroy$ = new Subject();

  constructor(
    private api: ApiService,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.events$ = this.api.getTimeslots().pipe(
      takeUntil(this.destroy$),
      map((items) =>
        items.filter(
          (item) =>
            new Date().setHours(0, 0, 0, 0) <=
            new Date(item.startdate).setHours(0, 0, 0, 0)
        )
      )
    );

    this.title.setTitle("JVGH | Evenementen");
    const keywords = "JVGH, evenementen";
    const description = "JVGH | Komende evenementen";

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
        content: "JVGH | Evenementen",
      },
      'property="og:title"'
    );
    this.meta.updateTag(
      {
        property: "og:description",
        content: "JVGH | Komende evenementen",
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
