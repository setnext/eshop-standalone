FROM --platform=linux/amd64 node:16
RUN apt-get update && apt-get install libvips-dev -y
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./package.json ./
ENV PATH /opt/node_modules/ .bin:$PATH
RUN npm install
WORKDIR /opt/app
COPY ./ .
COPY ./public/uploads/ /public/uploads/
COPY ./src/api/ /src/api/
RUN npm run build
EXPOSE 1337
CMD ["npm","run", "develop"]
