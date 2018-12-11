import log from "../logger";

export default (app) => {
  app.get('/', (req, res) => {
    log.info('/ called');
    res.json({ message: 'You Made it!' });
  });
};
