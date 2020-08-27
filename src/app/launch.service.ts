import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LaunchService {
url = "https://api.spaceXdata.com/v3/launches?limit=100"
launchscc ="https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true"
landingscc ="https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true"
all = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014"

  constructor(private http:HttpClient) { }
  

  getAlllaunch() {
    return this.http.get<any>(this.url);
    
  }
  getLaunchscc() {
    return this.http.get<any>(this.launchscc);
    
  }
  getLandingscc() {
    return this.http.get<any>(this.landingscc);
    
  }
  getAllrocket() {
    return this.http.get<any>(this.all);
    
  }
}
