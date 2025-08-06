import {Component, EventEmitter, Input, OnInit, Output, signal, WritableSignal} from '@angular/core';
import Project from '../../core/Project';
import ProjectSelected from '../../core/ProjectSelected';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-card-project',
  standalone: false,
  templateUrl: './card-project.html',
  styleUrl: './card-project.css'
})
export class CardProject implements OnInit{
  @Input() project!: Project;
  @Output() onSave: EventEmitter<ProjectSelected> = new EventEmitter();
  videoUrl!: SafeResourceUrl;

  isVisible: WritableSignal<boolean> = signal(false);

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    const id = this.project.image.match(/\/d\/(.+?)\//)?.[1];
    const embed = id
      ? `https://drive.google.com/file/d/${id}/preview`
      : this.project.image;

    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embed);
  }

  spawner(project: Project): void {
    this.isVisible.set(!this.isVisible().valueOf());
    this.onSave.emit({projectSelect : project, writableSignal : this.isVisible});
  }

}
