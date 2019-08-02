import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs'
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { environment } from 'environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  public imgBaseURL = environment.userApiUrl + 'downloads';

  constructor(
    private http: HttpClient
  ) { }

  // ---------------------------------------------------------------------------------
  private changeProfileDetailsSource = new Subject<string>();
  changeProfileDetails$ = this.changeProfileDetailsSource.asObservable();
  
  changeProfileDetails(userName) {
    this.changeProfileDetailsSource.next(userName);
  }
  // ---------------------------------------------------------------------------------
  
  
  
  // ---------------------------------------------------------------------------------
  private changeProfilePictureSource = new Subject<string>();
  changeProfilePicture$ = this.changeProfilePictureSource.asObservable();
  public profileImg;
  
  changeProfilePicture(userId) {
    
    this.getUserProfile(userId).subscribe(data => {
      this.createImageFromBlob(data);
    }, error => {
      this.profileImg = "http://localhost:4200/assets/images/cp_users/placeholder-user.png";
      this.changeProfilePictureSource.next(this.profileImg);
      console.log("---------------------- getUserProfile error", error);
    });
    
  }
  
  getUserProfile(id): Observable<Blob> {
    return this.http.get(this.imgBaseURL + "/user/" + id, { responseType: 'blob' });
  }
  
  createImageFromBlob(image: Blob) {
    
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.profileImg = event.target.result.replace("application", "image").replace("octet-stream", "webp");
      this.changeProfilePictureSource.next(this.profileImg);
    };
    
    if (image) {
      reader.readAsDataURL(image);
    }
    
  }
  // ---------------------------------------------------------------------------------


  
}
