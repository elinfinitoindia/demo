import { Component, OnInit } from '@angular/core';
import { UploadServiceService } from 'src/app/shared/services/upload-service.service';

@Component({
  selector: 'app-create-images',
  templateUrl: './create-images.component.html',
  styleUrls: ['./create-images.component.scss']
})
export class CreateImagesComponent implements OnInit {
  selectedFiles: FileList;

  constructor(private uploadService: UploadServiceService) { }

  ngOnInit() {
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadfile(file);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
