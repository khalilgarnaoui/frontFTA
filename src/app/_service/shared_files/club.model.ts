export class Club {
  constructor(public id,
              public name,
              // tslint:disable-next-line:variable-name
              public president_secretaireGenerale,
              // tslint:disable-next-line:variable-name
              public mobilePresident_secretaireGenerale,
              public mobileClub,
              public faxClub,
              public adresse,
              public gouvernorat,
              public gouvernoratFR,
              public affiliated: boolean,
              public image
  ) {
  }
}
