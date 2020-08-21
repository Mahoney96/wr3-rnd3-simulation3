INSERT INTO users (id, username, password,  profile_pic) VALUES ('1', 'Dave Chappelle', 'Chappelle Show', 'img.src');
INSERT INTO users (id, username, password,  profile_pic) VALUES ('2', 'WillFerrell', 'AnchorMan', 'img.src');
INSERT INTO users (id, username, password,  profile_pic) VALUES ('3', 'VinceVaughn', 'OldSchool', 'img.src');


CREATE TABLE posts ( id SERIAL, title VARCHAR(45), img TEXT, content TEXT, author_id INTEGER);
INSERT INTO posts (id, title, img, content, author_id ) VALUES ('1', 'To code', 'img.src', 'Book', '1');
INSERT INTO posts (id, title, img, content, author_id ) VALUES ('2', 'Or to Not Code', 'Book', 'img.src', '2');
INSERT INTO posts (id, title, img, content, author_id ) VALUES ('3', 'That is the Question', 'Book', 'img.src', '3');

