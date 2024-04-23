from dataclasses import field
from rest_framework import serializers
from .models import AdminInfomation, UserInformation, UserBooking, UserRefund, ToursDetail
from django import forms

class AdminInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminInfomation
        fields = '__all__'
        labels ={
            'adminuser' : 'adminuser',
            'adminpassword' : 'adminpassword',
        }

class UserInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInformation
        fields = '__all__'
        labels ={
            'username' : 'username',
            'password' : 'password',
            'user_name' : 'ชื่อผู้ใช้',
            'user_surname' : 'นามสกุลผู้ใช้',
            'user_email' : 'อีเมลผู้ใช้',
            'user_phonenumber' : 'หมายเลขโทรศัพท์ผู้ใช้',
        }

class UserBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserBooking
        fields = '__all__'
        labels ={
            'userid' : 'userid',
            'tourname' : 'ชื่อโปรแกรมทัวร์',
            'bookingdate' : 'วันจอง',
            'user_name_booking' : 'ชื่อผู้จอง',
            'user_surname_booking' : 'นามสกุลผู้จอง',
            'tourid' : 'รหัสทัวร์',
            'child_count' : 'จำนวนเด็ก',
            'adult_count' : 'จำนวนผู้ใหญ่',
            'user_phonenumber_booking' : '',
            'tourprice' : 'ราคาทัวร์',
            'bookingdate' : 'วันที่จอง',
            'paymentstatus' : 'สถานะการจ่ายเงิน',
            'slippaymentimage' : 'หลักฐานการจ่ายเงิน',
        }
        widgets = {
            'paymentstatus': forms.Select()
        }

class UserRefundSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserRefund
        fields = '__all__'
        labels ={
            'userid' : 'userid',
            'tourid' : 'รหัสทัวร์',
            'user_name_booking' : 'ชื่อผู้จอง',
            'user_surname_booking' : 'นามสกุลผู้จอง',
            'bookingdate' : 'วันจอง',
            'bankname' : 'ชื่อธนาคาร',
            'banknumber' : 'เลขบัญชี',
            'refundstatus' : 'สถานะการคืนเงิน',
        }
        widgets = {
            'refundstatus' : forms.Select()
        }

class ToursDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToursDetail
        fields = '__all__'
        labels ={
            'tourid': 'รหัสทัวร์',
            'tourcategory': 'ประเภทของโปรแกรมทัวร์',
            'tourname':'ชื่อโปรแกรมทัวร์',
            'tourdetail':'ข้อมูลโปรแกรมทัวร์',          
            'travelplan':'แผนการเดินทาง',
            'toursinpackage':'บริการในแพ็คเกจ',         
            'toursnotinpackage':'บริการนอกแพ็คเกจ',
            'tourpolicy':'นโยบายการเปลี่ยนแปลงและการคืนเงิน',
            'tourprice':'ราคาเริ่มต้น',
            'tourimage1':'ภาพที่ 1',
            'tourimage2':'ภาพที่ 2',
        }
        widgets = {
            'tourcategory': forms.Select()
        }