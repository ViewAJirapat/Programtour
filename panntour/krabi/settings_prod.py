from .settings import *

#run manage.py with --settings=krabi.settings_prod

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': 'dj',
        'USER': 'root',
        'PASSWORD': 'myPassword',
        'HOST': 'dj_mysql',
        'PORT': '3306',
    }
}

ALLOWED_HOSTS = [
    "wd0205.coe.psu.ac.th"
]

CSRF_TRUSTED_ORIGINS = [
    "https://wd0205.coe.psu.ac.th",
]

DEBUG = False
