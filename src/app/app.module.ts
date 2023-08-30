import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AsideComponent } from './components/aside/aside.component';
import { PostComponent } from './components/post/post.component';
import { FeedComponent } from './components/feed/feed.component';
import { RoutineShowComponent } from './components/routine/routine-show/routine-show.component';
import { RoutineCreationComponent } from './components/routine/routine-creation/routine-creation.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AsideComponent,
    FeedComponent,
    PostComponent,
    RoutineShowComponent,
    RoutineCreationComponent,
    SettingsComponent,
    ExercicesComponent,
    UserProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
