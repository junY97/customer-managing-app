const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.get('/api/customers', (req, res) => {
  res.send(
    [
      {
        'id': 1,
        'name': '조준영',
        'image': 'https://placeimg.com/64/64/any/1',
        'birthday': '970804',
        'gender': '남자',
        'job': '프리랜서',
      },
      {
        'id': 2,
        'name': '장원녕',
        'image': 'https://placeimg.com/64/64/any/2',
        'birthday': '980904',
        'gender': '남자',
        'job': '대학생',
      }
    ]
  )

});


app.listen(4000, () => {
  console.log('server is loading');
}); 