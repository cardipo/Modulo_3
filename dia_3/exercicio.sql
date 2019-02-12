-- 
-- select film_id as FID, title as Titulo, release_year `Año de creación`, rental_rate
-- where film_id<500
-- 
-- or rental_rate<1
-- and language_id=4;
-- 
-- select * from film
-- where original_language_id_=2;
-- select title, count(*) as cantidad actores
-- from film as f
-- inner join film_actor as fa on f.film_id=f.film_id
-- inner join actor as a on a.actor_id=fa.actor_id
-- group by title
-- order by f.title;
-- 
-- 
-- Ejercicio enlazar title, category

select f.title, c.name from film f
inner join film_category fc on f.film_id = fc.film_id
inner join category c on c.category_id = fc.category_id