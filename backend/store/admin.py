from django.contrib import admin
from .models import Producto, CategoriaProducto, MarcaProducto, EstadoProducto

# Register your models here.

models_to_register = [
    Producto, 
    CategoriaProducto,
    MarcaProducto, 
    EstadoProducto,
]

for model in models_to_register:
    admin.site.register(model)