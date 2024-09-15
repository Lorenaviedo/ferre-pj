from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Note, PersonInfo
        
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id", "street", "city", "department", "postal_code", "additional_info", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}
        
class PersonInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonInfo
        fields = ["id", "firstname", "lastname", "email", "phonenumber", "created_at", "account"]
        extra_kwargs = {"author": {"read_only": True}}
