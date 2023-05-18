from django.urls import path
from . import views

urlpatterns = [
    path('',views.HomePage),
    path('Event',views.getEvent),
    path('Event/Register',views.Register_Event),
    path('Event/Deregister',views.DeRegisterEvent),
    path('Event/DeleteEvent',views.DeleteEvent),
    path('Event/My_Events',views.MyEvents),
    path('Event/RegisteredEvents',views.RegisteredEvents),
    path('CreateEvent/',views.CreateEvent)
]