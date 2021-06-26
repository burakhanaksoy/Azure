FROM node:13-alpine


RUN mkdir -p /home/app

COPY ./frontend /home/app

WORKDIR /home/app
RUN npm install

# CMD ["npm","set","registry","https://registry.npmjs.org/"]
CMD ["npm","run","serve"]