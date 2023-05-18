from rest_framework import  serializers
from .models import Event,Event_Details

class AllEventSerializer(serializers.ModelSerializer):
    Events=serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Event
        fields = '__all__'
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
        
class EventExistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('EventCategory','Name','Date','Time','Status')
class EventRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event_Details
        fields = ('Event_id','User_id')
