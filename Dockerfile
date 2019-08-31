FROM node:10

ENV SOURCE_HOME .
ENV APP_HOME /app
ENV YARN_CACHE_FOLDER /yarn_cache

RUN mkdir $APP_HOME
WORKDIR $APP_HOME

RUN yarn global add @vue/cli

COPY $SOURCE_HOME $APP_HOME
COPY ./docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]
