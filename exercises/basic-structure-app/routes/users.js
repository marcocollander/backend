function usersRoutes(app) {
  app.get('/', (req, res) => {
    const { visitor_name } = req.cookies;
    if (visitor_name) {
      res.send(`Witaj ${visitor_name}`);
    } else {
      res.send('Czy my się znamy');
    }
  });

  app.get('/hi/:name', (req, res) => {
    const { name } = req.params;
    const dt = new Date();
    dt.setDate(dt.getDate() + 7);
    res.cookie('visitor_name', name, { expires: dt });
    res.send('Imię zapisano');
  });

  app.get('/logout', (req, res) => {
    res.clearCookie('Phpstorm-cd7c3319');
    res.clearCookie('visitor_name');
    res.redirect('/');
  });
}

module.exports = usersRoutes;
