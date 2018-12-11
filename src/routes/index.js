import log from "../logger";
import db  from "../database"

class Investor {

  constructor(profile, positions){
    this.id = profile.id;
    this.name = profile.name;
    this.positions = positions;
  }

  filter(type, value){

    let filterData;

    switch (type) {

      case 'currency' : {
        filterData = this.positions.positions.filter(v => v.currency === value);
        break;
      }
      case 'value' : {
        filterData = this.positions.positions.filter(v => v.value < value);
        break;
      }
    }
    return filterData;
  }

  sortByDate(dir){
    this.position = this.positions.sort(function(a,b){
      a = new Date(a.date);
      b = new Date(b.date);
      if(dir === 'decs' ) {
        return a > b ? -1 : a < b ? 1 : 0;
      }
      else {
        return a < b ? -1 : a > b ? 1 : 0;
      }
    })
  }
}

export default (app) => {
  app.get('/', (req, res) => {
    log.info('/ called');
    res.json({ message: 'You Made it!' });
  });

  app.get('/portfolios', (req, res) => {
    log.info('/ data');
    db.connect().then((resolve, reject) => {
      resolve.load().then((resolve,reject)=> {
        res.json(resolve);
      });
    });
  })


  app.get('/portfolios/currency/:typeCurrency', (req, res) => {
    log.info('/ filter by currency');
    const typeCurrency =  req.params['typeCurrency'].toUpperCase();
    db.connect().then((resolve, reject) => {
      resolve.load().then((resolve,reject)=> {
        const data = resolve;
        const filterByCurrency = data.positions.filter(v => v.currency === typeCurrency);
        res.json(filterByCurrency);
      });
    });
  })

  app.get('/portfolios/investor/:id', (req, res) => {
    log.info('/ get investor details');
    const id =  req.params['id'];
    db.connect().then((resolve, reject) => {
        resolve.load().then((resolve,reject)=> {
          const data = resolve;
          const investor = data.portfolios.filter(v => v.id === parseInt(id))[0];
          const filterByInvestor = data.positions.filter(v => v.portfolioId === parseInt(id) );
          const investorPosition = new Investor(investor,filterByInvestor);
          res.json(investorPosition);
        });
    });
  })
};
