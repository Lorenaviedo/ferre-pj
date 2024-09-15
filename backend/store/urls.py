from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from store import views


router = routers.DefaultRouter()
router.register(r'products', views.ProductView, 'products')
router.register(r'categorias', views.CategoryPtView, 'categorias')
router.register(r'estados', views.EstadoPtView, 'estados')
router.register(r'marcas', views.MarcaPtView, 'marcas')

#api versioning
urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title="FerreSoft API"))
]
