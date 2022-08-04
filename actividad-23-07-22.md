# Actividad de aprendizaje - MongoDB

Se le solicita realizar una integración de mongodb al endpoint `GET :: /nasa/apod `

Deberá guardar en la base de datos una colección de apods, donde se guarden los registros de las apods solicitadas al endpoint. 

Las mismas deben ser solamente para los casos de la fecha actual o con fecha especifica, sin contar el caso de rangos pues esos serían arrays.

Para hacer esto deberá crear un esquema y un modelo de apod usando mongoose, dicho esquema deberá representar la información de cada apod.

El `_id` debe ser el autogenerada de mongodb. 

Tener en cuenta que los casos de error con de comunicación con la API de la NASA no deben ser guardados en la BD.
