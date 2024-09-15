from django.urls import path
from . import views

urlpatterns = [
    path("userinfo/", views.PersonInfoListCreate.as_view(), name="user-info-list"),
    path("userinfo/delete/<int:pk>/", views.PersonInfoDelete.as_view(), name="delete-user-info"),
    path("address/", views.NoteListCreate.as_view(), name="address-list"),
    path("address/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-address"),
]