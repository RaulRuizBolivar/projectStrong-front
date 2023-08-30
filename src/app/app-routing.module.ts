import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { RoutineListComponent } from './components/routine/routine-list/routine-list.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ExercicesComponent } from './components/exercices/exercices.component';

const routes: Routes = [
  { path: '**', redirectTo: '/feed' },
  { path: 'feed', component: FeedComponent },
  { path: 'routine', component: RoutineListComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'exercices', component: ExercicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
