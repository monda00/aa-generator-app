FROM python:3.11.4-slim-bullseye

WORKDIR /usr/src/app/backend
ENV FLASK_APP=main
ENV FLASK_ENV=development

COPY /requirements.txt ./

RUN pip install --upgrade pip
RUN pip install -r requirements.txt