from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProductSerializer, CategoryPtSerializer, EstadoPtSerializer, MarcaPtSerializer
from .models import Producto, CategoriaProducto, EstadoProducto, MarcaProducto
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import permission_classes


# Create your views here.
@permission_classes([AllowAny]) # permite que cualquier usuario registrado o no registrado acceda a las tablas 
class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Producto.objects.all() 
    
    # get, update, post, delete --> CRUD 


@permission_classes([AllowAny])
class CategoryPtView(viewsets.ModelViewSet):
    serializer_class = CategoryPtSerializer
    queryset = CategoriaProducto.objects.all()
    

@permission_classes([AllowAny])
class EstadoPtView(viewsets.ModelViewSet):
    serializer_class = EstadoPtSerializer
    queryset = EstadoProducto.objects.all()
    

@permission_classes([AllowAny])
class MarcaPtView(viewsets.ModelViewSet):
    serializer_class = MarcaPtSerializer
    queryset = MarcaProducto.objects.all()