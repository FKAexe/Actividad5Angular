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
    {titulo: 'Aviso naranja en 6 comunidades autónomas.', imagen:'https://picsum.photos/id/110/367/267',texto:'En una España donde el calor parece desencadenar mutaciones regionales, Galicia ha desarrollado una resistencia emocional al bochorno donde nadie suda y todos reflexionan, mientras en Andalucía las guitarras flamencas se derriten creando un nuevo género llamado “flamenco fundido” con abanicos solares incluidos; en Cataluña, el pan se tuesta automáticamente al salir del súper, y en L’Hospitalet se debate si el calor agudiza la creatividad o simplemente empuja a instalar aire acondicionado comunitario; Asturias observa con asombro cómo sus vacas pastan bajo sombrillas y ya usan protector solar bovino, comercializado como “SPF Moo-50”; La Rioja, por su parte, ve sus uvas fermentar antes de ser recogidas, generando vino exprés directamente de la parra que debe servirse con abundante hielo; y en Castilla-La Mancha, las gallinas se han radicalizado, negándose a poner huevos antes de las 21:00, iniciando así un posible movimiento sindical avícola con sede en Toledo. Todo esto, claro, bajo la sospecha de que el calor no solo transforma paisajes, sino también el carácter de sus habitantes y su fauna.',fecha:'10-07-2025'},
    {titulo: 'Perro rescata a niño de una pozo.', imagen:'https://picsum.photos/id/237/3500/2095',texto:'En el pintoresco pueblo imaginario de Villatopo, donde las cabras tienen preferencia de paso, un perro llamado Churro —mestizo de pastor alemán y bailarín de pasodoble— protagonizó una hazaña heroica cuando escuchó los gritos de auxilio de Mateo, un niño apasionado por la ciencia y el helado de chicle, que había caído en un antiguo pozo utilizado secretamente por ovejas conspiradoras; sin dudarlo, Churro corrió al pueblo ladrando un mensaje en Morse improvisado que, tras una enérgica interpretación vecinal, llevó a tres lugareños a seguirlo hasta el pozo, donde el valiente can sujetó una cuerda con la boca y, junto con los aldeanos, logró rescatar a Mateo, aún aferrado a su hoja de Excel llena de ecuaciones; el acto heroico le valió a Churro el título de "Alcalde Honorífico de Emergencias Subterráneas" y una medalla de chorizo envuelta en papel de aluminio que porta con orgullo todos los domingos mientras inspecciona los pozos del pueblo como si fueran pistas de baile.',fecha:'12-07-2025'}
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
