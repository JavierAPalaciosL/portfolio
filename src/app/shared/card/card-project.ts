import {Component, EventEmitter, Input, Output, signal, WritableSignal} from '@angular/core';
import Project from '../../core/Project';
import ProjectSelected from '../../core/ProjectSelected';

@Component({
  selector: 'app-card-project',
  standalone: false,
  templateUrl: './card-project.html',
  styleUrl: './card-project.css'
})
export class CardProject {
  @Input() project!: Project;
  @Output() onSave: EventEmitter<ProjectSelected> = new EventEmitter();

  isVisible: WritableSignal<boolean> = signal(false);

  spawner(project: Project): void {
    this.isVisible.set(!this.isVisible().valueOf());
    this.onSave.emit({projectSelect : project, writableSignal : this.isVisible});
  }

}
