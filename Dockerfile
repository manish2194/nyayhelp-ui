FROM node:16.17-alpine 
RUN apk update && apk add python3-dev make alpine-sdk gcc g++ git build-base openssh openssl bash

RUN mkdir /srv/nyayhelp_ui
WORKDIR /srv/nyayhelp_ui
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

# WORKDIR /srv/nyayhelp-ui
# COPY --from=builder /srv/nyayhelp-ui .
EXPOSE 8080
ENTRYPOINT ["npm" ,"run","start"]


# FROM node:16-alpine
# RUN apk update && apk add python3-dev make alpine-sdk gcc g++ git build-base openssh openssl bash
# RUN curl -s "https://gitlab.com/api/v4/projects/9905046/repository/files/gitlab%2Fsetup_key.sh/raw?ref=master&private_token=FjCQxPFMNXJwmaomMoKi" 2>&1 | sh
# RUN ssh-keyscan -t rsa gitlab.com >> ~/.ssh/known_hosts
# RUN mkdir /srv/rupika
# WORKDIR /srv/rupika
# COPY package.json .
# COPY package-lock.json .
# RUN npm install
# COPY . .
# ENV TZ=UTC
# ENTRYPOINT ["node" ,"--tls-min-v1.0" ,"/srv/rupika/index.js"]


