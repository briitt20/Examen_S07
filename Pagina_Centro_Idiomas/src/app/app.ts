import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Programas } from './ComponenteProgramas/programas/programas';

@Component({
  imports: [RouterOutlet, Programas],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Pagina_Centro_Idiomas');
}
