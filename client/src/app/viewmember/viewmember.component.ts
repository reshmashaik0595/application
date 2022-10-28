import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';


@Component({
  selector: 'app-viewmember',
  templateUrl: './viewmember.component.html',
  styleUrls: ['./viewmember.component.css']
})
export class ViewmemberComponent implements OnInit {
  members: any = [];

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.memberService.getMembers().subscribe((list: any) => {
      this.members = list;
      // alert(this.members[0]._id)
    })
  }

  // editMember(id){
  //   console.log("Calling")
  //   console.log(id)
  // }

}


