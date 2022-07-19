release: pipenv run upgrade && pipenv run populate_db
web: gunicorn wsgi --chdir ./src/
