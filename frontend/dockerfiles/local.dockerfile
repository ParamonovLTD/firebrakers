FROM node:alpine
WORKDIR /app
COPY ./frontend/package* ./
RUN npm i
COPY ./frontend ./
CMD ["npm", "start"]

