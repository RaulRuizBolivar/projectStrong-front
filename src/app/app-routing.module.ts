import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { RoutineListComponent } from './components/routine/routine-list/routine-list.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ExercicesComponent } from './components/exercices/exercices.component';

const routes: Routes = [
  { path: 'feed', title: 'feed', component: FeedComponent },
  { path: 'routine', title: 'routine', component: RoutineListComponent },
  { path: 'settings', title: 'settings', component: SettingsComponent },
  { path: 'profile', title: 'profile', component: UserProfileComponent },
  { path: 'exercices', title: 'exercices', component: ExercicesComponent },

  { path: '**', redirectTo: '/feed' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
