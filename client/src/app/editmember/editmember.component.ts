import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-editmember',
  templateUrl: './editmember.component.html',
  styleUrls: ['./editmember.component.css']
})

export class editmemberComponent implements OnInit {

  member: any = [];
  id: number;
  private sub: any;
  editForm: boolean = false;



  firstName: any;
  middleName: any;
  lastName: any;
  profession: any;
  jobPosition: any;
  mobileNumber: any;
  homeAddress: any;
  officeAddress: any;
  emailId: any;
  homeLandline: any;
  officeLandline: any;
  hobby: any;
  PreviousOrganisation: any;
  memberRankLevel: any;
  memberstatus: any;
  memberEarnedPoints: any;


  constructor(private memberService: MemberService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params.id)
      this.id = params['id'];
      this.getMemberbyid(this.id);
    });

  }

  getMemberbyid(_id) {
    this.memberService.getMemberbyid(_id).subscribe((list: any) => {
      this.member = list;
    })

  }

  editData() {
    this.editForm = true;
    this.firstName = this.member[0].firstName
    this.middleName = this.member[0].middleName
    this.lastName = this.member[0].lastName
    this.profession = this.member[0].profession
    this.jobPosition = this.member[0].jobPosition
    this.mobileNumber = this.member[0].mobileNumber
    this.homeAddress = this.member[0].homeAddress
    this.officeAddress = this.member[0].officeAddress
    this.emailId = this.member[0].emailId
    this.homeLandline = this.member[0].homeLandline
    this.officeLandline = this.member[0].officeLandline
    this.hobby = this.member[0].hobby
    this.PreviousOrganisation = this.member[0].PreviousOrganisation
    this.memberRankLevel = this.member[0].memberRankLevel
    this.memberstatus = this.member[0].memberstatus
    this.memberEarnedPoints = this.member[0].memberEarnedPoints
  }

  updateData() {

    let data = {
      "firstName": this.firstName,
      "middleName": this.middleName,
      "lastName": this.lastName,
      "profession": this.profession,
      "jobPosition": this.jobPosition,
      "mobileNumber": this.mobileNumber,
      "homeAddress": this.homeAddress,
      "officeAddress": this.officeAddress,
      "emailId": this.emailId,
      "homeLandline": this.homeAddress,
      "officeLandline": this.officeLandline,
      "hobby": this.hobby,
      "PreviousOrganisation": this.PreviousOrganisation,
      "memberRankLevel": this.memberRankLevel,
      "memberstatus": this.memberstatus,
      "memberEarnedPoints": this.memberEarnedPoints
    }
    this.memberService.updateMemberByID(this.id, data).subscribe((list: any) => {
      this.ngOnInit();
      this.editForm = false;
    })
  }


}


