import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SeachInput } from "../../shared/components/seach-input/seach-input";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FloatLabelModule, InputTextModule, FormsModule, SeachInput],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  value: string | undefined;
}
