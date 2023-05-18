from rest_framework import  serializers
from .models import User

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('Email', 'Password')
class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('Email','Password','First_Name', 'Last_Name','Age','Gender')
        

class UserSerializer(serializers.ModelSerializer):
    Username = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ('Success','id', 'Email','Username','First_Name', 'Last_Name','Age','Gender')
    def get_Username(self, obj):
        try:
            return obj.Username()
        except:
            return None
    def get_Success(self, obj):
        try:
            return obj.Success
        except:
            return None
