FROM node:19.8.1-alpine3.16
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
EXPOSE 3000
CMD npm run dev