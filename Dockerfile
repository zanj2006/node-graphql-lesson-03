FROM node:14.18.1

RUN mkdir -p /src/graphqlserver/src
WORKDIR /src/graphqlserver

COPY . .

RUN yarn
RUN yarn prisma generate

EXPOSE 9090
CMD [ "yarn", "start" ]
