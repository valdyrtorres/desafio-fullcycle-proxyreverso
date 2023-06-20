FROM php:7.4-cli

WORKDIR /var/www
    
RUN apt-get update && \
    apt-get install livzip-dev -y && \
    docker-php-ext-install zip
    
RUN php -r "copy('https://getcomposer.org/installer', ''" \   
    php composer-setup.php && \
    php -r "unlink('composer-setup.php');"

RUN php composer.phar create-project --prefer-dist laravel/laravel laravel

FROM php:7.4-fpm-alpine
WORKDIR /var/www
RUN rm -rf /var/www/html
COPY --from=builder /var/www/laravel .
RUN ln -s public html
RUN chown -R www-date:www-data /var/www
EXPOSE 9000
CMD [ "php-fpm" ]