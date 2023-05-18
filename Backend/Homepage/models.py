from django.db import models

# Create your models here.
from django.db import models
from login.models import User
# Create your models here.
class Event(models.Model):
    Event_id = models.AutoField(primary_key=True)
    EventCategory = models.CharField(max_length=200)    
    Name = models.CharField(max_length=100)
    Location = models.CharField(max_length=200)
    Description = models.TextField()
    Organizer = models.ForeignKey(User, blank=True, null=True,on_delete= models.CASCADE)
    Date = models.DateField()
    Time = models.TimeField()
    Payment = models.IntegerField(null=True)
    Status = models.CharField(max_length=100)
    Image = models.CharField(max_length=300)
    def __str__(self):
        return self.Name
class Event_Details(models.Model):
    Event_id = models.ForeignKey(Event, on_delete=models.CASCADE)
    User_id = models.ForeignKey(User,on_delete=models.CASCADE, default=0)
