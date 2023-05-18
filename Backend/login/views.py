from django.shortcuts import render
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password
from rest_framework.decorators import api_view
from .models import User
from .serializers import *
# Create your views here.
@api_view(["POST", "GET"])
def login(request, *args, **kwargs):
    
    serializer = LoginSerializer(data = request.data) 
    if serializer.is_valid(raise_exception=True):
        instance = User.objects.all().filter(Email=serializer.data["Email"]).first()
        if instance:
            auth = LoginSerializer(instance)
            if check_password(serializer.data["Password"],auth.data["Password"]):
                instance = User.objects.all().filter(Email=serializer.data["Email"]).first()
                user_data = UserSerializer(instance)
                return Response(user_data.data)
            else:
                return Response({"Response":"Email / Password is Wrong"})
        else:
            return Response({"response":"No Account Please Sign Up"})
@api_view(["POST"])
def SignUp(request, *args, **kwargs):
    serializer = SignupSerializer(data = request.data)
    if serializer.is_valid(raise_exception=True):
        instance = User.objects.all().filter(Email=serializer.data["Email"]).first()
        if instance:
            return Response({"response":"Email Already Exists"})
        else:
            serializer = SignupSerializer(data = request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save(Password=make_password(request.data['Password']))
            return Response({"Response":"Successfully Signed Up","Success":True})
