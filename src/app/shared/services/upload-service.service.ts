import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {


    FOLDER = 'jsa-s3/';

  constructor() { }

  uploadfile(file) {

    const bucket = new S3(
      {
        accessKeyId: '',
        secretAccessKey: '',
        region: 'us-east-1'
      }
    );

    const params = {
      Bucket: '',
      Key: file.name,
      Body: file,
      
    };

    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }

      console.log('Successfully uploaded file.', data);
      return true;
    });
  }

}
