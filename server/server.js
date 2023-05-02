const cors = require('cors'); // Agrega esta línea
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const multer = require('multer');
const { generateId } = require('./modules/idServices');
const clubsDataBase = require('./clubs.json');

const app = express();
const frontEndServer = 'http://localhost:3000';
app.use(cors());

// Setting up the middleware to process the data sent from the form
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', 'default-src \'self\'; script-src \'self\' \'unsafe-inline\'; img-src \'self\' data:; style-src \'self\' \'unsafe-inline\'; font-src \'self\'; object-src \'none\'; base-uri \'self\';');
  next();
});

// // Setting up the root route to display all clubs
app.get('/', (req, res) => {
  fs.readFile('clubs.json', (err, data) => {
    if (err) throw err;
    const clubs = JSON.parse(data);
    res.json({ clubs });
  });
});

// Setting up the route to display a particular club
app.get('/clubs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  fs.readFile('clubs.json', (err, data) => {
    if (err) throw err;
    const clubs = JSON.parse(data);
    const club = clubs.find((c) => c.id === id);
    if (club) {
      console.log(`${club.id}fetched`);
      res.json({ club });
    } else {
      res.status(404).json({ error: 'Club not found' });
    }
  });
});

// Setting up the route to display the form for editing an existing club
app.get('/clubs/edit/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const club = clubsDataBase.find((obj) => obj.id === id);
    res.render('edit', { club });
  } catch (err) {
    res.status(404).json({ error: ` "error":"Club not found" ${err}` });
  }
});

// Setting up the route to display the images of each club
app.get('/public/static/images/:filename', (req, res) => {
  const { filename } = req.params;
  res.sendFile(filename, { root: './public/static/images' }, (err) => {
    if (err) {
      const status = err.status || 500;
      const body = err.message || 'Something went wrong';
      res.status(status).send(body);
      res.status(err.status).end();
    }
  });
});

/// ///////////////////POST////////////////////////

// Config of the route to process the creation of a new club
app.post('/clubs/new', (req, res) => {
  const frontEndLocalhost = 'http://localhost:3000';
  fs.readFile('clubs.json', (readErr, data) => {
    if (readErr) throw readErr;
    const clubs = JSON.parse(data);
    const newClub = {
      id: generateId(clubs),
      name: req.body.name,
      shortName: req.body.shortName,
      tla: req.body.tla,
      address: req.body.address,
      phone: req.body.phone,
      website: req.body.website,
      email: req.body.email,
      founded: req.body.founded,
      clubColors: req.body.clubColors,
      venue: req.body.venue,
    };
    clubs.push(newClub);
    fs.writeFile('clubs.json', JSON.stringify(clubs), (writeErr) => {
      if (writeErr) throw writeErr;
      res.redirect(frontEndLocalhost);
    });
  });
});

// Configuring the route to handle editing an existing club
app.patch('/clubs/edit/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const clubIndex = clubsDataBase.findIndex((obj) => obj.id === id);
    if (clubIndex >= 0) {
      const editedClub = {
        id,
        name: req.body.name,
        shortName: req.body.shortName,
        tla: req.body.tla,
        crestUrl: req.body.crestUrl,
        address: req.body.address,
        phone: req.body.phone,
        website: req.body.website,
        email: req.body.email,
        founded: req.body.founded,
        clubColors: req.body.clubColors,
      };
      clubsDataBase[clubIndex] = editedClub;
      fs.writeFile('clubs.json', JSON.stringify(clubsDataBase), (err) => {
        if (err) throw err;
        res.redirect(`/clubs/${id}`);
      });
    } else {
      res.status(404).json({ error: 'Club not found' });
    }
  } catch (err) {
    res.status(500).json({ error: `${err}` });
  }
});

// Setting up the route to handle the deletion of an existing club
app.delete('/clubs/delete/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const clubIndex = clubsDataBase.findIndex((obj) => obj.id === id);
    if (clubIndex >= 0) {
      clubsDataBase.splice(clubIndex, 1);
      fs.writeFile('clubs.json', JSON.stringify(clubsDataBase), (err) => {
        if (err) throw err;
        res.status(200).json({ message: 'Club deleted successfully' });
      });
    } else {
      res.status(404).json({ error: `Club not found id=${id}` });
    }
  } catch (err) {
    res.status(500).json({ error: `${err} ` });
  }
});

// code to prcoess the upload images

const storagePath = multer.diskStorage({
  // set the storage path
  destination(req, file, cb) {
    cb(null, './public/static/images');
  },
  filename(req, file, cb) {
    // set the file name
    cb(null, `${req.params.id}.png`);
  },
});

const uploadImage = multer({ storage: storagePath });

app.post('/clubs/upload/:id', uploadImage.single('clubLogo'), (req, res) => {
  // Check if the image input is empty
  if (!req.file) {
    res.status(400).json({ message: 'Error, invalid or missing image file' });
  }
  // if not empty, redirect to the club page
  return res.status(200).redirect(frontEndServer);
});

// code to process the reset of the clubs
app.post('/reset-clubs', (req, res) => {
  const pathbackupClubs = './backupClubs/backupClubs.json';
  const pathClubsDataBase = './clubs.json';
  try {
    const backupData = fs.readFileSync(pathbackupClubs);
    fs.writeFileSync(pathClubsDataBase, backupData);
    res.status(200).render('processStatus', { message: 'Clubs reset successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).render('processStatus', { message: 'Internal server error' });
  }
});

module.exports = app; // Exporting the app to be used in the index.js file
