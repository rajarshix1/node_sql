const express = require('express');
const router = express.Router();
const { default: axios } = require('axios');
const Entry = require('./model');

router.get('/', (req, res) => {
  Entry.findAll()
    .then(entries => {
      res.json(entries);
    //   console.log(entries);
    })
    .catch(error => {
      res.status(500).json({ error: 'Error retrieving entries' });
    });
});

router.post('/', async (req, res) => {
//   Entry.findAll()
//     .then(entries => {
//       res.json(entries);
//     })
//     .catch(error => {
        const response = await axios.get('https://api.publicapis.org/entries')
        
          const entries = response.data.entries;
            console.log(entries);
          entries.forEach(entry => {
            Entry.create({
              API: entry.API,
              Description: entry.Description,
              Auth: entry.Auth,
              HTTPS: entry.HTTPS,
              Cors: entry.Cors,
              Link: entry.Link,
              Category: entry.Category,
            });
          });
          res.send('success')
       
    // });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Entry.findByPk(id)
      .then(entry => {
        if (!entry) {
          return res.status(404).json({ error: 'Entry not found' });
        }
        res.json(entry);
      })
      .catch(error => {
        res.status(500).json({ error: 'Error retrieving entry' });
      });
  });
  

  
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    console.log(req.body);
    Entry.findByPk(id)
      .then(entry => {
        if (!entry) {
          return res.status(404).json({ error: 'Entry not found' });
        }
        // entry = req.body
        req.body.API && (entry.API = req.body.API) 
       req.body.Description && (entry.Description = req.body.Description)
       req.body.Auth && (entry.Auth = req.body.Auth)
       req.body.HTTPS && (entry.HTTPS = req.body.HTTPS)
       req.body.Cors && (entry.Cors = req.body.Cors)
       req.body.Link && (entry.Link = req.body.Link)
       req.body.Category && (entry.Category = req.body.Category)
        // console.log(entry);
        return entry.save();
      })
      .then(updatedEntry => {
        res.json(updatedEntry);
      })
      .catch(error => {
        res.status(500).json({ error: 'Error updating entry' });
      });
  });
  
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Entry.findByPk(id)
      .then(entry => {
        if (!entry) {
          return res.status(404).json({ error: 'Entry not found' });
        }
  
        return entry.destroy();
      })
      .then(() => {
        res.sendStatus(204);
      })
      .catch(error => {
        res.status(500).json({ error: 'Error deleting entry' });
      });
  });

module.exports = router;