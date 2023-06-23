FROM ubuntu:focal
ARG DEBIAN_FRONTEND=noninteractive


RUN apt-get update
RUN apt-get install nodejs npm supervisor -y
RUN npm install --global yarn
RUN mkdir /web
WORKDIR /web

COPY . /web
COPY ./supervisord.conf /etc/

RUN yarn install
EXPOSE 8080

CMD supervisord -c /etc/supervisord.conf
