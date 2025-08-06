from django.db import models

# Create your models here.

class certificate_index:
    id: int
    name: str
    desc : str
    link : str
    

class certificate_only(models.Model):
    img = models.ImageField(upload_to='pics')
    img_alt = models.CharField(max_length=200)
    cert_only_name = models.CharField(max_length=200)
    cert_only_link = models.URLField(max_length=1000)
    
    ####################### Changes Made Here ##############################
    order = models.PositiveIntegerField(default=0, blank=False, null=False, db_index=True)
    
    ####################### Changes Made Here ##############################
    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.cert_only_name
    ####################### Changes End Here ##############################