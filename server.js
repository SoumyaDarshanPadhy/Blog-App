const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");

const homeStartingContent = "The lake or the easy weekend is the desire to want to decorate it. He was always the creator, not the time of his life. Let's be honest, let's just say it's a lot of fun. Cartoon earth dwell in this. Then leave the lion or the hotel with a warm door. Until the vengeful heads of the bow, not the members nor the members. Mattis annoys me from the arrows but he was a diesel guy. The mountains will be born with great gods and a ridiculous mus will miss life's compensation. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. The vengeful life of the author eu augue to drink at the bed of the bow. I hate the memories at any laughter, but I hate the Olympics. Of course there was a lot of annoyance from the arrows at the kids.";
const aboutContent = "At this dwelling the street was said to be the entrance of the Zen, to the kids. It was said that the entrance to the world is to be delivered from the pain of the bears. Not a small boat but a porch. Each street is said to be pure arrows. But want to hang on to the price of laughter rather than the Olympic asset. Mauris in aliquam sem fringilla. There is always laughter in the planning of the pregnant makeup, everyone does not have land orcs. A lot of the mass of life is a torturer who can or should For example, the arrows of the earth are the element of life. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "And the crime of teenagers until the price of the Olympics is wise. The range of the urn is neither cartoon nor just vengeful. Let us live with the bow, the bow, and the cat drink. The customer's choice is sad. The laughter of the cartoon boxes at the ground, the entire immune system. The tips of the arrows do not take any Vikings to drink the bow of life. You can create a lot of love from time to time. Now the arrows, but not the lake. Sometimes the pain is placed on the Internet itself, it is important to the main customer. The cushion is not an integral element. The vengeful child was said to fusce, so that there was no clinical thrill. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor put down and so that the consequences will always be monitored for free.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = []

app.get('/', (req, res) => {
  res.render('home',{homeText:homeStartingContent,posts:posts});
});
app.get('/about', (req, res) => {
  res.render('about',{aboutText:aboutContent});
})
app.get('/contact', (req, res) => {
  res.render('contact',{contactText:contactContent});
})
app.get('/compose', (req, res)=>{
  res.render('compose');
})

app.post('/compose', (req, res) => {
  
  let post = {
    title:req.body.title,
    content:req.body.content
  }
  posts.push(post);
  res.redirect('/');
})

app.get('/post/:postName', (req, res) => {
  
  let postName = _.lowerCase(req.params['postName']);
  posts.forEach(post => {
    if ( _.lowerCase(post.title) === postName) {
      res.render('post',{title:post.title, content:post.content})
    }
    
  });

})


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
