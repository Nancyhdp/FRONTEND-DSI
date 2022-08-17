import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FormEmpleadoComponent } from './empleado/form-empleado.component';
import { HabitacionComponent } from './habitacion/habitacion.component';
import { FormHabitacionComponent } from './habitacion/form-habitacion.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { FormDepartamentoComponent } from './departamento/form-departamento.component';
import { CargoComponent } from './cargo/cargo.component';
import { FormCargoComponent } from './cargo/form-cargo.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServicioComponent } from './servicio/servicio.component';
import { FormServicioComponent } from './servicio/form-servicio.component';
import { UsersComponent } from './users/users.component';
import { FormUsersComponent } from './users/form-users.component';
import { LoginComponent } from './login/login.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';


const routes: Routes = [
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path:'barralateral', component: BarraLateralComponent},
  { path: 'inicio', component: InicioComponent },
  { path: 'empleados', component: EmpleadoComponent },
  { path: 'empleados/form', component: FormEmpleadoComponent },
  { path: 'empleados/form/:id', component: FormEmpleadoComponent },
  { path: 'habitaciones', component: HabitacionComponent },
  { path: 'habitaciones/form', component: FormHabitacionComponent },
  { path: 'habitaciones/form/:id', component: FormHabitacionComponent },
  { path: 'departamentos', component: DepartamentoComponent },
  { path: 'departamentos/form', component: FormDepartamentoComponent },
  { path: 'departamentos/form/:id', component: FormDepartamentoComponent },
  { path: 'cargos', component: CargoComponent },
  { path: 'cargos/form', component: FormCargoComponent },
  { path: 'cargos/form/:id', component: FormCargoComponent },
  { path: 'servicios', component: ServicioComponent},
  { path: 'servicios/form', component: FormServicioComponent},
  { path: 'servicios/form/:id', component: FormServicioComponent},
  { path: 'users', component: UsersComponent},
  { path: 'users/form', component: FormUsersComponent},
  { path: 'users/form/:id', component: FormUsersComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any>=RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
