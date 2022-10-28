import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { url } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }
  getMembers(): Observable<any> {
    return this.http.get(url.domainurl + 'getmembers');
  }
  getMemberbyid(id): Observable<any> {
    return this.http.get(url.domainurl + 'getmember/' + id);
  }

  updateMemberByID(id, data): Observable<any> {
    return this.http.put(url.domainurl + 'updatemember/' + id, data);
  }
}

