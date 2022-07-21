release: pipenv run upgrade && pipenv install flask-heroku && pipenv run populate_db
web: gunicorn wsgi --chdir ./src/
