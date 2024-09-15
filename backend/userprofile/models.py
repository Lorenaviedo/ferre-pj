from django.db import models
from django.contrib.auth.models import User
    
    
class Note(models.Model):
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=20)
    additional_info = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.street


class PersonInfo(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phonenumber = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    account = models.ForeignKey(User, on_delete=models.CASCADE, related_name="personal_info")

    def __str__(self):
        return self.firstname
