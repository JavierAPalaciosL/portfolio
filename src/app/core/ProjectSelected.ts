import {WritableSignal} from '@angular/core';
import Project from './Project';

export default interface ProjectSelected {
  projectSelect: Project;
  writableSignal: WritableSignal<boolean>;
}
