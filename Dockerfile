FROM node:12.0.0
LABEL maintainer="Marco Barroso"
COPY . /var/www
WORKDIR /var/www    
RUN npm install
ENTRYPOINT npm start
EXPOSE 3000