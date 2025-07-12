import { Component } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {
  arrayNoticias: INoticia[] = [
    {titulo: 'Aviso naranja en 6 comunidades autónomas.', imagen:'https://picsum.photos/id/110/367/267',texto:'Altas temperaturas vienen pronto a estas zonas.',fecha:'10-07-2025'},
    {titulo: 'Perro rescata a niño de una pozo.', imagen:'https://picsum.photos/id/237/3500/2095',texto:'Locales dicen que esta es una manera usual de actuar para el perro, los historiadores se mantienen divididos.',fecha:'12-07-2025'}
  ]
  nuevaNoticia: INoticia = {
    titulo:'',
    imagen:'',
    texto:'',
    fecha:'',
  }
  addNoticia(): void {
    const { titulo, imagen, texto, fecha } = this.nuevaNoticia;

    if (!titulo || !imagen || !texto || !fecha) {
      alert('Debes rellenar todos los campos.');
    } else {
      this.arrayNoticias.push({ ...this.nuevaNoticia });
      this.nuevaNoticia = { titulo: '', imagen: '', texto: '', fecha: '' };
    }
  }
}
