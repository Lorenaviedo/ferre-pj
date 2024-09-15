from rest_framework import serializers
from .models import Producto, CategoriaProducto, EstadoProducto, MarcaProducto

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'


class CategoryPtSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoriaProducto
        fields = '__all__'


class EstadoPtSerializer(serializers.ModelSerializer):
    class Meta:
        model = EstadoProducto
        fields = '__all__'
        

class MarcaPtSerializer(serializers.ModelSerializer):
    class Meta:
        model = MarcaProducto
        fields = '__all__'