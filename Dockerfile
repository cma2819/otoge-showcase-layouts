FROM node:14

RUN mkdir /nodecg
WORKDIR /nodecg

RUN npm install -g nodecg-cli && \
    nodecg setup

RUN nodecg install cma2819/nodecg-spotify-widget

VOLUME [ "/nodecg/bundles", "/nodecg/cfg", "/nodecg/db", "/nodecg/logs" ]
EXPOSE 9090

CMD ["nodecg", "start"]