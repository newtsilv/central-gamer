import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SeachInput } from '../../shared/components/seach-input/seach-input';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { RippleModule } from 'primeng/ripple';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FloatLabelModule,
    InputTextModule,
    FormsModule,
    SeachInput,
    AvatarModule,
    ButtonModule,
    DrawerModule,
    RippleModule,

],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
    constructor(private router: Router){}
    value: string | undefined;
    drawerRef: any;
    visible: boolean = false;
    closeCallback(e: any): void {
      this.drawerRef.close(e);
    }
    goToPopular(){
      this.visible = false
      this.router.navigate(['/'])

    }
    gotToBestRated(){
      this.visible = false
      this.router.navigate(['/populares'])
    }
    goToDeveloper(){
      this.visible = false
      this.router.navigate(['/desenvolvedor'])
    }
}
