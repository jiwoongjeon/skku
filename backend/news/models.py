from django.db import models

# Create your models here.

class News(models.Model):
    id = models.AutoField(primary_key=True)
    subject = models.CharField(max_length=200)
    content = models.TextField()
    create_date = models.DateTimeField()

    def __str__(self):
        return self.subject
