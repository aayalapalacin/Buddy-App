release: pipenv run upgrade && pip install -U Flask-SQLAlchemy && pipenv run populate_db
web: gunicorn wsgi --chdir ./src/
