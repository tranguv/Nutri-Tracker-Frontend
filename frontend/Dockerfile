ARG NODE_VERSION=21.5.0

FROM node:${NODE_VERSION}-alpine

RUN addgroup app && adduser -S -G app app
USER app

WORKDIR /app 
COPY --chown=app:app package*.json ./
RUN npm install 
COPY . .

EXPOSE 5173 

CMD ["npm", "run", "dev"]