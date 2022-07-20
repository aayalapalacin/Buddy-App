release: pipenv run upgrade && pip install flask-heroku && pipenv run populate_db
web: gunicorn wsgi --chdir ./src/
