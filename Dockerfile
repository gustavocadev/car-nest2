FROM node:20.11.1-alpine

# Set directory
WORKDIR /app

# Copy
COPY . /app/
RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:prod"]
