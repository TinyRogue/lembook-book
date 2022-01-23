import { Injectable } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons/faQuestionCircle';

@Injectable()
export class ProfileUtils {
  getIcon(name: string): IconDefinition {
    switch (name) {
      default:
        return faQuestionCircle;
    }
  }
}
