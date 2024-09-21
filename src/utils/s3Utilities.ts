import fs from 'fs';
import { s3 } from '../config/s3';

/**
 * Upload a file to S3 bucket
 * @param {string} filePath - The local path of the file to upload
 * @param {string} fileName - The desired file name in the S3 bucket
 * @returns {Promise} - Returns a promise with the uploaded file's URL
 */

export const uploadToS3 = (filePath: string, fileName: string): Promise<string> => {
    const fileContent = fs.readFileSync(filePath);
  
    // S3 upload parameters
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME!,
      Key: fileName, // The name of the file in S3
      Body: fileContent,
      ContentType: 'image/jpeg',
    };
  
    return new Promise((resolve, reject) => {
      s3.upload(params, (err: any, data: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.Location); // Return the file URL from S3
        }
      });
    });
};
  