import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ContactService {

  constructor(private http:Http) { }
  getTasks(){
    return this.http.get('http://localhost:8080/api/tasks')
        .map(res => res.json());
  }

  getRegisters(){
    return this.http.get('http://localhost:8080/users/allprofile')
        .map(res => res.json());
  }

  addTask(newTask){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/api/task', JSON.stringify(newTask), {headers: headers})
        .map(res => res.json());
}

deleteTask(id){
  return this.http.delete('http://localhost:8080/api/task/'+id)
      .map(res => res.json());
}

}