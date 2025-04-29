import { Routes } from '@angular/router';
import { MainpagesprincipalComponent } from './main-page/pages/mainpagesprincipal/mainpagesprincipal.component';
import { TemariopaginaprincipalComponent } from './temario/Pages/temariopaginaprincipal/temariopaginaprincipal.component';
import { CamaraprincipalComponent } from './camera/Pages/camaraprincipal/camaraprincipal.component';
import { AerobicosclasicosprincipalComponent } from './temario/Pages/aerobicosclasicosprincipal/aerobicosclasicosprincipal.component';
import { BailedeportivoprincipalComponent } from './temario/Pages/bailedeportivoprincipal/bailedeportivoprincipal.component';

import { CardiobasicoprincipalComponent } from './temario/Pages/cardiobasicoprincipal/cardiobasicoprincipal.component';
import { CardioenparejaprincipalComponent } from './temario/Pages/cardioenparejaprincipal/cardioenparejaprincipal.component';
import { CircuitodefuerzafuncionalprincipalComponent } from './temario/Pages/circuitodefuerzafuncionalprincipal/circuitodefuerzafuncionalprincipal.component';
import { CrossfitadaptadoprincipalComponent } from './temario/Pages/crossfitadaptadoprincipal/crossfitadaptadoprincipal.component';
import { EntrenamientofuncionalprincipalComponent } from './temario/Pages/entrenamientofuncionalprincipal/entrenamientofuncionalprincipal.component';
import { EstiramientoymovilidadprincipalComponent } from './temario/Pages/estiramientoymovilidadprincipal/estiramientoymovilidadprincipal.component';
import { GimnasiaparamayoresprincipalComponent } from './temario/Pages/gimnasiaparamayoresprincipal/gimnasiaparamayoresprincipal.component';
import { GimnasiasuaveprincipalComponent } from './temario/Pages/gimnasiasuaveprincipal/gimnasiasuaveprincipal.component';
import { HiitintermedioprincipalComponent } from './temario/Pages/hiitintermedioprincipal/hiitintermedioprincipal.component';
import { HiitparaquemargrasaprincipalComponent } from './temario/Pages/hiitparaquemargrasaprincipal/hiitparaquemargrasaprincipal.component';
import { KickboxingfitnessprincipalComponent } from './temario/Pages/kickboxingfitnessprincipal/kickboxingfitnessprincipal.component';
import { MeditacionyrespiracionprincipalComponent } from './temario/Pages/meditacionyrespiracionprincipal/meditacionyrespiracionprincipal.component';
import { MindfullnessdiarioprincipalComponent } from './temario/Pages/mindfullnessdiarioprincipal/mindfullnessdiarioprincipal.component';
import { MovilidadarticularprincipalComponent } from './temario/Pages/movilidadarticularprincipal/movilidadarticularprincipal.component';
import { PilatesenbandaelasticaprincipalComponent } from './temario/Pages/pilatesenbandaelasticaprincipal/pilatesenbandaelasticaprincipal.component';
import { PilatesencasaprincipalComponent } from './temario/Pages/pilatesencasaprincipal/pilatesencasaprincipal.component';
import { RitmoslatinosprincipalComponent } from './temario/Pages/ritmoslatinosprincipal/ritmoslatinosprincipal.component';
import { TabataexpressprincipalComponent } from './temario/Pages/tabataexpressprincipal/tabataexpressprincipal.component';
import { TabatatrainingprincipalComponent } from './temario/Pages/tabatatrainingprincipal/tabatatrainingprincipal.component';
import { TaichiavanzadoprincipalComponent } from './temario/Pages/taichiavanzadoprincipal/taichiavanzadoprincipal.component';
import { TaichibasicoprincipalComponent } from './temario/Pages/taichibasicoprincipal/taichibasicoprincipal.component';

import { YogaparaexpertosprincipalComponent } from './temario/Pages/yogaparaexpertosprincipal/yogaparaexpertosprincipal.component';
import { YogaparaprincipiantesprincipalComponent } from './temario/Pages/yogaparaprincipiantesprincipal/yogaparaprincipiantesprincipal.component';
import { ZumbafitnessprincipalComponent } from './temario/Pages/zumbafitnessprincipal/zumbafitnessprincipal.component';
import { BodycombatprincipalComponent } from './temario/Pages/bodycombatprincipal/bodycombatprincipal.component';
import { LoginprincipalComponent } from './login/Pages/loginprincipal/loginprincipal.component';
import { RegisterComponent } from './registro/Components/registro/registro.component';
import { RegistropaginaprincipalComponent } from './registro/pages/registropaginaprincipal/registropaginaprincipal.component';
export const routes: Routes = [
  { path: '', component: MainpagesprincipalComponent },
  { path: 'temario', component: TemariopaginaprincipalComponent },
  { path: 'camera', component: CamaraprincipalComponent },

  { path: 'temario/aerobicosclasicos', component: AerobicosclasicosprincipalComponent },
  { path: 'temario/bailedeportivo', component: BailedeportivoprincipalComponent },
  { path: 'temario/bodycombat', component: BodycombatprincipalComponent },
  { path: 'temario/cardiobasico', component: CardiobasicoprincipalComponent },
  { path: 'temario/cardioenpareja', component: CardioenparejaprincipalComponent },
  { path: 'temario/circuitodefuerza-funcional', component: CircuitodefuerzafuncionalprincipalComponent },
  { path: 'temario/crossfitadaptado', component: CrossfitadaptadoprincipalComponent },
  { path: 'temario/entrenamientofuncional', component: EntrenamientofuncionalprincipalComponent },
  { path: 'temario/estiramientoy-movilidad', component: EstiramientoymovilidadprincipalComponent },
  { path: 'temario/gimnasia-paramayores', component: GimnasiaparamayoresprincipalComponent },
  { path: 'temario/gimnasiasuave', component: GimnasiasuaveprincipalComponent },
  { path: 'temario/hiitintermedio', component: HiitintermedioprincipalComponent },
  { path: 'temario/hiit-paraquemar-grasa', component: HiitparaquemargrasaprincipalComponent },
  { path: 'temario/kickboxingfitness', component: KickboxingfitnessprincipalComponent },
  { path: 'temario/meditaciony-respiracion', component: MeditacionyrespiracionprincipalComponent },
  { path: 'temario/mindfullnessdiario', component: MindfullnessdiarioprincipalComponent },
  { path: 'temario/movilidadarticular', component: MovilidadarticularprincipalComponent },
  { path: 'temario/pilatesen-banda-elastica', component: PilatesenbandaelasticaprincipalComponent },
  { path: 'temario/pilatesen-casa', component: PilatesencasaprincipalComponent },
  { path: 'temario/ritmoslatinos', component: RitmoslatinosprincipalComponent },
  { path: 'temario/tabataexpress', component: TabataexpressprincipalComponent },
  { path: 'temario/tabatatraining', component: TabatatrainingprincipalComponent },
  { path: 'temario/taichiavanzado', component: TaichiavanzadoprincipalComponent },
  { path: 'temario/taichibasico', component: TaichibasicoprincipalComponent },
  { path: 'temario/temariopagina', component: TemariopaginaprincipalComponent },
  { path: 'temario/yoga-paraexpertos', component: YogaparaexpertosprincipalComponent },
  { path: 'temario/yoga-paraprincipiantes', component: YogaparaprincipiantesprincipalComponent },
  { path: 'temario/zumbafitness', component: ZumbafitnessprincipalComponent },
  { path: 'login', component: LoginprincipalComponent }, 
  {path: 'registro', component:RegistropaginaprincipalComponent },
  { path: '**', redirectTo: '' }
  

];
