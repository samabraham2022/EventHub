from django.db import models

# Create your models here.
class User(models.Model):
    Email = models.EmailField()
    Password = models.CharField(max_length=50)
    First_Name = models.CharField(max_length=50,default=None,null=True)
    Last_Name = models.CharField(max_length=50,default=None,null=True)
    Age = models.IntegerField(default=0)
    Mob_No = models.IntegerField(default=0)
    Gender = models.CharField(max_length= 7,default=None,null=True)
    def __str__(self):
        return self.Email
    def Username(self):
        name = self.Email
        res = name.split('@')[0] 
        return res
    def Success(self):
        return True

    