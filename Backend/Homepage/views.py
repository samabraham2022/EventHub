from django.shortcuts import render
from rest_framework.response import Response
from django.http import JsonResponse
from .serializers import *
from rest_framework.decorators import api_view, renderer_classes
from .models import Event

# Create your views here.
def getEventDetails(Event_id):
    instance = Event.objects.all().filter(Event_id = Event_id).first()
    data = {}
    if instance:
        data = EventSerializer(instance).data
        return Response(data)
    else:
        return JsonResponse({"Response": "Event not found"})
@api_view(['GET'])
def HomePage(request, *args, **kwargs):
    instance = Event.objects.all()
    data = {}
    if instance:
        data = AllEventSerializer(instance,many=True).data
        return Response(data)
    

@api_view(['GET','POST'])
def getEvent(request,*args, **kwargs):
    instance = Event.objects.all().filter(Event_id = request.GET['id']).first()
    data = {}
    if instance:
        data = EventSerializer(instance).data
        return Response(data)
    else:
        return JsonResponse({"Response": "Event not found"})
    

@api_view(['POST'])
def CreateEvent(request, *args, **kwargs):
    instance = EventSerializer(data = request.data)
    instance_copy = instance
    EventsList = Event.objects.all().filter(Organizer = request.data['Organizer'])
    for event in EventsList:
        event = EventExistSerializer(event)
        instance_copy = EventExistSerializer(data = request.data)
        if instance_copy.is_valid(raise_exception=True):
            if event.data == instance_copy.data:
                return JsonResponse({"Response": "Event Already exists Under Same User","Success": False})
    if instance.is_valid(raise_exception=False):
        instance.save()
        return JsonResponse({"Response": "Event Created Successfully","Success": True})
    else:
        return JsonResponse({"Response": "There was an error creating the event","Success": False})
    
@api_view(['GET','POST'])
def Register_Event(request, *args, **kwargs):
    EventsList = Event_Details.objects.all().filter(Event_id = request.data['Event_id'] )
    for event in EventsList:
        event = EventRegisterSerializer(event)
        instance_copy = EventRegisterSerializer(data = request.data)
        if instance_copy.is_valid(raise_exception=True):
            if event.data == instance_copy.data:
                return JsonResponse({"Response": "Event Already Registered","Success": False})
    serilizer = EventRegisterSerializer(data = request.data)
    if serilizer.is_valid(raise_exception=True):
        serilizer.save()
        return JsonResponse({"Response": "Successfully Registered","Success": True})
    else:
        return JsonResponse({"Response": "Error registering the event"})
@api_view(['GET', 'POST','DELETE'])
def DeRegisterEvent(request,*args,**kwargs):
    event = Event_Details.objects.all().filter(User_id = request.data['User_id'],Event_id = request.GET['Event_id'] ).first()
    if event:
        event.delete()
        return JsonResponse({"Response": "Successfully Deregistered","Success": True})
    else:
        return JsonResponse({"Response": "Event Not Registered to Deregister","Success": False})
@api_view(['GET', 'POST','DELETE'])
def DeleteEvent(request,*args,**kwargs):
    event = Event.objects.all().filter(Event_id = request.data['Event_id'],Organizer = request.data['Organizer'] ).first()
    if event:
        event.delete()
        return JsonResponse({"Response": "Successfully Deleted","Success": True})
    else:
        return JsonResponse({"Response": "Error, Event Could Not Deleted","Success": False})
@api_view(['GET', 'POST','DELETE'])
def MyEvents(request,*args,**kwargs):
    EventsList = Event.objects.all().filter(Organizer = request.data['User_id'])
    data = {}
    if EventsList:
        data = EventSerializer(EventsList,many=True).data
        return Response(data)
    else:
        return JsonResponse({"Response": "No Events Registered","Success": False})
@api_view(['GET', 'POST'])
def RegisteredEvents(request, *args, **kwargs):
    EventsList = Event_Details.objects.all().filter(User_id = request.data['User_id'])
    data = {}
    if EventsList:
        data = EventRegisterSerializer(EventsList,many=True).data
        EventList = [dataitem['Event_id'] for dataitem in data]
        EventData = Event.objects.all().filter(Event_id__in = EventList)
        FinalData = EventSerializer(EventData,many=True).data
        return Response(FinalData)
    else:
        return JsonResponse({"Response": "No Events Registered","Success": False})