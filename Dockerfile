FROM node:16

COPY . .
RUN npm install
EXPOSE 3300
CMD node index.js
