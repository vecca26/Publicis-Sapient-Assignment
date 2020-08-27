import { Component } from '@angular/core';
import { LaunchService } from './launch.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private launchall: LaunchService){}
  title = 'PublicisSapient';
  developed = 'Vivekanand N Mestha';
  launchs={}
  success={}
  landing={}
  newlaunchs = {}
  isDefault
  allRock
  allrockets
allsucess
allLanding
variable
  ngOnInit(){
   this.isDefault =true
   
    this.launchall.getAlllaunch().subscribe((record)=>{
      console.warn('record',record)
      this.launchs=record;
    })
  }
onSuccesss(){
  this.allsucess = true
  this.isDefault = false
  this.allLanding = false
  this.allRock = false
  this.variable = false
  this.launchall.getLaunchscc().subscribe((hold)=>{
    console.warn('hold',hold)
    this.success=hold;
  })
}
onLanding(){
  this.allLanding = true
  this.allsucess = false
  this.isDefault = false
  this.allRock = false
  this.variable = false
  this.launchall.getLandingscc().subscribe((land)=>{
    console.warn('land',land)
    this.landing=land;
  })
}
onAlllaunch(){
  this.allRock = true
  this.allLanding = false
  this.allsucess = false
  this.isDefault = false
  this.variable = false
  this.launchall.getAllrocket().subscribe((all)=>{
    console.warn('all',all)
    this.allrockets=all;
  })
}
onDefault(){
  this.allRock = false
  this.allLanding = false
  this.allsucess = false
  this.isDefault = false
  this.variable = true
  this.launchall.getAlllaunch().subscribe((newrecord)=>{
    console.warn('newrecord',newrecord)
    this.newlaunchs=newrecord;
  })
}
}
