from django.db import models
from modelcluster.fields import ParentalKey
from wagtail.core.models import Page, Orderable
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel, MultiFieldPanel, InlinePanel
from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.search import index
from wagtail.api import APIField

class AdminInfomation(models.Model):
    adminuser = models.TextField(max_length=20, blank=False, null=False)
    adminpassword = models.TextField(max_length=20, blank=False, null=False)

class UserInformation(models.Model):
    username = models.TextField(max_length=20, blank=False, null=False)
    password = models.TextField(max_length=20, blank=False, null=False)
    user_name = models.TextField(max_length=20, blank=False, null=False)
    user_surname = models.TextField(max_length=20, blank=False, null=False)
    user_email = models.EmailField(blank=False, null=False)
    user_phonenumber = models.TextField(max_length=10, blank=False, null=False)

class UserBooking(models.Model):
    userid = models.TextField(max_length=100, blank=False, null=False)
    tourname = models.CharField(max_length=255, blank=False, null=False)
    bookingdate = models.DateField(blank=False, null=False)
    user_name_booking = models.TextField(max_length=100, blank=False, null=False)
    user_surname_booking = models.TextField(max_length=20, blank=False, null=False)
    tourid = models.CharField(max_length=255, blank=False, null=False)
    child_count = models.IntegerField(blank=False, null=False)
    adult_count = models.IntegerField(blank=False, null=False)
    user_phonenumber_booking = models.TextField(max_length=10, blank=False, null=False)
    tourprice = models.IntegerField(blank=False, null=False)
    paymentstatus = models.CharField(
        max_length=255,
        choices=[('0', 'ยังไม่ดำเนินการชำระเงิน'), ('1', 'ชำระเงินเรียบร้อยแล้ว')],
        default='0'
    )
    pay_date = models.DateField(blank=True, null=True)
    pay_time = models.CharField(max_length=20, blank=True, null=True)
    pay_value = models.IntegerField(blank=True, null=True)
    slippaymentimage = models.ImageField(upload_to='slip_paymentimage', blank=True, null=True)
    bookingstatus = models.CharField(
        max_length=255,
        choices=[('0', 'จอง'), ('1', 'ยกเลิกการจอง')],
        default='0'
    )
    bankname = models.CharField(max_length=20, blank=True, null=True)
    banknumber = models.CharField(max_length=20, blank=True, null=True)
    refundstatus = models.CharField(
        max_length=255,
        choices=[('0', 'ยังไม่ดำเนินการ'), ('1', 'ดำเนินการเรียบร้อยแล้ว')],
        blank=True, null=True
    )
    refundslipimage = models.ImageField(upload_to='refundslip', blank=True, null=True)


class UserRefund(models.Model):
    userid = models.TextField(max_length=100, blank=False, null=False)
    tourid = models.CharField(max_length=255, blank=False, null=False)
    user_name_booking = models.TextField(max_length=20, blank=False, null=False)
    user_surname_booking = models.TextField(max_length=20, blank=False, null=False)
    bookingdate = models.DateField(blank=False, null=False)
    bankname = models.TextField(max_length=20, blank=False, null=False)
    banknumber = models.TextField(max_length=20, blank=False, null=False)
    refundstatus = models.CharField(
        max_length=255,
        choices=[('0', 'ยังไม่ดำเนินการ'), ('1', 'ดำเนินการเรียบร้อยแล้ว')]
    )

class ToursDetail(models.Model):  # ข้อมูลโปรแกรมทัวร์
    tourid = models.CharField(max_length=255, blank=False, null=False)
    tourcategory = models.CharField(
        max_length=255,
        choices=[('Promotion', 'Promotion'), ('OneDayTrip', 'One Day Trip'),
                ('WithHostel', 'With Hostel')]
    )
    tourname = models.CharField(max_length=255, blank=False, null=False)
    tourdetail = models.TextField(null=True)
    travelplan = models.TextField(null=True)
    tourinpackage = models.TextField(null=True)
    tournotinpackage = models.TextField(null=True)
    tourpolicy = models.TextField(null=True)
    tourprice = models.TextField(null=True)
    tourimage1 = models.ImageField(upload_to='tourimage')
    tourimage2 = models.ImageField(upload_to='tourimage')

class BlogPage(Page):

    # Database fields

    body = RichTextField(features=['h2', 'h3', 'bold', 'italic', 'link'])
    date = models.DateField("Post date")
    feed_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    # Search index configuration

    search_fields = Page.search_fields + [
        index.SearchField('body'),
        index.FilterField('date'),
    ]

    # Editor panels configuration

    content_panels = Page.content_panels + [
        FieldPanel('date'),
        FieldPanel('body', classname="full"),
        InlinePanel('related_links', label="Related links"),
    ]

    promote_panels = [
        MultiFieldPanel(Page.promote_panels, "Common page configuration"),
        ImageChooserPanel('feed_image'),
    ]
    api_fields = [
        APIField('body'),
        APIField('date'),
        APIField('feed_image'),
        APIField('related_links'),
    ]

class BlogPageRelatedLink(Orderable):
    page = ParentalKey(BlogPage, on_delete=models.CASCADE, related_name='related_links')
    name = models.CharField(max_length=255)
    url = models.URLField()

    panels = [
        FieldPanel('name'),
        FieldPanel('url'),
    ]
    api_fields = [
        APIField('name'),
        APIField('url'),
    ]
