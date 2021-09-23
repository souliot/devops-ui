FROM nginx:stable
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf
ADD devops-ui.tar.gz /usr/share/nginx/html/
EXPOSE 80
