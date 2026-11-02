from rest_framework import serializers
from .models import AdminInfomation, UserInformation, UserBooking, UserRefund, ToursDetail

class AdminInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminInfomation
        fields = '__all__'
        extra_kwargs = {'adminpassword': {'write_only': True}}

class UserInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInformation
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}

    def validate_username(self, value):
        taken = UserInformation.objects.filter(username__iexact=value)
        if self.instance is not None:
            taken = taken.exclude(pk=self.instance.pk)
        if taken.exists():
            raise serializers.ValidationError('this username is already taken')
        return value

class UserBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserBooking
        fields = '__all__'

class UserRefundSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserRefund
        fields = '__all__'

class ToursDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToursDetail
        fields = '__all__'
