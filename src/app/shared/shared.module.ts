import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { MaterialModule } from './modules/material.module';
import { NavigationComponent } from './layout/navigation/navigation.component';

@NgModule({
  declarations: [HeaderComponent, NavigationComponent],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent, MaterialModule, NavigationComponent],
})
export class SharedModule {}
