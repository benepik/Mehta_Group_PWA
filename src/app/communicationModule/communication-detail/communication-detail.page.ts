import { jsDocComment } from '@angular/compiler';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApiService } from 'src/app/provider/api.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { URLS } from 'src/assets/constant';
@Component({
  selector: 'app-communication-detail',
  templateUrl: './communication-detail.page.html',
  styleUrls: ['./communication-detail.page.scss'],
})
export class CommunicationDetailPage implements OnInit {
  community: any;
  comment:string='';
  noComment: any;
  communicationHomeData: any;
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    spaceBetween:10,
  };
  loginAllData: any;
  constructor(public activeRoute: ActivatedRoute, private router: Router, public zone: NgZone,
    private apiService: ApiService, public sendData: DataTransferService,private localStorgae:LocalStorageService) {
    this.communicationHomeData = this.sendData.alldata;
    this.localStorgae.getStorage().then(storedData=>{
      this.loginAllData=storedData.allStoreData;
      console.log('storedData',storedData);
    });
  }
  ionViewWillEnter(){
    this.communicationDetails();
  
  }
  ngOnInit() {
    // this.communicationDetails();
  }
  doLike(data) {
    this.zone.run(() => {
      if(data.like_status==0){
        data.total_likes =parseInt(data.total_likes)+1; 
        data.like_status=1;
      }else{
        data.total_likes=parseInt(data.total_likes)-1;    
        data.like_status=0;
      }
      let apiKey = {
        "flag_type": this.communicationHomeData.flag_type,
        "post_id": this.communicationHomeData.post_id
      }
      this.apiService.apiCallWithLoginToken(URLS.DoLike, apiKey).subscribe((result) => {
        console.log("DoLike: ", result);
        if (result.success == 1) {
          // if (result.message == "Post unliked.") {
          //   this.community.data.like_status=0;
          //   if (this.community.data.total_likes != "0") {             
          //     this.community.data.total_likes =parseInt(this.community.data.total_likes) - 1;          
          //     console.log("DoLike1: ",  this.community.data.like_status);
          //   }
          //   else {
          //     this.community.data.total_likes = 0;
          //   }
          // }else if(result.message == "Post liked."){
          //   this.community.data.total_likes = parseInt(this.community.data.total_likes) + 1;
          //   this.community.data.like_status=1;
          //   console.log("DoLike: ",  this.community.data.like_status);
          // }
        }
      });
    })

  }
  communicationDetails() {
    this.apiService.presentLoadingDefault();
    this.zone.run(() => {
      let apiKey = {
        "flag_type": this.communicationHomeData.flag_type,
        "post_id": this.communicationHomeData.post_id
      }
      this.apiService.apiCallWithLoginToken(URLS.PostDetailUrl, apiKey).subscribe((result) => {
        console.log("PostListUrl: ", result);
          this.apiService.presentLoadingClose();
        if (result.success == 1) {
          this.community = result;
          this.noComment = this.community.data.total_comments;
        }
      },err=>{
        this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
      });
    })
  }

  doComment(text) {
    this.zone.run(() => {
      let apiKey = {
        "flag_type":this.communicationHomeData.flag_type,
        "post_id": this.communicationHomeData.post_id,
        "comment": this.comment
      }

      let obj={
        "full_name": this.loginAllData.full_name,
        "convert_time":"Just now",
        "comments":text,
        "comment_align":"right"


      };
      if(this.community.data.total_comments==0){
        this.noComment=1;
      }
      
      this.community.data.comments.unshift(obj);
      this.community.data.total_comments=parseInt(this.community.data.total_comments)+1;
     console.log('this community',this.community);
      if (apiKey["comment"] != "") {
        console.log(apiKey["comment"]);
        this.apiService.apiCallWithLoginToken(URLS.DoCommentUrl, apiKey).subscribe((result) => {
          console.log("DoCommentUrl: ", result);
          if (result.success == 1) {
            this.comment= "";
          }
        });
      }
    });
  }

}
