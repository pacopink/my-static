FROM daocloud.io/library/nginx:1.9.2
#add dns, only for my vm environment
RUN mkdir /webroot
COPY ./static /webroot/static
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
