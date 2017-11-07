FROM smebberson/alpine-nginx-nodejs
MAINTAINER Ed Asriyan <ed-asriyan@protonmail.com>

# Prepare source
ADD . /application
WORKDIR /application

# Install dependencies
RUN npm install

# Generate bundle
RUN npm run generate_bundle

# Copy nginx config
RUN cp -R public/static/. /usr/html/
RUN cp nginx.conf /etc/nginx/nginx.conf
