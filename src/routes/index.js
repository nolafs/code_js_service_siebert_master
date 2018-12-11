import log from "../logger";
import db  from "../database"

class Investor {

  constructor(profile, positions){
    this.id = profile.id;
    this.name = profile.name;
    this.positions = positions;

    this.sortByDate()
  }

   filtering(type, value){

    let filterData;

    switch (type) {
      case 'currency' : {
        filterData = this.positions.filter(v => v.currency === value.toUpperCase());
        break;
      }
      case 'value-above' : {
        log.info('value',  this.positions)
        filterData = this.positions.filter(v => v.value > parseInt(value));
        break;
      }
      case 'value-below' : {
        log.info('value',  this.positions)
        filterData = this.positions.filter(v => v.value < parseInt(value));
        break;
      }
    }
     return {id:this.id, name: this.name, positions:filterData};
  }

  sortByDate(dir){
    this.positions = this.positions.sort(function(a,b){
      a = new Date(a.date);
      b = new Date(b.date);
      if(dir === 'decs' ) {
        return a > b ? -1 : a < b ? 1 : 0;
      }
      else {
        return a < b ? -1 : a > b ? 1 : 0;
      }
    })

    return {id:this.id, name: this.name, positions:this.positions};
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

  app.get('/portfolios/investor/:id/filter/:type/:value', (req, res) => {
    log.info('/ get investor details');
    const id =  req.params['id'];
    const type =  req.params['type'];
    const value =  req.params['value'];
    db.connect().then((resolve, reject) => {
      resolve.load().then((resolve,reject)=> {
        const data = resolve;
        const investor = data.portfolios.filter(v => v.id === parseInt(id))[0];
        const filterByInvestor = data.positions.filter(v => v.portfolioId === parseInt(id) );
        const investorPosition = new Investor(investor,filterByInvestor);
        res.json(investorPosition.filtering(type,value));
      });
    });
  })

  app.get('/portfolios/investor/:id/sort/:type/:dir', (req, res) => {
    log.info('/ get investor details');
    const id =  req.params['id'];
    const type =  req.params['type'];
    const dir =  req.params['dir'];
    db.connect().then((resolve, reject) => {
      resolve.load().then((resolve,reject)=> {
        const data = resolve;
        const investor = data.portfolios.filter(v => v.id === parseInt(id))[0];
        const filterByInvestor = data.positions.filter(v => v.portfolioId === parseInt(id) );
        const investorPosition = new Investor(investor,filterByInvestor);
        res.json(investorPosition.sortByDate(type,dir));
      });
    });
  })
};
