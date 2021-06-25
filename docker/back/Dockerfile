FROM python:alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

RUN mkdir -p /home/app
COPY requirements.txt /home/app

# install requirements
RUN pip3 install -r /home/app/requirements.txt

COPY ./backend /home/app
WORKDIR /home/app

CMD ["uvicorn","main:app","--reload","--host","0.0.0.0","--port","8000"]
