import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'new-student',
    loadChildren: () => import('./pages/new-student/new-student.module').then( m => m.NewStudentPageModule)
  },
  {
    path: 'new-note',
    loadChildren: () => import('./pages/new-note/new-note.module').then( m => m.NewNotePageModule)
  },
  {
    path: 'show-note',
    loadChildren: () => import('./pages/show-note/show-note.module').then( m => m.ShowNotePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
