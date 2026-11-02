# Rules for coding agents: Programtour backend

Programtour is a tour-booking site. The backend is Django 4.0 with Django REST framework 3.13,
in `panntour/`: the project package is `krabi`, the app is `programtour` (`models.py`,
`views.py`, `serializers.py`, `urls.py`). It runs on Python 3.10. The React client is in
`client/`.

## What you may change
- Only the files your task names. Never edit tests, `panntour/krabi/` (settings, URLs),
  existing migrations, `client/`, `requirements.txt` or the deployment files.
- Model changes: the harness runs `makemigrations` for you after each edit. Don't write
  migrations by hand.

## Keep the client working
The React client depends on the current URLs, request field names and success replies.
Keep them exactly unless your task says otherwise. The client sends forms as multipart
FormData, so every value arrives as a string, and an empty JavaScript value arrives as the
text `"null"` or `"undefined"`.

## How views behave
- Bad input never crashes a view. Read `request.data` with `.get()`, never `data["key"]`,
  and convert numbers inside a check.
- One error: `return Response({"detail": "<message>"}, status=400)` (or 401, 404).
  Field errors: `return Response(serializer.errors, status=400)`.
- Use the ORM: `.filter(...).first()`, `get_object_or_404`, serializers. No raw SQL and no
  `print()`.
- Keep the decorators on function views (`@api_view`, `@authentication_classes`,
  `@permission_classes`) as they are.
- Keep imports at the top of the file. Use 4 spaces.

## Done means
`manage.py check`, `makemigrations --check`, ruff (errors only), `manage.py test` and the
task's hidden tests all pass.
