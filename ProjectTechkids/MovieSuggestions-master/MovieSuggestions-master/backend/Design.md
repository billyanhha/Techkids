# 0. Pay Attention

* Data doesn't have active, so delete one list => delete it permanently
* Like without user. So a guy can click 1,000,000 times and it's so okay?

## 1. Collections / Model

* Movies

  * title
  * imageUrl
  * mainActor
  * description
  * link

* Lists
  * listMovie = [movieId1, movieId2, ...]
  * like

## 2. Route / RESTful

Modern day:

* Backend rendering is not popular
* Backend return data instead of HTML
  * node: JSON
* API: RESTful
* URI are all nouns
* Type of Action is determined by request method

--
URI: /api/movies
POST -> /api/movies/ = create one movie
GET -> /api/movies/?page = read all movies

URI: /api/movies/id
GET -> /api/movies/id/?page = read all movies id

URI: /api/movies/:id
GET -> /api/movies/:id = read one movie
PUT -> /api/movies/:id = update one movie

--
URI: /api/lists
POST -> /api/lists = create a list of movies
  req.body like : movieId1 = abc, movieId2 = xyz...
GET -> /api/lists = read all lists
GET -> /api/lists/top10 = read top 10 lists by number of like

--
URI: /api/lists/:id
GET -> /api/lists/:id = read one list
PUT -> /api/lists/:id = update one list
DELETE -> /api/lists/:id = delete one list

POST -> /api/lists/:id/like = like one list
DELETE -> /api/lists/:id/like = unlike one list