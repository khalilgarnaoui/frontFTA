import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TeamsComponent} from './teams/teams.component';
import {PlayersComponent} from './players/players.component';
import {SinglePlayerComponent} from './single-player/single-player.component';
import {ResultsComponent} from './results/results.component';
import {TablePointComponent} from './table-point/table-point.component';
import {GroupsComponent} from './groups/groups.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {NewsComponent} from './news/news.component';
import {SingleNewsComponent} from './single-news/single-news.component';
import {TopplayerComponent} from './topplayer/topplayer.component';
import {AthlesanteComponent} from './athlesante/athlesante.component';
import {ProjetComponent} from './athlesante/projet/projet.component';
import {ProgrammeComponent} from './athlesante/programme/programme.component';
import {ListeParticipantComponent} from './formations/liste-participant/liste-participant.component';
import {RecordComponent} from './home/record/record.component';
import {RecordinComponent} from './home/record/recordin/recordin.component';
import {RecordfemComponent} from './home/record/recordfem/recordfem.component';
import {Champarabe20Component} from './home/champarabe20/champarabe20.component';
import {CommissionFederaleComponent} from './commission-federale/commission-federale.component';
import {BureauComponent} from './bureau/bureau.component';
import {ClubsComponent} from './clubs/clubs.component';
import {SingleClubComponent} from './single-club/single-club.component';
import {LiguesComponent} from './ligues/ligues.component';
import {SingleLigueComponent} from './single-ligue/single-ligue.component';
import {PresentationComponent} from './presentation/presentation.component';
import {AffiliatedClubsComponent} from './affiliated-clubs/affiliated-clubs.component';
import {Formation20Component} from './formations/formation20/formation20.component';
import {RecordHComponent} from './home/record/record-h/record-h.component';
import {ReglementsComponent} from './reglements/reglements.component';
import {ReglementComponent} from './reglement/reglement.component';
import {CentreDeFormationComponent} from './centre-de-formation/centre-de-formation.component';
import {EvenementDetailComponent} from './evenement/evenement-detail/evenement-detail.component';
import {EvenementComponent} from './evenement/evenement.component';
import {GallerieComponent} from './galerie/gallerie.component';
import {GalerieDetailComponent} from './galerie/galerie-detail/galerie-detail.component';
import {ListCompComponent} from './competitions/list-comp/list-comp.component';
import {CategoriesComponent} from './competitions/categories/categories.component';
import {ListCalComponent} from './calendrier-competition/list-cal/list-cal.component';
import {MinimasAthleteCibleComponent} from './competitions/minimas-athlete-cible/minimas-athlete-cible.component';
import {BenjaminMinimeComponent} from './competitions/benjamin-minime/benjamin-minime.component';
import {CompMasterComponent} from './comp-master/comp-master.component';
import {ChampTunMSRradesComponent} from './results/champ-tun-msrrades/champ-tun-msrrades.component';
import {QuadriathlonComponent} from './results/quadriathlon/quadriathlon.component';
import {Champ10000mComponent} from './results/champ10000m/champ10000m.component';
import {HeptathlonComponent} from './results/heptathlon/heptathlon.component';
import {DecathlonComponent} from './results/decathlon/decathlon.component';
import {ChampPisteComponent} from './results/champ-piste/champ-piste.component';
import {ChampMSRHComponent} from './results/champ-msrh/champ-msrh.component';
import {ChampAfr2019Component} from './results/champ-afr2019/champ-afr2019.component';
import {ChampArCComponent} from './results/champ-ar-c/champ-ar-c.component';
import {FinalCCComponent} from './results/final-cc/final-cc.component';
import {FormDemandeLicenceEntraineurComponent} from './form/form-demande-licence-entraineur/form-demande-licence-entraineur.component';
import {FormDemandeLicenceDirigeantComponent} from './form/form-demande-licence-dirigeant/form-demande-licence-dirigeant.component';
import {FormDemandeLicenceAthletePromotionComponent} from './form/form-demande-licence-athlete-promotion/form-demande-licence-athlete-promotion.component';
import {FormDemandeLicenceAthleteComponent} from './form/form-demande-licence-athlete/form-demande-licence-athlete.component';
import {FormDemandeLicenceRunnerComponent} from './form/form-demande-licence-runner/form-demande-licence-runner.component';
import {FormDemandeLicenceMasterComponent} from './form/form-demande-licence-master/form-demande-licence-master.component';
import {NosDocumentsComponent} from './nos-documents/nos-documents.component';
import {ChampionnatComponent} from './competitions/championnat/championnat.component';
import {FormDemandeJugeComponent} from './form/form-demande-juge/form-demande-juge.component';
import {DemandeMutationComponent} from './form/demande-mutation/demande-mutation.component';
import {DemandeAffiliationComponent} from './form/demande-affiliation/demande-affiliation.component';
import {EngagementLicenseComponent} from './engagement-license/engagement-license.component';
import {MsrJuniorsComponent} from './results/champ-tun-msrrades/msr-juniors/msr-juniors.component';
import {MsrJuniorsFComponent} from './results/champ-tun-msrrades/msr-juniors-f/msr-juniors-f.component';
import {MsrJuniorsMComponent} from './results/champ-tun-msrrades/msr-juniors-m/msr-juniors-m.component';
import {MsrSeniorsMComponent} from './results/champ-tun-msrrades/msr-seniors-m/msr-seniors-m.component';
import {MsrSeniorsFComponent} from './results/champ-tun-msrrades/msr-seniors-f/msr-seniors-f.component';
import {QuadriMinMComponent} from './results/quadriathlon/quadri-min-m/quadri-min-m.component';
import {QuadriMinFComponent} from './results/quadriathlon/quadri-min-f/quadri-min-f.component';
import {Champ10JuniorsFComponent} from './results/champ10000m/champ10-juniors-f/champ10-juniors-f.component';
import {Champ10JuniorsMComponent} from './results/champ10000m/champ10-juniors-m/champ10-juniors-m.component';
import {Champ10SeniorsFComponent} from './results/champ10000m/champ10-seniors-f/champ10-seniors-f.component';
import {Champ10SeniorsMComponent} from './results/champ10000m/champ10-seniors-m/champ10-seniors-m.component';
import {DecCadetComponent} from './results/decathlon/dec-cadet/dec-cadet.component';
import {DecJuniorsComponent} from './results/decathlon/dec-juniors/dec-juniors.component';
import {DecSeniorsComponent} from './results/decathlon/dec-seniors/dec-seniors.component';
import {MsrhCdtFComponent} from './results/champ-msrh/msrh-cdt-f/msrh-cdt-f.component';
import {MsrhCdtMComponent} from './results/champ-msrh/msrh-cdt-m/msrh-cdt-m.component';
import {MsrhJunFComponent} from './results/champ-msrh/msrh-jun-f/msrh-jun-f.component';
import {MsrhJunMComponent} from './results/champ-msrh/msrh-jun-m/msrh-jun-m.component';
import {MsrhMinFComponent} from './results/champ-msrh/msrh-min-f/msrh-min-f.component';
import {MsrhMinMComponent} from './results/champ-msrh/msrh-min-m/msrh-min-m.component';
import {MsrhSenFComponent} from './results/champ-msrh/msrh-sen-f/msrh-sen-f.component';
import {MsrhSenMComponent} from './results/champ-msrh/msrh-sen-m/msrh-sen-m.component';
import {FinalccCdtFComponent} from './results/final-cc/finalcc-cdt-f/finalcc-cdt-f.component';
import {FinalccCdtMComponent} from './results/final-cc/finalcc-cdt-m/finalcc-cdt-m.component';
import {FinalccJunMComponent} from './results/final-cc/finalcc-jun-m/finalcc-jun-m.component';
import {FinalccJunFComponent} from './results/final-cc/finalcc-jun-f/finalcc-jun-f.component';
import {FinalccMinFComponent} from './results/final-cc/finalcc-min-f/finalcc-min-f.component';
import {FinalccMinMComponent} from './results/final-cc/finalcc-min-m/finalcc-min-m.component';
import {FinalccSenMComponent} from './results/final-cc/finalcc-sen-m/finalcc-sen-m.component';
import {FinalccSenFComponent} from './results/final-cc/finalcc-sen-f/finalcc-sen-f.component';
import {CompetitionDetailComponent} from './competitions/competition-detail/competition-detail.component';
import {DemandeSessionComponent} from './form/demande-session/demande-session.component';
import {EngagementComponent} from './athlesante/engagement/engagement.component';
import {FormationDetailComponent} from './formations/formation-detail/formation-detail.component';

import {RunningComponent} from './athlesante/running/running.component';
import {ConseilsComponent} from './athlesante/conseils/conseils.component';
import {FormComponent} from './athlesante/form/form.component';
import {ModaliteComponent} from './athlesante/modalite/modalite.component';
import {LoginComponent} from './login/login.component';
import {PaiementComponent} from './athlesante/paiement/paiement.component';


function MCompMasterComponent() {
}

const routes: Routes = [


  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'presentation',
    component: PresentationComponent,
  },
  {
    path: 'recordH',
    component: RecordHComponent,
  },
  {
    path: 'commissions',
    component: CommissionFederaleComponent,
  },
  {
    path: 'player-list',
    component: PlayersComponent,
  },
  {
    path: 'reglements',
    component: ReglementsComponent,
  },

  {
    path: 'reglement',
    component: ReglementComponent,
  },
  {
    path: 'masters',
    component: CompMasterComponent,
  },
  {
    path: 'affiliated-clubs',
    component: AffiliatedClubsComponent,
  },
  // {
  //   path: 'nos-documents',
  //   component: NosDocumentsComponent,
  // },
  {
    path: 'demande-mutation',
    component: DemandeMutationComponent,
  },
  {
    path: 'demande-affiliation',
    component: DemandeAffiliationComponent,
  },
  {
    path: 'licence-master',
    component: FormDemandeLicenceMasterComponent,
  },
  {
    path: 'licence-runner',
    component: FormDemandeLicenceRunnerComponent,
  },
  {
    path: 'licence-athlete',
    component: FormDemandeLicenceAthleteComponent,
  },
  {
    path: 'licence-athlete-promotion',
    component: FormDemandeLicenceAthletePromotionComponent,
  },
  {
    path: 'licence-dirigeant',
    component: FormDemandeLicenceDirigeantComponent,
  },
  {
    path: 'licence-entraineur',
    component: FormDemandeLicenceEntraineurComponent,
  },
  {
    path: 'demande-juge',
    component: FormDemandeJugeComponent,
  },
  {
    path: 'bureau',
    component: BureauComponent,
  },
  {
    path: 'ligues',
    component: LiguesComponent,
  },
  {
    path: 'clubs',
    component: ClubsComponent,
  },
  {
    path: 'listeAthletes',
    component: PlayersComponent,
  },
  {
    path: 'liste_participant',
    component: ListeParticipantComponent,
  },
  {
    path: 'Programme',
    component: ProgrammeComponent,
  },
  {
    path: 'records_In',
    component: RecordinComponent,
  },
  {
    path: 'records',
    component: RecordComponent,
  },
  {
    path: 'Projet',
    component: ProjetComponent,
  },
  {
    path: 'engagement-licence',
    component: EngagementLicenseComponent,
  },
  {
    path: 'demandesession',
    component: DemandeSessionComponent,
  },
  {
    path: 'msrJuniors',
    component: MsrJuniorsComponent,
  },
  {
    path: 'msrJuniorsF',
    component: MsrJuniorsFComponent,
  },
  {
    path: 'msrJuniorsM',
    component: MsrJuniorsMComponent,
  },
  {
    path: 'msrSeniorsM',
    component: MsrSeniorsMComponent,
  },
  {
    path: 'msrSeniorsF',
    component: MsrSeniorsFComponent,
  },
  {
    path: 'champ10SeniorsF',
    component: Champ10SeniorsFComponent,
  },
  {
    path: 'champ10SeniorsM',
    component: Champ10SeniorsMComponent,
  },
  {
    path: 'champ10JuniorsF',
    component: Champ10JuniorsFComponent,
  },
  {
    path: 'champ10JuniorsM',
    component: Champ10JuniorsMComponent,
  },
  {
    path: 'quadriMinimeF',
    component: QuadriMinFComponent,
  },
  {
    path: 'quadriMinimeM',
    component: QuadriMinMComponent,
  },
  {
    path: 'hepthCadet',
    component: DecCadetComponent,
  },
  {
    path: 'hepthJuniors',
    component: DecJuniorsComponent,
  },
  {
    path: 'hepthSeniors',
    component: DecSeniorsComponent,
  },
  {
    path: 'msrhMinimeM',
    component: MsrhMinMComponent,
  },
  {
    path: 'msrhMinimeF',
    component: MsrhMinFComponent,
  },
  {
    path: 'msrhJuniorsF',
    component: MsrhJunFComponent,
  },
  {
    path: 'msrhJuniorsM',
    component: MsrhJunMComponent,
  },
  {
    path: 'msrhSeniorsM',
    component: MsrhSenMComponent,
  },
  {
    path: 'msrhSeniorsF',
    component: MsrhSenFComponent,
  },
  {
    path: 'msrhCadetM',
    component: MsrhCdtMComponent,
  },
  {
    path: 'msrhCadetF',
    component: MsrhCdtFComponent,
  },
  {
    path: 'fccMinimeM',
    component: FinalccMinMComponent,
  },
  {
    path: 'fccMinimeF',
    component: FinalccMinFComponent,
  },
  {
    path: 'fccJuniorsF',
    component: FinalccJunFComponent,
  },
  {
    path: 'fccJuniorsM',
    component: FinalccJunMComponent,
  },
  {
    path: 'fccSeniorsM',
    component: FinalccSenMComponent,
  },
  {
    path: 'fccSeniorsF',
    component: FinalccSenFComponent,
  },
  {
    path: 'fccCadetM',
    component: FinalccCdtMComponent,
  },
  {
    path: 'fccCadetF',
    component: FinalccCdtFComponent,
  },
  {
    path: 'records_Dame',
    component: RecordfemComponent,
  },
  {
    path: 'course',
    component: ChampionnatComponent,
  },
  {
    path: 'athlesante',
    component: AthlesanteComponent,
  },
  {
    path: 'engagement-athle',
    component: EngagementComponent,
  },
  {
    path: 'formulaire-adhesion',
    component: FormComponent,
  },
  {
    path: 'modalite-paiement',
    component: ModaliteComponent,
  },
  {
    path: 'paiement',
    component: PaiementComponent,
  },
  {
    path: 'running',
    component: RunningComponent,
  },
  {
    path: 'conseils',
    component: ConseilsComponent,
  },
  {
    path: 'team-list',
    component: TeamsComponent,
  },
  {
    path: 'formation_20',
    component: Formation20Component,
  },
  {
    path: 'results',
    component: ResultsComponent,
  },
  {
    path: 'point-table',
    component: TablePointComponent,
  },
  {
    path: 'groups',
    component: GroupsComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'champ_arabe20',
    component: Champarabe20Component,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'single-news',
    component: SingleNewsComponent,
  },
  {
    path: 'TopPlayers',
    component: TopplayerComponent,
  },
  {
    path: 'centre_de_formation',
    component: CentreDeFormationComponent,
  },
  {
    path: 'evenement',
    component: EvenementComponent,
  },
  {
    path: 'galerie',
    component: GallerieComponent,
  },
  {
    path: 'competition',
    component: ListCompComponent,
  },
  {
    path: 'competition/categories',
    component: CategoriesComponent,
  },
  {
    path: 'calendrier',
    component: ListCalComponent,
  },
  {
    path: 'benjamin',
    component: BenjaminMinimeComponent,
  },
  {
    path: 'competition/minimas',
    component: MinimasAthleteCibleComponent,
  },
  {
    path: 'ChampTunMSRRades',
    component: ChampTunMSRradesComponent,
  },
  {
    path: 'ChampQuad',
    component: QuadriathlonComponent,
  },
  {
    path: 'Champ10000m',
    component: Champ10000mComponent,
  },
  {
    path: 'ChampHept',
    component: HeptathlonComponent,
  },
  {
    path: 'ChampDec',
    component: DecathlonComponent,
  },
  {
    path: 'ChampPiste',
    component: ChampPisteComponent,
  },
  {
    path: 'ChampTunMSRHam',
    component: ChampMSRHComponent,
  },
  {
    path: 'ChampAfrMaster',
    component: ChampAfr2019Component,
  },
  {
    path: 'ChampArC',
    component: ChampArCComponent,
  },
  {
    path: 'ChampCC',
    component: FinalCCComponent,
  },
  {
    path: 'formation_20/:id',
    component: FormationDetailComponent,
  },
  {
    path: 'competition/:id',
    component: CompetitionDetailComponent,
  },
  {
    path: 'galerie-detail/:id',
    component: GalerieDetailComponent,
  },
  {
    path: 'evenement-detail/:id',
    component: EvenementDetailComponent,
  },
  {
    path: 'single-player/:id',
    component: SinglePlayerComponent,
  },
  {
    path: 'player-list/:id',
    component: SinglePlayerComponent,
  },
  {
    path: 'single-ligue/:id',
    component: SingleLigueComponent,
  },
  {
    path: 'single-club/:id',
    component: SingleClubComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
