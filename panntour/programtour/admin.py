from django.contrib import admin
from .models import AdminInfomation, UserInformation, UserBooking, UserRefund, ToursDetail

admin.site.register(AdminInfomation)
admin.site.register(UserInformation)
admin.site.register(UserBooking)
admin.site.register(UserRefund)
admin.site.register(ToursDetail)
