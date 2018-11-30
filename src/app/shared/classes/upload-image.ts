import {UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions} from 'ngx-uploader';
import {EventEmitter} from '@angular/core';
import {TextPageContent} from '../../shared/models/user.model';

export class UploadImg {
  fileUploaded: any;
  options: UploaderOptions;
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  constructor( ) {
    this.options = {concurrency: 10, maxUploads: 10};
    this.files = []; // local uploading files array
    this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
    this.humanizeBytes = humanizeBytes;
  }
  public textContent = new TextPageContent();

  // Upload IMG
  onUploadOutput(output: UploadOutput, type): void {
    if (output.type === 'allAddedToQueue') {
      this.uploadImg();
    } else if (output.type === 'addedToQueue' && typeof output.file !== 'undefined') { // add file to array when added
      this.files.push(output.file);
    } else if (output.type === 'uploading' && typeof output.file !== 'undefined') {
      // update current data in files array for uploading file
      const index = this.files.findIndex(file => typeof output.file !== 'undefined' && file.id === output.file.id);
      this.files[index] = output.file;
    } else if (output.type === 'removed') {
      // remove file from array when removed
      this.files = this.files.filter((file: UploadFile) => file !== output.file);
    } else if (output.type === 'dragOver') {
      this.dragOver = true;
    } else if (output.type === 'dragOut') {
      this.dragOver = false;
    } else if (output.type === 'drop') {
      this.dragOver = false;
    } else if (output.type === 'done') {
      this.fileUploaded = output.file.response;
      this.uploadResponse(this.fileUploaded, type);
    }
  }

  uploadImg() {
    const authUser = JSON.parse(localStorage.getItem('AuthUser'));
    const event: UploadInput = {
      type: 'uploadAll',
      url: `http://hampton-studio-api.azurewebsites.net/api/upload/image`,
      method: 'POST',
      data: {foo: 'bar'},
      headers: {
        'Authorization': `bearer ${authUser.token}`
      }
    };
    this.uploadInput.emit(event);
  }


  uploadResponse(file, type) {
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({type: 'cancel', id: id});
  }

  removeFile(id: string): void {
    this.uploadInput.emit({type: 'remove', id: id});
  }

  removeAllFiles(): void {
    this.uploadInput.emit({type: 'removeAll'});
  }
}
