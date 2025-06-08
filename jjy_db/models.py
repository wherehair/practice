from django.db import models

class User(models.Model):
    name = models.CharField(max_length=50)
    nickname = models.CharField(max_length=50, blank=True, null=True)
    birthdate = models.DateField(blank=True, null=True)
    sex = models.CharField(max_length=10, blank=True, null=True)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=255)
    registered_at = models.DateTimeField(auto_now_add=True)
    profile_photo_path = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.username


class Diary(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='diaries')
    registered_at = models.DateTimeField(auto_now_add=True)
    photo_path = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f"Diary {self.id} by {self.user.username}"


class Photo(models.Model):
    diary = models.ForeignKey(Diary, on_delete=models.CASCADE, related_name='photos')
    registered_at = models.DateTimeField(auto_now_add=True)
    photo_path = models.CharField(max_length=255)

    def __str__(self):
        return f"Photo {self.id} in Diary {self.diary.id}"


class Community(models.Model):
    name = models.CharField(max_length=100)
    community_photo_path = models.CharField(max_length=255, blank=True, null=True)
    users = models.ManyToManyField(User, related_name='communities')

    def __str__(self):
        return self.name