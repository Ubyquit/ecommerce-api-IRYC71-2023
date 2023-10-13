/ / id_producto,
nombre_producto,
precio,
descripcion,
imagen,
stock,
! id_categoria,
id_marca,
id_estado

// !id_categoria,
nombre_categoria

SELECT nombre_producto,precio,nombre_categoria, nombre_marca, nombre_estado
FROM productos
INNER JOIN categorias
ON productos.id_categoria = categorias.id_categoria
INNER JOIN marcas
ON productos.id_marca = marcas.id_marca
INNER JOIN estados
ON productos.id_estado = estados.id_estado;


DELIMITER //
CREATE PROCEDURE obtener_productos()
BEGIN
SELECT nombre_producto,precio,nombre_categoria, nombre_marca, nombre_estado
FROM productos
INNER JOIN categorias
ON productos.id_categoria = categorias.id_categoria
INNER JOIN marcas
ON productos.id_marca = marcas.id_marca
INNER JOIN estados
ON productos.id_estado = estados.id_estado;
END //
DELIMITER ;
