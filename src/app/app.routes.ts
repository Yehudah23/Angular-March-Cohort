import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ParamscomponentComponent } from './paramscomponent/paramscomponent.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { Erro404Component } from './erro404/erro404.component';
import { TemplatevalidationComponent } from './templatevalidation/templatevalidation.component';
import { Behaviouralsubject1Component } from './behaviouralsubject-1/behaviouralsubject-1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { EventemitterComponent } from './eventemitter/eventemitter.component';
import { APIComponent } from './api/api.component';
import { PipeComponent } from './pipe/pipe.component';
import { userGuard } from './guards/user.guard';
import { AngularmaterialComponent } from './angularmaterial/angularmaterial.component';

export const routes: Routes = [
{path:'',component:LandingpageComponent},
{path:'home',redirectTo:'',pathMatch:'full'},
{path:'signup',component:SignupComponent},
{path:'signin',component:SigninComponent},
{path:'dashboard', canActivate:[userGuard], children:[
    {path:'',component:DashboardComponent},
    {path:'settings',component:SettingsComponent},
    {path:':id',component:ParamscomponentComponent}
]},

    {path:'template',component:TemplatevalidationComponent},
    {path:'behave',component:Behaviouralsubject1Component},
    {path:'land',component:LandingpageComponent},
    {path:'react',component:ReactiveformComponent},
    {path:'event',component:EventemitterComponent},
    {path:'link',component:APIComponent},
    {path:'pipe',component:PipeComponent},
    {path:'angularmaterial',component:AngularmaterialComponent},

    {path:'**',component:Erro404Component},
];
