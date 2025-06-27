from django.core.validators import RegexValidator
from django.db import models



# Create your models here.
phone_validator = RegexValidator(
    regex=r'^\d{10}$',
    message="This field must be exactly 10 digits."
)

class Colleague(models.Model):
    first_name = models.CharField(max_length=50, blank=False, null=False)
    last_name = models.CharField(max_length=50, blank=False, null=False)
    current_company = models.CharField(max_length=200, blank=False, null=False)
    shared_company = models.CharField(max_length=200, blank=True, null=True)
    phone = models.CharField(
        max_length=10,
        validators=[phone_validator],
        blank=True, 
        null=True
    )
    email = models.EmailField(max_length=254, blank=True, null=True)
    hobbies = models.ManyToManyField('Hobby', related_name='colleague', blank=True)
    photo = models.ImageField(upload_to='contact_photos/', blank=True, null=True)


    class Meta:
        unique_together = ('first_name', 'last_name')

class Hobby(models.Model):

    name = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.name

