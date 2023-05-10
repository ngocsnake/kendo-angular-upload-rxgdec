import { Component } from '@angular/core';

@Component({
  selector: 'my-upload',
  template: `
  <kendo-upload
    [saveUrl]="uploadSaveUrl"
    [removeUrl]="uploadRemoveUrl"
    [autoUpload]="false">
  </kendo-upload>
  `
})
export class UploadComponent {
  uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
  uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint
}

