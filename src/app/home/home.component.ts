import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../_service/serv_player';
import {PlayerService as Service} from '../_service/player.service';
import {StaticService} from '../_service/stat';
import {TopPlayerService} from '../_service/topPlayer';
import {EliteService} from '../_service/Elite';
import {ChampTunMSRRadesService} from '../_service/ChampTunMSRRades';
import {ChampECService} from '../_service/ChampEC';
import {ChampMSRHammametService} from '../_service/ChampMSRHammamet';
import {FinalCCGafsaService} from '../_service/FinalCCGafsa';
import {ChAfrMasters2019Service} from '../_service/ChAfrMasters2019';
import {EventService} from '../_service/Event';
import * as AOS from '../../../node_modules/aos';
import {Player} from '../shared/player.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  liste: Player[];
  slideConfig = {slidesToShow: 4, slidesToScroll: 4};
  slideConfig2 = {slidesToShow: 1, slidesToScroll: 1};
  ps: PlayerService;
  public Indoors;
  public Outdoors;
  st: StaticService;
  public Md1718;
  public Md1819;
  tps: TopPlayerService;
  public topPlayers;
  es: EliteService;
  public elite;
  chts: ChampTunMSRRadesService;
  public ChampRSenJun;
  ec: ChampECService;
  public ChampEC;
  hm: ChampMSRHammametService;
  public ChampMSRH;
  fs: FinalCCGafsaService;
  public FinGafsaSEM;
  ms: ChAfrMasters2019Service;
  public ChAfrMaster2019;
  ev: EventService;
  public evenement;
  constructor(ps: PlayerService, st: StaticService, tps: TopPlayerService, es: EliteService,
              chts: ChampTunMSRRadesService, ec: ChampECService, hm: ChampMSRHammametService,
              fs: FinalCCGafsaService, ms: ChAfrMasters2019Service,  ev: EventService, private playerService: Service) {
    this.ps = ps;
    this.st = st;
    this.tps = tps;
    this.es = es;
    this.chts = chts;
    this.ec = ec;
    this.hm = hm;
    this.fs = fs;
    this.ms = ms;
    this.ev = ev;
  }

  ngOnInit() {
    AOS.init();
    this.playerService.getAllAthletes()
        .subscribe(athlete => {
          const players = athlete as Player [];
          this.liste = players.slice(0, 10);
        });
    let c = this.ps.getJSON();
    this.Indoors = c.Indoor;
    this.Outdoors = c.Outdoor;
    let b = this.st.getJSON();
    this.Md1718 = b.Mandat1817;
    this.Md1819 = b.Mandat1819;
    let d = this.tps.getJSON();
    this.topPlayers = d;
    let el = this.es.getJSON();
    this.elite = el;
    let champ1 = this.chts.getJSON();
    this.ChampRSenJun = champ1.ChampRSJ;
    let ecc = this.ec.getJSON();
    this.ChampEC = ecc.QuadriMiM;
    let h = this.hm.getJSON();
    this.ChampMSRH = h.CAF;
    let fn = this.fs.getJSON();
    this.FinGafsaSEM = fn.SEM;
    let af = this.ms.getJSON();
    this.ChAfrMaster2019 = af.Neuf_Fev19;
    let v = this.ev.getJSON();
    this.evenement = v ;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

}
