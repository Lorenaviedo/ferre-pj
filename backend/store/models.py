from django.db import models

# Create your models here.
class CategoriaProducto(models.Model):
    nombre_categoria = models.CharField(max_length=150, null=True)

    def __str__(self):
        return self.nombre_categoria

class EstadoProducto(models.Model):
    nombre_estado = models.CharField(max_length=100, null=True)

    def __str__(self):
        return self.nombre_estado
    
class MarcaProducto(models.Model):
    nombre_marca = models.CharField(max_length=100, null=True)

    def __str__(self):
        return self.nombre_marca


# Main TABLE
class Producto(models.Model):
    nombre_producto = models.CharField(max_length=200)
    cantidad = models.IntegerField()
    descripcion = models.TextField(blank=True)
    categoria = models.ForeignKey(CategoriaProducto, on_delete=models.CASCADE, default=None)
    marca = models.ForeignKey(MarcaProducto, on_delete=models.CASCADE, default=None)
    estado = models.ForeignKey(EstadoProducto, on_delete=models.CASCADE, default=None)

    def __str__(self):
        return self.nombre_producto
    